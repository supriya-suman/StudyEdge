// lib.js — routing, on-device storage (progress, settings, AI cache) and small helpers
import { useEffect, useState, useSyncExternalStore } from 'react';

/* ---------------- hash router: #/path/parts?x=1 ---------------- */
function readHash() {
  const raw = location.hash.replace(/^#\/?/, '');
  const [path, query = ''] = raw.split('?');
  return { parts: path.split('/').filter(Boolean).map(decodeURIComponent), params: new URLSearchParams(query) };
}
export function useRoute() {
  const [route, setRoute] = useState(readHash);
  useEffect(() => {
    const on = () => { setRoute(readHash()); window.scrollTo(0, 0); };
    addEventListener('hashchange', on);
    return () => removeEventListener('hashchange', on);
  }, []);
  return route;
}
export const go = (path) => { location.hash = '#/' + path.replace(/^#?\/?/, ''); };

/* ---------------- tiny persistent store (localStorage) ---------------- */
function safeGet(key, fallback) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
}
function safeSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage full or blocked: ignore */ }
}

function createStore(key, initial) {
  let state = { ...initial, ...safeGet(key, {}) };
  const subs = new Set();
  return {
    get: () => state,
    set(update) {
      state = { ...state, ...(typeof update === 'function' ? update(state) : update) };
      safeSet(key, state);
      subs.forEach((f) => f());
    },
    subscribe(f) { subs.add(f); return () => subs.delete(f); }
  };
}

/* progress: mastered + saved term ids, recent terms, mock history, study days */
export const progress = createStore('se.progress', { mastered: [], saved: [], recent: [], mocks: [], days: [] });
export const useProgress = () => useSyncExternalStore(progress.subscribe, progress.get);

const today = () => new Date().toISOString().slice(0, 10);
function touchDay(s) { return s.days.includes(today()) ? s.days : [...s.days, today()].slice(-400); }

export function toggleMastered(id) {
  progress.set((s) => ({
    mastered: s.mastered.includes(id) ? s.mastered.filter((x) => x !== id) : [...s.mastered, id],
    days: touchDay(s)
  }));
}
export function toggleSaved(id) {
  progress.set((s) => ({ saved: s.saved.includes(id) ? s.saved.filter((x) => x !== id) : [id, ...s.saved] }));
}
export function markRecent(id) {
  progress.set((s) => ({ recent: [id, ...s.recent.filter((x) => x !== id)].slice(0, 12), days: touchDay(s) }));
}
export function addMockResult(r) {
  progress.set((s) => ({ mocks: [{ ...r, at: Date.now() }, ...s.mocks].slice(0, 100), days: touchDay(s) }));
}
// consecutive study days ending today (or yesterday)
export function streak(days) {
  const set = new Set(days);
  let n = 0; const d = new Date();
  if (!set.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
  while (set.has(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

/* settings: theme, text size, current semester */
export const settings = createStore('se.settings', { theme: 'system', text: 'm', currentSem: 1, name: 'Supriya' });
export const useSettings = () => useSyncExternalStore(settings.subscribe, settings.get);
export function applySettings(s) {
  const dark = s.theme === 'dark' || (s.theme === 'system' && !matchMedia('(prefers-color-scheme: light)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.documentElement.dataset.text = s.text;
  document.querySelector('meta[name=theme-color]')?.setAttribute('content', dark ? '#0f1220' : '#f6f7fb');
}

/* cache of AI-generated lessons so each term is generated only once per device */
export const aiLessons = {
  get: (id) => safeGet('se.ai.' + id, null),
  set: (id, lesson) => safeSet('se.ai.' + id, lesson)
};

/* export / import everything (to move progress between phone and laptop) */
export function exportData() {
  const out = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k.startsWith('se.')) out[k] = localStorage.getItem(k);
  }
  return JSON.stringify(out);
}
export function importData(json) {
  const obj = JSON.parse(json);
  Object.entries(obj).forEach(([k, v]) => { if (k.startsWith('se.')) localStorage.setItem(k, v); });
  location.reload();
}

/* ---------------- API helper ---------------- */
export async function api(path, body) {
  const r = await fetch('/api/' + path, body ? {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
  } : undefined);
  let data;
  try { data = await r.json(); } catch {
    // non-JSON reply = the /api functions aren't running (plain `npm run dev`) -> treat as offline
    const e = new Error('AI/API functions not available here'); e.code = 'NO_KEY'; e.status = 404; throw e;
  }
  if (!r.ok) { const e = new Error(data.error || 'HTTP ' + r.status); e.code = data.error; e.status = r.status; throw e; }
  return data;
}

export const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
};
