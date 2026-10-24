// api/chat.js — Vercel serverless function for the AI features (Gemini, with Groq as backup).
// Keys stay on the server (env vars GEMINI_API_KEY / GROQ_API_KEY); the phone never sees them.
//
// POST body: { mode, ... }
//   mode "chat"   -> { question, history, catalog }      returns { answer, termIds }
//   mode "lesson" -> { term: {id,name,one,course,lang} } returns { lesson }
//   mode "mock"   -> { topics, pattern, level, count }   returns { questions }

import { lessonSystem, singlePrompt, normalizeLesson, parseJSON } from '../lib/lessonPrompt.js';

import { askAny } from '../lib/llm.js';

// Ask Gemini first, fall back to Groq when Gemini is busy/limited (whichever keys are set in Vercel).
// contents: [{ role, parts:[{text}] }] (Gemini style) -> converted for both providers.
async function gemini(_key, system, contents, json) {
  return askAny({
    geminiKey: process.env.GEMINI_API_KEY, groqKey: process.env.GROQ_API_KEY,
    geminiModel: process.env.GEMINI_MODEL, groqModel: process.env.GROQ_MODEL,
    system, json, maxTokens: 8192,
    messages: contents.map((c) => ({ role: c.role === 'user' ? 'user' : 'assistant', text: c.parts.map((p) => p.text).join('') }))
  });
}

const STUDENT = `The learner is Supriya, a B.Tech CSE (Artificial Intelligence) student at Gurugram University (India),
currently in Semester 1, preparing for university exams and for campus placements / tech interviews.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  const key = process.env.GEMINI_API_KEY || process.env.GROQ_API_KEY;
  if (!key) return res.status(503).json({ error: 'NO_KEY' }); // the app falls back to offline mode

  const body = req.body || {};
  const mode = body.mode || 'chat';

  try {
    if (mode === 'chat') {
      const { question = '', history = [], catalog = [] } = body;
      if (!question.trim() || question.length > 4000) return res.status(400).json({ error: 'Bad question' });
      const catalogText = catalog.slice(0, 60).map((t) => `${t.id} | ${t.name} | ${t.course}`).join('\n');
      const system = `You are StudyEdge Mentor, a friendly senior engineer and teacher. ${STUDENT}
Rules:
- Explain simply first (one-line answer), then go deeper with an example. Use short headings and bullet points.
- For code, use fenced code blocks with the language name, and add a comment on important lines.
- If asked for a study plan, give a day-by-day plan with exact topics.
- Be accurate. If something depends on a version (C23, C++23, Python 3.13+, ES2025), say so.
- At the very end output one line exactly like: TERMS: id1, id2, id3  — choosing up to 4 ids from the catalog below
  that best match what the learner should open next (or "TERMS: none").
Catalog (id | name | course):
${catalogText}`;
      const contents = [
        ...history.slice(-8).map((m) => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: String(m.text).slice(0, 4000) }] })),
        { role: 'user', parts: [{ text: question }] }
      ];
      const { text, model } = await gemini(key, system, contents, false);
      const m = text.match(/TERMS:\s*(.*)\s*$/i);
      const valid = new Set(catalog.map((t) => t.id));
      const termIds = m ? m[1].split(/[,\s]+/).map((s) => s.trim()).filter((s) => valid.has(s)) : [];
      return res.status(200).json({ answer: text.replace(/TERMS:.*$/is, '').trim(), termIds, model });
    }

    if (mode === 'lesson') {
      const t = body.term || {};
      if (!t.name) return res.status(400).json({ error: 'term required' });
      const { text, model } = await gemini(key, lessonSystem(), [{ role: 'user', parts: [{ text: singlePrompt(t) }] }], true);
      const raw = parseJSON(text);
      const lesson = normalizeLesson(raw.lessons ? Object.values(raw.lessons)[0] : raw);
      if (!lesson) throw new Error('Incomplete lesson, please retry');
      return res.status(200).json({ lesson, model });
    }

    if (mode === 'mock') {
      const { topics = [], pattern = 'mcq', level = 'Mixed', count = 10, company = '' } = body;
      const n = Math.min(Math.max(parseInt(count) || 10, 3), 25);
      const patternText = {
        mcq: 'placement-style multiple-choice questions',
        university: 'university end-term exam questions (Gurugram University pattern: short-answer + long-answer, include marks)',
        interview: 'technical interview theory questions',
        coding: 'coding-round problems'
      }[pattern] || 'multiple-choice questions';
      const system = `You are an exam setter. ${STUDENT}
Return ONLY JSON: {"questions":[ ... ]}.
For multiple-choice: each item {"q":"...","options":["A","B","C","D"],"answer":0-3,"explain":"why"}.
For every other pattern: each item {"q":"...","marks":number or null,"answer":"model answer / full solution"}.
Questions must be accurate, unambiguous and varied (concepts, output prediction, tricky edge cases).`;
      const prompt = `Make ${n} ${patternText}. Difficulty: ${level}. ${company ? 'Match the style commonly reported for ' + company + '.' : ''}
Topics: ${topics.slice(0, 40).join('; ') || 'B.Tech CSE (AI) fundamentals'}`;
      const { text, model } = await gemini(key, system, [{ role: 'user', parts: [{ text: prompt }] }], true);
      const data = parseJSON(text);
      return res.status(200).json({ questions: data.questions || [], model });
    }

    return res.status(400).json({ error: 'Unknown mode' });
  } catch (err) {
    return res.status(502).json({ error: String(err.message || err).slice(0, 300) });
  }
}
