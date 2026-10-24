// lib/lessonPrompt.js — one place that defines what a full term card contains.
// Used by the Vercel function (api/chat.js) and by the bulk generator (scripts/generate-lessons.mjs).

export const STUDENT = `The learner is a B.Tech CSE (Artificial Intelligence) student at Gurugram University (India),
preparing for university exams and for campus placements / tech interviews.`;

export const LESSON_SHAPE = `{
  "level": "Beginner" | "Intermediate" | "Advanced",
  "explain": "3-6 short paragraphs or '- ' bullet lines in simple English (markdown: **bold**, \`code\`): what it is, why it matters, a real-life analogy",
  "how": ["step 1 of how it works / how to apply it", "step 2", "... 3 to 6 steps"],
  "keyPoints": ["short fact to remember for exams/interviews", "... 4 to 7 items"],
  "mistakes": ["common mistake or misconception + the fix", "... 3 to 5 items"],
  "syntax": "core syntax / formula / definition in a few lines (empty string if not applicable)",
  "code": { "lang": "c|cpp|python|javascript|java|sql|r|html|css|bash|text", "src": "complete runnable example with a comment on important lines, or a fully worked numerical/example for theory topics", "out": "expected output" },
  "theory": [["interview / viva question", "clear answer"], "... 5 to 7 pairs, easy to tricky"],
  "coding": [["practice problem", "Easy|Medium|Hard", "full solution (code or worked steps)"], "... 3 to 4 items"]
}`;

export const LESSON_RULES = `Rules:
- Be accurate. Mention versions where behaviour depends on them (C23, C++23, Python 3.13+, ES2025).
- Code language: use the course language when given; C for Semester-1 programming; Python for AI/ML/data topics.
- For non-programming subjects (maths, physics, electronics, English, environment, management, law) put a worked example or numerical in "code" with lang "text" and exam-style problems in "coding".
- Keep each lesson focused on THIS term (not the whole subject). No placeholder text.`;

export function lessonSystem() {
  return `You write study cards for an exam + interview prep app. ${STUDENT}
Each card must follow this JSON shape exactly:
${LESSON_SHAPE}
${LESSON_RULES}
Return ONLY JSON.`;
}

// prompt for one term (used live in the app)
export function singlePrompt(t) {
  return `Write the card for:\nTerm: ${t.name}\nOne-liner: ${t.one || ''}\nCourse: ${t.course || ''}\nPreferred language: ${t.lang || 'auto'}\nReturn the card object itself.`;
}

// prompt for several terms at once (used by the bulk generator)
export function batchPrompt(terms) {
  const list = terms.map((t) => `- id: ${t.id}\n  term: ${t.name}\n  one-liner: ${t.one}\n  course: ${t.course}\n  language: ${t.lang || 'auto'}`).join('\n');
  return `Write one card for EACH term below. Return {"lessons": {"<id>": <card>, ...}} using the exact ids.\n${list}`;
}

// strip ``` fences and parse
export function parseJSON(text) {
  const clean = String(text).trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
  return JSON.parse(clean);
}

// make sure a card has every field in the right type (models sometimes drift)
export function normalizeLesson(l) {
  if (!l || typeof l !== 'object') return null;
  const arr = (x) => (Array.isArray(x) ? x.filter(Boolean).map(String) : x ? [String(x)] : []);
  const pairs = (x) => (Array.isArray(x) ? x.map((p) => (Array.isArray(p) ? p.map(String) : p && typeof p === 'object' ? Object.values(p).map(String) : null)).filter((p) => p && p.length >= 2) : []);
  const level = ['Beginner', 'Intermediate', 'Advanced'].includes(l.level) ? l.level : undefined;
  const out = {
    level,
    explain: Array.isArray(l.explain) ? l.explain.join('\n') : String(l.explain || ''),
    how: arr(l.how),
    keyPoints: arr(l.keyPoints),
    mistakes: arr(l.mistakes),
    syntax: String(l.syntax || ''),
    code: l.code && typeof l.code === 'object' ? { lang: String(l.code.lang || 'text'), src: String(l.code.src || ''), out: String(l.code.out || '') } : { lang: 'text', src: '', out: '' },
    theory: pairs(l.theory),
    coding: pairs(l.coding).map((p) => (p.length === 2 ? [p[0], 'Medium', p[1]] : p.slice(0, 3)))
  };
  return out.explain && out.theory.length ? out : null;
}
