// Mentor.jsx — AI Mentor chat (Gemini via /api/chat). Every answer links to the matching term cards.
// Without a key it works as an offline smart search over all terms.
import { useEffect, useRef, useState } from 'react';
import { BY_ID, COURSE_MAP, searchTerms } from '../data/index.js';
import { api } from '../lib.js';
import Md from './Md.jsx';
import { TermRow } from './Learn.jsx';

const SUGGESTIONS = [
  'Explain pointers in C like I am in Semester 1',
  'Make a 7-day plan for my Sem 1 C programming exam',
  'Difference between call by value and call by reference with code',
  'What DSA topics should I learn first for placements?',
  'Explain Kirchhoff’s laws with a solved numerical',
  'How does a neural network learn? Keep it simple',
  'Give me 5 tricky output questions on C loops'
];

function loadChat() { try { return JSON.parse(sessionStorage.getItem('se.chat') || '[]'); } catch { return []; } }

export default function Mentor({ params }) {
  const [msgs, setMsgs] = useState(loadChat);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [offline, setOffline] = useState(false);
  const endRef = useRef(null);
  const asked = useRef(false);

  useEffect(() => { try { sessionStorage.setItem('se.chat', JSON.stringify(msgs.slice(-30))); } catch { /* ignore */ } endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, [msgs]);
  useEffect(() => { const q = params.get('q'); if (q && !asked.current) { asked.current = true; send(q); } }, []);

  async function send(text) {
    const question = text.trim();
    if (!question || busy) return;
    setInput('');
    const candidates = searchTerms(question, 60);
    const history = msgs.map((m) => ({ role: m.role, text: m.text }));
    setMsgs((m) => [...m, { role: 'user', text: question }]);
    setBusy(true);
    try {
      const { answer, termIds } = await api('chat', {
        mode: 'chat', question, history,
        catalog: candidates.map((t) => ({ id: t.id, name: t.name, course: COURSE_MAP[t.course].name }))
      });
      setOffline(false);
      setMsgs((m) => [...m, { role: 'model', text: answer, terms: termIds.length ? termIds : candidates.slice(0, 3).map((t) => t.id) }]);
    } catch (e) {
      const isOffline = e.code === 'NO_KEY' || e.status === 404 || e.message === 'Failed to fetch';
      setOffline(isOffline);
      const found = candidates.slice(0, 6);
      setMsgs((m) => [...m, {
        role: 'model',
        text: isOffline
          ? (found.length ? 'I’m in **offline mode** (AI key not set up), so here are the closest terms in the app:' : 'I’m in **offline mode** and couldn’t find a matching term. Try other keywords.')
          : 'Something went wrong: ' + e.message + '. Please try again.',
        terms: found.map((t) => t.id)
      }]);
    } finally { setBusy(false); }
  }

  return (
    <div className="page chat-page">
      <header className="page-head row between">
        <div>
          <p className="eyebrow">AI Mentor</p>
          <h1>Ask anything</h1>
        </div>
        <span className={'pill ' + (offline ? '' : 'live')}>{offline ? 'Offline search mode' : '✦ Gemini'}</span>
      </header>

      {!msgs.length && (
        <div className="suggestions">
          <p className="muted">Doubts, study plans, numericals, code or interview prep. Answers link to the right term cards.</p>
          {SUGGESTIONS.map((s) => <button key={s} className="chip" onClick={() => send(s)}>{s}</button>)}
        </div>
      )}

      <div className="messages" aria-live="polite">
        {msgs.map((m, i) => (
          <div key={i} className={'msg ' + m.role}>
            {m.role === 'user' ? <p>{m.text}</p> : <Md text={m.text} />}
            {m.terms?.length > 0 && (
              <div className="msg-terms">
                <p className="muted small">Study these next:</p>
                <div className="list">{m.terms.map((id) => BY_ID[id] && <TermRow key={id} t={BY_ID[id]} showCourse />)}</div>
              </div>
            )}
          </div>
        ))}
        {busy && <div className="msg model"><p className="typing">Thinking<span>.</span><span>.</span><span>.</span></p></div>}
        <div ref={endRef} />
      </div>

      <form className="composer" onSubmit={(e) => { e.preventDefault(); send(input); }}>
        <textarea value={input} rows={1} onChange={(e) => setInput(e.target.value)} placeholder="Ask your doubt…" aria-label="Your question"
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input); } }} />
        <button className="btn" disabled={busy || !input.trim()}>Send</button>
        {msgs.length > 0 && <button type="button" className="link-btn small" onClick={() => setMsgs([])}>Clear</button>}
      </form>
    </div>
  );
}
