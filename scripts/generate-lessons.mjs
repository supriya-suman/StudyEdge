#!/usr/bin/env node
// scripts/generate-lessons.mjs — writes the FULL card for every term ahead of time,
// so the app opens every lesson instantly.
//
// Uses every AI key it finds in .env.local and runs them side by side:
//   GEMINI_API_KEY=...   (Google AI Studio)
//   GROQ_API_KEY=...     (console.groq.com)
// When one service is busy or rate-limited, the other keeps working. Stop any time (Ctrl+C);
// the next run continues where it stopped.
//
//   npm run lessons                          # all terms, all keys found
//   npm run lessons -- --provider groq       # only Groq   (or: gemini)
//   npm run lessons -- --sem 1               # only Semester 1
//   npm run lessons -- --only c-prog,dsa     # only these courses
//
// Output: public/lessons/<courseId>.json  +  src/data/levels.json

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { lessonSystem, batchPrompt, normalizeLesson, parseJSON } from '../lib/lessonPrompt.js';
import { callGemini, callGroq, GEMINI_MODELS, GROQ_MODELS } from '../lib/llm.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public', 'lessons');
const LEVELS_FILE = path.join(ROOT, 'src', 'data', 'levels.json');

/* ---------- settings ---------- */
for (const f of ['.env.local', '.env']) {
  const p = path.join(ROOT, f);
  if (!fs.existsSync(p)) continue;
  const buf = fs.readFileSync(p);
  const text = buf[0] === 0xff && buf[1] === 0xfe ? buf.toString('utf16le') : buf.toString('utf8');   // PowerShell may save UTF-16
  for (const line of text.replace(/^﻿/, '').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
const args = process.argv.slice(2);
const arg = (name, def) => { const i = args.indexOf('--' + name); return i >= 0 ? args[i + 1] : def; };
const ONLY = arg('only', '') ? arg('only').split(',').map((s) => s.trim()) : null;
const SEM = arg('sem', '') ? Number(arg('sem')) : null;
const LIMIT = Number(arg('limit', 0));
const PROVIDER = arg('provider', 'all');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const valid = (k) => k && !/your|paste/i.test(k);

const providers = [];
if (valid(process.env.GEMINI_API_KEY) && PROVIDER !== 'groq') {
  providers.push({ name: 'Gemini', key: process.env.GEMINI_API_KEY, call: callGemini, workers: 2, batch: 3, maxTokens: 32768,
    models: [...new Set([process.env.GEMINI_MODEL, ...GEMINI_MODELS].filter(Boolean))], m: 0, until: 0, dead: false, done: 0 });
}
if (valid(process.env.GROQ_API_KEY) && PROVIDER !== 'gemini') {
  // Groq free tier ≈ 8k tokens/minute, so one term per request
  providers.push({ name: 'Groq', key: process.env.GROQ_API_KEY, call: callGroq, workers: 1, batch: 1, maxTokens: 6000,
    models: [...new Set([process.env.GROQ_MODEL, ...GROQ_MODELS].filter(Boolean))], m: 0, until: 0, dead: false, done: 0 });
}
if (!providers.length) {
  console.error('\n✗ No API key found. Put one or both of these lines in a file named .env.local next to package.json:\n  GEMINI_API_KEY=your-gemini-key\n  GROQ_API_KEY=your-groq-key\n');
  process.exit(1);
}

/* ---------- catalog (same files the app uses) ---------- */
async function loadDir(dir) {
  const full = path.join(ROOT, 'src', 'data', dir);
  const out = [];
  for (const f of fs.readdirSync(full).filter((f) => f.endsWith('.js')).sort()) out.push((await import(pathToFileURL(path.join(full, f)))).default);
  return out;
}
const sems = (await loadDir('sem')).sort((a, b) => a.sem - b.sem);
const skills = (await loadDir('skills')).sort((a, b) => (a.order || 99) - (b.order || 99));
const courses = [];
sems.forEach((s) => s.courses.forEach((c) => courses.push({ ...c, sem: s.sem })));
skills.forEach((c) => courses.push({ ...c, sem: null }));
const rank = (c) => (c.sem === 1 ? 0 : c.sem === null ? 1 : 1 + c.sem);   // Sem 1 → tracks → Sem 2..8
const ordered = [...courses].sort((a, b) => rank(a) - rank(b));

fs.mkdirSync(OUT_DIR, { recursive: true });
const store = {};
const readCourse = (id) => {
  if (!store[id]) { const p = path.join(OUT_DIR, id + '.json'); store[id] = fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {}; }
  return store[id];
};
const levels = fs.existsSync(LEVELS_FILE) ? JSON.parse(fs.readFileSync(LEVELS_FILE, 'utf8')) : {};

const todo = [];
for (const c of ordered) {
  if (ONLY && !ONLY.includes(c.id)) continue;
  if (SEM !== null && c.sem !== SEM) continue;
  const done = readCourse(c.id);
  c.units.forEach((u) => u.terms.forEach(([key, name, one, alias]) => {
    const id = c.id + '.' + key;
    if (alias || done[id]) return;                       // aliased terms reuse another card
    todo.push({ id, course: c.id, name, one, courseLabel: `${c.name} — ${u.name}`, lang: c.lang, tries: 0 });
  }));
}
const queue = LIMIT ? todo.slice(0, LIMIT) : todo;
const total = queue.length;
console.log(`\nStudyEdge lesson generator · ${total} terms to write · using ${providers.map((p) => p.name).join(' + ')}\n`);
if (!total) { console.log('✓ Everything is already generated.'); process.exit(0); }

/* ---------- run ---------- */
const LEVEL_CODE = { Beginner: 'B', Intermediate: 'I', Advanced: 'A' };
const started = Date.now();
let written = 0, skipped = 0, inFlight = 0;

function save(courseId) {
  fs.writeFileSync(path.join(OUT_DIR, courseId + '.json'), JSON.stringify(store[courseId]));
  fs.writeFileSync(LEVELS_FILE, JSON.stringify(levels));
}
function giveBack(batch) {
  for (const t of batch.reverse()) {
    if (++t.tries >= 4) { skipped++; console.log(`  ✗ skipped “${t.name}” after 4 tries (next run will retry)`); }
    else queue.unshift(t);
  }
}
const live = () => providers.filter((p) => !p.dead);

async function worker(P) {
  while (!P.dead) {
    if (!queue.length) { if (inFlight === 0) return; await sleep(1000); continue; }
    const wait = P.until - Date.now();
    if (wait > 0) { await sleep(Math.min(wait, 5000)); continue; }
    const batch = queue.splice(0, P.batch);
    const model = P.models[P.m];
    inFlight++;
    try {
      const text = await P.call({
        key: P.key, model, system: lessonSystem(), json: true, maxTokens: P.maxTokens,
        messages: [{ role: 'user', text: batchPrompt(batch.map((t) => ({ ...t, course: t.courseLabel }))) }]
      });
      let parsed;
      try { parsed = parseJSON(text); } catch { giveBack(batch); console.log(`  ${P.name}: reply wasn’t valid JSON — will retry`); continue; }
      const map = parsed.lessons || parsed;
      const ok = [], touched = new Set();
      for (const t of batch) {
        const lesson = normalizeLesson(map[t.id] || (batch.length === 1 ? (map.explain ? map : Object.values(map)[0]) : null));
        if (!lesson) { giveBack([t]); continue; }
        readCourse(t.course)[t.id] = lesson;
        if (lesson.level) levels[t.id] = LEVEL_CODE[lesson.level];
        touched.add(t.course); ok.push(t.name); written++; P.done++;
      }
      touched.forEach(save);
      if (ok.length) {
        const perTerm = (Date.now() - started) / written;
        const left = Math.round((queue.length * perTerm) / 60000);
        console.log(`  ✓ ${written}/${total} [${P.name}] ${ok.join(' · ')}  (~${left < 120 ? left + ' min' : Math.round(left / 60) + ' h'} left)`);
      }
    } catch (e) {
      giveBack(batch.map((t) => ({ ...t, tries: t.tries - 1 })));   // provider problem, not the term's fault
      const s = e.status;
      if (s === 429 && e.daily) {
        P.dead = true; console.log(`  ⏸ ${P.name}: daily limit reached — ${live().length ? 'continuing with ' + live().map((p) => p.name).join(', ') : 'stopping'}`);
      } else if (s === 429) {
        const secs = e.retryAfter || 30; P.until = Date.now() + secs * 1000;
        console.log(`  … ${P.name} rate limit — pausing it ${secs}s${live().length > 1 ? ' (other service keeps going)' : ''}`);
      } else if (s === 404 || ((s === 400 || s === 403) && /model/i.test(e.message))) {
        P.m++; if (P.m >= P.models.length) { P.dead = true; console.log(`  ✗ ${P.name}: no usable model (${e.message})`); }
        else console.log(`  ${P.name}: ${model} unavailable — switching to ${P.models[P.m]}`);
      } else if (s === 400 && /too large|tokens/i.test(e.message)) {
        P.batch = 1; console.log(`  ${P.name}: request too large — switching to one term per request`);
      } else if (s === 401 || s === 403) {
        P.dead = true; console.log(`  ✗ ${P.name}: key rejected (${e.message}). Check ${P.name === 'Groq' ? 'GROQ_API_KEY' : 'GEMINI_API_KEY'} in .env.local`);
      } else if (s >= 500) {
        P.m = (P.m + 1) % P.models.length; P.until = Date.now() + 5000;
        console.log(`  ${P.name} busy (${s}) — trying ${P.models[P.m]}${live().length > 1 ? '; other service keeps going' : ''}`);
      } else {
        P.until = Date.now() + 10000; console.log(`  ${P.name}: ${e.message} — retrying shortly`);
      }
    } finally { inFlight--; }
  }
}

process.on('SIGINT', () => { console.log(`\n⏹ Stopped. ${written} lessons saved this run. Run npm run lessons again to continue.`); process.exit(0); });
await Promise.all(providers.flatMap((P) => Array.from({ length: P.workers }, () => worker(P))));

console.log(`\nThis run: ${written} written${skipped ? `, ${skipped} skipped` : ''}. ${queue.length ? queue.length + ' still to do — run npm run lessons again later.' : 'All done! 🎉'}`);
providers.forEach((p) => console.log(`  ${p.name}: ${p.done} lessons`));
console.log('\nPublish: git add .  →  git commit -m "Add lessons"  →  git push\n');
