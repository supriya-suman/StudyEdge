// lib/llm.js — tiny clients for Gemini and Groq (OpenAI-compatible). Used by api/chat.js and the lesson generator.
// Each call returns text or throws an Error with .status (HTTP code), .provider and .retryAfter (seconds, if given).

export const GEMINI_MODELS = ['gemini-flash-latest', 'gemini-2.5-flash', 'gemini-flash-lite-latest', 'gemini-2.5-flash-lite'];
export const GROQ_MODELS = ['openai/gpt-oss-120b', 'openai/gpt-oss-20b', 'qwen/qwen3.6-27b'];

function fail(provider, status, message, retryAfter) {
  const e = new Error(`${provider} ${status}: ${message}`);
  e.status = status; e.provider = provider; e.retryAfter = retryAfter; e.daily = /per ?day|PerDay|daily|TPD|RPD/i.test(message);
  return e;
}

// messages: [{ role: 'user' | 'assistant', text }]
export async function callGemini({ key, model, system, messages, json, maxTokens = 8192 }) {
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: messages.map((m) => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.text }] })),
      generationConfig: { temperature: 0.4, maxOutputTokens: maxTokens, ...(json ? { responseMimeType: 'application/json' } : {}) }
    })
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw fail('gemini', r.status, data?.error?.message || 'error', Number(r.headers.get('retry-after')) || undefined);
  return data?.candidates?.[0]?.content?.parts?.map((p) => p.text || '').join('') || '';
}

export async function callGroq({ key, model, system, messages, json, maxTokens = 8192 }) {
  const body = {
    model,
    messages: [{ role: 'system', content: system }, ...messages.map((m) => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text }))],
    temperature: 0.4,
    max_completion_tokens: maxTokens,
    ...(json ? { response_format: { type: 'json_object' } } : {}),
    ...(model.startsWith('openai/gpt-oss') ? { reasoning_effort: 'low' } : {})   // keep token use (and rate limits) low
  };
  const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + key },
    body: JSON.stringify(body)
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw fail('groq', r.status, data?.error?.message || 'error', Number(r.headers.get('retry-after')) || undefined);
  return data?.choices?.[0]?.message?.content || '';
}

// Try every configured provider/model until one answers. Used by the live app.
export async function askAny({ geminiKey, groqKey, geminiModel, groqModel, ...opts }) {
  const plan = [];
  if (geminiKey) [geminiModel, ...GEMINI_MODELS].filter(Boolean).slice(0, 2).forEach((m) => plan.push(['gemini', m]));
  if (groqKey) [groqModel, ...GROQ_MODELS].filter(Boolean).slice(0, 2).forEach((m) => plan.push(['groq', m]));
  let last;
  for (const [p, model] of [...new Map(plan.map((x) => [x.join(':'), x])).values()]) {
    try {
      const text = p === 'gemini' ? await callGemini({ key: geminiKey, model, ...opts }) : await callGroq({ key: groqKey, model, ...opts });
      return { text, model: p + ':' + model };
    } catch (e) {
      last = e;
      if ([400, 401, 403].includes(e.status) && !/model/i.test(e.message)) continue;   // bad key for this provider: try the other
    }
  }
  throw last || new Error('No AI provider configured');
}
