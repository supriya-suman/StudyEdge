// Mock.jsx — mock tests: offline MCQ bank, AI-generated tests (MCQ / university exam / interview / coding),
// company-pattern practice and flashcards. Results are saved to Progress.
import { useEffect, useMemo, useRef, useState } from 'react';
import { COURSES, COURSE_MAP, SEMESTERS, SKILLS, BY_ID, LESSONS, semCourses } from '../data/index.js';
import { MCQ, COMPANIES } from '../data/mock.js';
import { api, addMockResult, shuffle, useProgress } from '../lib.js';
import Md from './Md.jsx';

const PATTERNS = [
  ['mcq', 'MCQ (placement style)'],
  ['university', 'University exam (sessional / end-term)'],
  ['interview', 'Interview theory'],
  ['coding', 'Coding round']
];

// turn a scope value ("all" | "sem:3" | "course:dsa") into a list of course ids
function scopeCourses(scope) {
  if (scope.startsWith('sem:')) return semCourses(Number(scope.slice(4))).map((c) => c.id);
  if (scope.startsWith('course:')) return [scope.slice(7)];
  return COURSES.map((c) => c.id);
}

export default function Mock({ params }) {
  const initialCourse = params.get('course');
  const [mode, setMode] = useState(params.get('company') ? 'company' : 'quick');
  const [scope, setScope] = useState(initialCourse ? 'course:' + initialCourse : 'all');
  const [pattern, setPattern] = useState('mcq');
  const [level, setLevel] = useState('Mixed');
  const [count, setCount] = useState(10);
  const [company, setCompany] = useState(params.get('company') || COMPANIES[0].id);
  const [test, setTest] = useState(null); // {title, kind:'mcq'|'written'|'flash', questions}
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');

  const courseIds = scopeCourses(scope);
  const bank = useMemo(() => MCQ.filter((q) => courseIds.includes(q[0])), [scope]);
  const flashPool = useMemo(() => Object.entries(LESSONS)
    .filter(([id]) => BY_ID[id] && courseIds.includes(BY_ID[id].course))
    .flatMap(([id, l]) => (l.theory || []).map(([q, a]) => ({ q, a, term: id }))), [scope]);
  const scopeLabel = scope === 'all' ? 'Everything' : scope.startsWith('sem:') ? 'Semester ' + scope.slice(4) : COURSE_MAP[scope.slice(7)]?.name;

  // topics sent to the AI: unit names + a sample of term names from the chosen courses
  function topicsFor(ids) {
    return shuffle(ids.flatMap((cid) => {
      const c = COURSE_MAP[cid];
      return c.units.flatMap((u) => [c.name + ' — ' + u.name, ...shuffle(u.ids).slice(0, 3).map((tid) => BY_ID[tid].name)]);
    })).slice(0, 40);
  }

  function startQuick() {
    const qs = shuffle(bank).slice(0, count).map(([cid, q, options, answer, explain]) => ({ q, options, answer, explain, course: cid }));
    if (!qs.length) { setMsg('No offline questions for this scope yet — try the AI mock.'); return; }
    setTest({ title: 'Quick MCQ · ' + scopeLabel, kind: 'mcq', questions: qs });
  }

  async function startAI(opts) {
    setBusy(true); setMsg('');
    try {
      const { questions } = await api('chat', { mode: 'mock', ...opts });
      if (!questions.length) throw new Error('No questions returned');
      const kind = opts.pattern === 'mcq' ? 'mcq' : 'written';
      setTest({ title: opts.title, kind, questions });
    } catch (e) {
      if (e.code === 'NO_KEY' || e.status === 404) {
        setMsg('AI mocks need the Gemini key (see README). Starting an offline quiz instead.');
        if (opts.pattern === 'mcq') startQuick();
      } else setMsg('Could not create the test: ' + e.message);
    } finally { setBusy(false); }
  }

  function startFlash() {
    const cards = shuffle(flashPool).slice(0, count);
    if (!cards.length) { setMsg('Flashcards come from fully written lessons — none in this scope yet.'); return; }
    setTest({ title: 'Flashcards · ' + scopeLabel, kind: 'flash', questions: cards });
  }

  if (test) return <Runner test={test} onExit={() => setTest(null)} />;

  const comp = COMPANIES.find((c) => c.id === company);
  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Mock</p>
        <h1>Test yourself</h1>
        <p className="muted">Timed MCQs, university-pattern papers, interview theory, coding rounds and company-style practice.</p>
      </header>

      <div className="seg" role="tablist">
        {[['quick', 'Quick MCQ'], ['ai', 'AI mock'], ['company', 'Company pattern'], ['flash', 'Flashcards']].map(([k, l]) => (
          <button key={k} role="tab" aria-selected={mode === k} className={mode === k ? 'active' : ''} onClick={() => { setMode(k); setMsg(''); }}>{l}</button>
        ))}
      </div>

      <section className="card form">
        {mode !== 'company' && (
          <label>Scope
            <select value={scope} onChange={(e) => setScope(e.target.value)}>
              <option value="all">Everything</option>
              <optgroup label="Semesters">{SEMESTERS.map((s) => <option key={s.sem} value={'sem:' + s.sem}>Semester {s.sem}</option>)}</optgroup>
              <optgroup label="Skill tracks">{SKILLS.map((s) => <option key={s.id} value={'course:' + s.id}>{s.name}</option>)}</optgroup>
              {SEMESTERS.map((s) => (
                <optgroup key={'g' + s.sem} label={'Semester ' + s.sem + ' subjects'}>
                  {semCourses(s.sem).map((c) => <option key={c.id} value={'course:' + c.id}>{c.name}</option>)}
                </optgroup>
              ))}
            </select>
          </label>
        )}

        {mode === 'ai' && (
          <>
            <label>Pattern<select value={pattern} onChange={(e) => setPattern(e.target.value)}>{PATTERNS.map(([k, l]) => <option key={k} value={k}>{l}</option>)}</select></label>
            <label>Difficulty<select value={level} onChange={(e) => setLevel(e.target.value)}>{['Easy', 'Medium', 'Hard', 'Mixed'].map((l) => <option key={l}>{l}</option>)}</select></label>
          </>
        )}

        {mode === 'company' && (
          <>
            <label>Company<select value={company} onChange={(e) => setCompany(e.target.value)}>{COMPANIES.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></label>
            <div className="company">
              <p><strong>{comp.name}</strong> · <span className="muted">{comp.type}</span></p>
              <p className="muted small">Commonly reported rounds (companies change these often):</p>
              <ol>{comp.rounds.map((r, i) => <li key={i}>{r}</li>)}</ol>
              <p className="muted small">Focus: {comp.focus.map((f) => COURSE_MAP[f]?.name || f).join(', ')}</p>
            </div>
            <label>Round to practise<select value={pattern} onChange={(e) => setPattern(e.target.value)}>{PATTERNS.filter(([k]) => k !== 'university').map(([k, l]) => <option key={k} value={k}>{l}</option>)}</select></label>
          </>
        )}

        <label>Questions<select value={count} onChange={(e) => setCount(Number(e.target.value))}>{[5, 10, 15, 20, 25].map((n) => <option key={n}>{n}</option>)}</select></label>

        <div className="row gap wrap">
          {mode === 'quick' && <button className="btn" onClick={startQuick}>Start ({bank.length} in bank)</button>}
          {mode === 'ai' && <button className="btn" disabled={busy} onClick={() => startAI({ pattern, level, count, topics: topicsFor(courseIds), title: PATTERNS.find((p) => p[0] === pattern)[1] + ' · ' + scopeLabel })}>{busy ? 'Creating your test…' : '✦ Generate test'}</button>}
          {mode === 'company' && <button className="btn" disabled={busy} onClick={() => startAI({ pattern, level: comp.level, count, company: comp.name, topics: topicsFor(comp.focus.filter((f) => COURSE_MAP[f])), title: comp.name + ' · ' + PATTERNS.find((p) => p[0] === pattern)[1] })}>{busy ? 'Creating your test…' : '✦ Start ' + comp.name + ' practice'}</button>}
          {mode === 'flash' && <button className="btn" onClick={startFlash}>Start ({flashPool.length} cards)</button>}
        </div>
        {msg && <p className="warn">{msg}</p>}
      </section>
      <History />
    </div>
  );
}

function History() {
  const p = useProgress();
  if (!p.mocks.length) return null;
  return (
    <section>
      <h2 className="section-title">Recent results</h2>
      <div className="list">
        {p.mocks.slice(0, 8).map((m, i) => (
          <div key={i} className="result-row">
            <span>{m.title}</span>
            <span className={'score ' + (m.score / m.total >= 0.7 ? 'good' : m.score / m.total >= 0.4 ? 'ok' : 'low')}>{m.score}/{m.total}</span>
            <span className="muted small">{new Date(m.at).toLocaleDateString()}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- running a test ---------------- */
function Runner({ test, onExit }) {
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reveal, setReveal] = useState(false);
  const [done, setDone] = useState(false);
  const total = test.questions.length;
  const [secs, setSecs] = useState(test.kind === 'mcq' ? total * 60 : 0);
  const saved = useRef(false);

  useEffect(() => {
    if (test.kind !== 'mcq' || done) return;
    const t = setInterval(() => setSecs((s) => { if (s <= 1) { clearInterval(t); setDone(true); return 0; } return s - 1; }), 1000);
    return () => clearInterval(t);
  }, [done]);

  const score = test.kind === 'mcq'
    ? test.questions.filter((q, k) => answers[k] === Number(q.answer)).length
    : Object.values(answers).filter((v) => v === 'got').length;

  useEffect(() => {
    if (done && !saved.current && test.kind !== 'flash') { saved.current = true; addMockResult({ title: test.title, score, total }); }
  }, [done]);

  if (done) {
    return (
      <div className="page">
        <header className="page-head">
          <p className="eyebrow">Result</p>
          <h1>{score} / {total}</h1>
          <p className="muted">{test.title}</p>
          <div className="row gap"><button className="btn" onClick={onExit}>New test</button></div>
        </header>
        {test.kind === 'mcq' && (
          <ol className="review">
            {test.questions.map((q, k) => (
              <li key={k} className={answers[k] === Number(q.answer) ? 'right' : 'wrong'}>
                <Md text={q.q} />
                <p className="small">Your answer: {answers[k] !== undefined ? q.options[answers[k]] : '—'} · Correct: <strong>{q.options[q.answer]}</strong></p>
                {q.explain && <div className="muted small"><Md text={q.explain} /></div>}
              </li>
            ))}
          </ol>
        )}
      </div>
    );
  }

  const q = test.questions[i];
  const nextQ = () => { setReveal(false); if (i + 1 >= total) setDone(true); else setI(i + 1); };
  return (
    <div className="page">
      <div className="runner-head">
        <button className="link-btn" onClick={onExit}>✕ Quit</button>
        <span className="muted">{i + 1} / {total}</span>
        {test.kind === 'mcq' && <span className={'timer' + (secs < 30 ? ' low' : '')}>⏱ {Math.floor(secs / 60)}:{String(secs % 60).padStart(2, '0')}</span>}
      </div>
      <span className="bar"><i style={{ width: ((i) / total) * 100 + '%' }} /></span>
      <section className="card question">
        {q.marks ? <span className="pill">{q.marks} marks</span> : null}
        <Md text={q.q} />
        {test.kind === 'mcq' && (
          <div className="options">
            {q.options.map((o, k) => (
              <button key={k} className={'option' + (answers[i] === k ? ' picked' : '')} onClick={() => setAnswers({ ...answers, [i]: k })}>
                <span className="opt-key">{'ABCD'[k]}</span> <span>{o}</span>
              </button>
            ))}
          </div>
        )}
        {test.kind !== 'mcq' && (reveal
          ? <div className="answer"><h4 className="md-h">{test.kind === 'flash' ? 'Answer' : 'Model answer'}</h4><Md text={q.answer || q.a} /></div>
          : <button className="btn ghost" onClick={() => setReveal(true)}>Show answer</button>)}
      </section>
      <div className="row gap end">
        {test.kind === 'mcq' && <button className="btn" onClick={nextQ}>{i + 1 >= total ? 'Finish' : 'Next ›'}</button>}
        {test.kind !== 'mcq' && reveal && (
          <>
            <button className="btn ghost" onClick={() => { setAnswers({ ...answers, [i]: 'miss' }); nextQ(); }}>Missed it</button>
            <button className="btn" onClick={() => { setAnswers({ ...answers, [i]: 'got' }); nextQ(); }}>Got it ✓</button>
          </>
        )}
      </div>
    </div>
  );
}
