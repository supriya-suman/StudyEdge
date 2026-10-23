// Learn.jsx — Home, Semester, Course (subject / skill track) and Term pages
import { useEffect, useMemo, useState } from 'react';
import {
  SEMESTERS, SKILLS, COURSES, COURSE_MAP, BY_ID, KIND, STATS, semCourses, searchTerms,
  termOfTheDay, lessonFor, hasLesson, relatedPlaces
} from '../data/index.js';
import { useProgress, useSettings, toggleMastered, toggleSaved, markRecent, aiLessons, api, go } from '../lib.js';
import Md from './Md.jsx';
import CodeBlock from './CodeBlock.jsx';

/* ---------- shared bits ---------- */
export function Bar({ value, label }) {
  const v = Math.round(value || 0);
  return <span className="bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={v} aria-label={label}><i style={{ width: v + '%' }} /></span>;
}
export const pct = (ids, mastered) => (ids.length ? (ids.filter((id) => mastered.includes(id)).length / ids.length) * 100 : 0);

export function TermRow({ t, showCourse }) {
  const p = useProgress();
  const c = COURSE_MAP[t.course];
  return (
    <a className="term-row" href={'#/t/' + encodeURIComponent(t.id)}>
      <span className={'check' + (p.mastered.includes(t.id) ? ' on' : '')} aria-hidden>{p.mastered.includes(t.id) ? '✓' : ''}</span>
      <span className="term-row-body">
        <span className="term-row-name">{t.name}{hasLesson(t) && <span className="pill tiny" title="Full lesson written">Full</span>}</span>
        <span className="term-row-one">{t.one}</span>
        {showCourse && <span className="term-row-course" style={{ color: c.color }}>{c.icon} {c.short || c.name}</span>}
      </span>
      <span className="chev" aria-hidden>›</span>
    </a>
  );
}

function CourseCard({ c }) {
  const p = useProgress();
  const value = pct(c.termIds, p.mastered);
  return (
    <a className="course-card" href={'#/c/' + c.id} style={{ '--accent': c.color }}>
      <div className="course-card-top">
        <span className="course-icon" aria-hidden>{c.icon}</span>
        {c.kind && <span className="pill" style={{ color: KIND[c.kind]?.color }}>{KIND[c.kind]?.label}</span>}
        {c.code && <span className="muted small">{c.code}</span>}
      </div>
      <h3>{c.name}</h3>
      {c.desc && <p className="muted small clamp2">{c.desc}</p>}
      <div className="course-card-foot"><span className="muted small">{c.termIds.length} terms · {c.units.length} units</span><Bar value={value} label={c.name + ' progress'} /></div>
    </a>
  );
}

/* ---------- HOME ---------- */
export function Home({ install }) {
  const [q, setQ] = useState('');
  const p = useProgress();
  const s = useSettings();
  const results = useMemo(() => (q.trim().length > 1 ? searchTerms(q, 30) : []), [q]);
  const tod = termOfTheDay();
  const hour = new Date().getHours();
  const hello = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">B.Tech CSE (AI) · Gurugram University</p>
          <h1>{hello}, {s.name} 👋</h1>
          <p className="muted">{STATS.terms.toLocaleString()} terms across 8 semesters and {SKILLS.length} skill tracks. Mark terms as mastered to track progress.</p>
        </div>
        {install}
      </header>

      <div className="search">
        <span aria-hidden>⌕</span>
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search any term — pointers, BST, Kadane, CNN, CORS…" aria-label="Search terms" />
      </div>

      {q.trim().length > 1 ? (
        <section>
          <h2 className="section-title">{results.length ? `Results for “${q}”` : 'No match yet'}</h2>
          {!results.length && <p className="muted">Ask the <a href={'#/mentor?q=' + encodeURIComponent(q)}>AI Mentor</a> instead — it can explain anything.</p>}
          <div className="list">{results.map((t) => <TermRow key={t.id} t={t} showCourse />)}</div>
        </section>
      ) : (
        <>
          <section className="grid-2">
            {tod && (
              <a className="feature-card" href={'#/t/' + encodeURIComponent(tod.id)}>
                <span className="eyebrow">Term of the day</span>
                <h3>{tod.name}</h3>
                <p className="muted">{tod.one}</p>
                <span className="muted small">{COURSE_MAP[tod.course].name}</span>
              </a>
            )}
            <div className="feature-card">
              <span className="eyebrow">Continue</span>
              {p.recent.length ? p.recent.slice(0, 3).map((id) => BY_ID[id] && (
                <a key={id} className="mini-link" href={'#/t/' + encodeURIComponent(id)}>{BY_ID[id].name} <span className="muted small">· {COURSE_MAP[BY_ID[id].course].short || COURSE_MAP[BY_ID[id].course].name}</span></a>
              )) : <p className="muted">Start with <a href="#/sem/1">Semester 1</a> or the <a href="#/c/dsa">DSA track</a>.</p>}
            </div>
          </section>

          <section>
            <div className="section-head"><h2 className="section-title">Semesters</h2><span className="muted small">Full syllabus, unit-wise</span></div>
            <div className="sem-grid">
              {SEMESTERS.map((sem) => {
                const ids = semCourses(sem.sem).flatMap((c) => c.termIds);
                const value = ids.length ? (ids.filter((id) => p.mastered.includes(id)).length / ids.length) * 100 : 0;
                return (
                  <a key={sem.sem} href={'#/sem/' + sem.sem} className={'sem-card' + (sem.sem === s.currentSem ? ' current' : '')}>
                    <span className="sem-num">{sem.sem}</span>
                    <span className="sem-label">Semester {sem.sem}{sem.sem === s.currentSem && <span className="pill tiny">You're here</span>}</span>
                    <span className="muted small">{semCourses(sem.sem).length} subjects · {ids.length} terms</span>
                    <Bar value={value} label={'Semester ' + sem.sem + ' progress'} />
                  </a>
                );
              })}
            </div>
          </section>

          <section>
            <div className="section-head"><h2 className="section-title">Skill tracks</h2><span className="muted small">Interview & placement prep</span></div>
            <div className="course-grid">{SKILLS.map((c) => <CourseCard key={c.id} c={COURSE_MAP[c.id]} />)}</div>
          </section>
        </>
      )}
    </div>
  );
}

/* ---------- SEMESTER ---------- */
export function Semester({ n }) {
  const sem = SEMESTERS.find((x) => x.sem === Number(n));
  if (!sem) return <NotFound />;
  const list = semCourses(sem.sem);
  const groups = ['core', 'maths', 'science', 'lab', 'humanities', 'elective', 'audit', 'project'];
  return (
    <div className="page">
      <a className="back" href="#/">‹ Learn</a>
      <header className="page-head">
        <p className="eyebrow">Semester {sem.sem}</p>
        <h1>{sem.title || 'Semester ' + sem.sem}</h1>
        {sem.note && <p className="muted">{sem.note}</p>}
      </header>
      {groups.map((g) => {
        const cs = list.filter((c) => (c.kind || 'core') === g);
        if (!cs.length) return null;
        return (
          <section key={g}>
            <h2 className="section-title">{KIND[g].label}{g === 'elective' ? ' (choose one per slot)' : ''}</h2>
            <div className="course-grid">{cs.map((c) => <CourseCard key={c.id} c={c} />)}</div>
          </section>
        );
      })}
      <nav className="pager">
        {sem.sem > 1 ? <a href={'#/sem/' + (sem.sem - 1)}>‹ Semester {sem.sem - 1}</a> : <span />}
        {sem.sem < 8 ? <a href={'#/sem/' + (sem.sem + 1)}>Semester {sem.sem + 1} ›</a> : <span />}
      </nav>
    </div>
  );
}

/* ---------- COURSE (subject or skill track) ---------- */
export function Course({ id }) {
  const c = COURSE_MAP[id];
  const p = useProgress();
  const [open, setOpen] = useState(() => new Set([0]));
  const [q, setQ] = useState('');
  if (!c) return <NotFound />;
  const value = pct(c.termIds, p.mastered);
  const filter = q.trim().toLowerCase();
  return (
    <div className="page">
      <a className="back" href={c.group === 'sem' ? '#/sem/' + c.sem : '#/'}>‹ {c.group === 'sem' ? 'Semester ' + c.sem : 'Learn'}</a>
      <header className="page-head" style={{ '--accent': c.color }}>
        <p className="eyebrow">{c.group === 'sem' ? `Semester ${c.sem} · ${KIND[c.kind]?.label || ''}${c.code ? ' · ' + c.code : ''}` : 'Skill track'}</p>
        <h1><span aria-hidden>{c.icon}</span> {c.name}</h1>
        {c.desc && <p className="muted">{c.desc}</p>}
        <div className="row gap"><Bar value={value} label="Course progress" /><span className="muted small">{Math.round(value)}% · {c.termIds.filter((x) => p.mastered.includes(x)).length}/{c.termIds.length} mastered</span></div>
        <div className="row gap wrap">
          <a className="btn small" href={'#/mock?course=' + c.id}>✎ Mock test</a>
          <a className="btn small ghost" href={'#/mentor?q=' + encodeURIComponent('Make me a study plan for ' + c.name)}>✦ Study plan</a>
          <button className="btn small ghost" onClick={() => setOpen(open.size === c.units.length ? new Set() : new Set(c.units.map((_, i) => i)))}>{open.size === c.units.length ? 'Collapse all' : 'Expand all'}</button>
        </div>
      </header>
      <div className="search slim"><span aria-hidden>⌕</span><input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={'Filter ' + c.termIds.length + ' terms'} aria-label="Filter terms" /></div>
      {c.units.map((u, ui) => {
        const ids = u.ids.filter((tid) => !filter || BY_ID[tid].name.toLowerCase().includes(filter) || BY_ID[tid].one.toLowerCase().includes(filter));
        if (filter && !ids.length) return null;
        const isOpen = filter || open.has(ui);
        const done = u.ids.filter((x) => p.mastered.includes(x)).length;
        return (
          <section key={ui} className="unit">
            <button className="unit-head" aria-expanded={!!isOpen} onClick={() => { const n = new Set(open); n.has(ui) ? n.delete(ui) : n.add(ui); setOpen(n); }}>
              <span><strong>{u.name}</strong><span className="muted small"> · {done}/{u.ids.length}</span></span>
              <span aria-hidden>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="list">{ids.map((tid) => <TermRow key={tid} t={BY_ID[tid]} />)}</div>}
          </section>
        );
      })}
    </div>
  );
}

/* ---------- TERM ---------- */
const TABS = [['learn', 'Learn'], ['code', 'Syntax & Code'], ['theory', 'Interview Q&A'], ['coding', 'Coding Qs']];

export function Term({ id }) {
  const t = BY_ID[id];
  const p = useProgress();
  const [tab, setTab] = useState('learn');
  const [ai, setAi] = useState(() => (t ? aiLessons.get(t.id) : null));
  const [state, setState] = useState('idle'); // idle | loading | error | nokey
  const [err, setErr] = useState('');
  useEffect(() => { if (t) markRecent(t.id); }, [t?.id]);
  if (!t) return <NotFound />;
  const c = COURSE_MAP[t.course];
  const written = lessonFor(t);
  const lesson = written || ai;
  const unit = c.units[t.unit];
  const pos = c.termIds.indexOf(t.id);
  const prev = BY_ID[c.termIds[pos - 1]];
  const next = BY_ID[c.termIds[pos + 1]];
  const others = relatedPlaces(t);

  async function generate() {
    setState('loading'); setErr('');
    try {
      const { lesson } = await api('chat', { mode: 'lesson', term: { id: t.id, name: t.name, one: t.one, course: c.name + ' — ' + unit.name, lang: c.lang } });
      aiLessons.set(t.id, lesson); setAi(lesson); setState('idle');
    } catch (e) {
      if (e.code === 'NO_KEY' || e.status === 404) setState('nokey');
      else { setState('error'); setErr(e.message); }
    }
  }

  return (
    <div className="page term-page" style={{ '--accent': c.color }}>
      <a className="back" href={'#/c/' + c.id}>‹ {c.short || c.name}</a>
      <header className="page-head">
        <p className="eyebrow">{c.group === 'sem' ? 'Sem ' + c.sem + ' · ' : ''}{c.name} · {unit.name}</p>
        <h1>{t.name}</h1>
        <p className="one-liner">{t.one}</p>
        <div className="row gap wrap">
          <button className={'btn small' + (p.mastered.includes(t.id) ? ' done' : '')} onClick={() => toggleMastered(t.id)}>{p.mastered.includes(t.id) ? '✓ Mastered' : 'Mark as mastered'}</button>
          <button className="btn small ghost" onClick={() => toggleSaved(t.id)} aria-pressed={p.saved.includes(t.id)}>{p.saved.includes(t.id) ? '★ Saved' : '☆ Save'}</button>
          <a className="btn small ghost" href={'#/mentor?q=' + encodeURIComponent('Explain "' + t.name + '" (' + c.name + ') simply with an example')}>✦ Ask Mentor</a>
          {ai && !written && <span className="pill">AI-generated</span>}
        </div>
      </header>

      {!lesson ? (
        <section className="card empty-lesson">
          <h3>Full lesson for this term</h3>
          <p className="muted">The one-liner is above. The AI Mentor can write the full card now: explanation, syntax and code, interview Q&A and coding questions. It's saved on this device after the first time.</p>
          <button className="btn" onClick={generate} disabled={state === 'loading'}>{state === 'loading' ? 'Writing the lesson… (10–30 s)' : '✦ Generate full lesson'}</button>
          {state === 'nokey' && <p className="warn">AI isn't set up yet. Add <code>GEMINI_API_KEY</code> in Vercel (see README), or run with <code>vercel dev</code> locally.</p>}
          {state === 'error' && <p className="warn">Couldn't generate: {err}. Try again in a moment.</p>}
        </section>
      ) : (
        <>
          <div className="tabs" role="tablist">
            {TABS.map(([k, label]) => <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? 'active' : ''} onClick={() => setTab(k)}>{label}</button>)}
          </div>
          <section className="card lesson" role="tabpanel">
            {tab === 'learn' && <Md text={Array.isArray(lesson.explain) ? lesson.explain.join('\n') : lesson.explain} />}
            {tab === 'code' && (
              <>
                {lesson.syntax ? <><h4 className="md-h">Syntax</h4><CodeBlock code={lesson.syntax} lang={lesson.code?.lang || c.lang} label="syntax" /></> : null}
                {lesson.code?.src && <><h4 className="md-h">Example</h4><CodeBlock code={lesson.code.src} lang={lesson.code.lang} /></>}
                {lesson.code?.out && <><h4 className="md-h">Output</h4><pre className="output">{lesson.code.out}</pre></>}
              </>
            )}
            {tab === 'theory' && <QA items={lesson.theory || []} />}
            {tab === 'coding' && <Coding items={lesson.coding || []} lang={lesson.code?.lang || c.lang} />}
          </section>
          {ai && !written && <button className="link-btn small" onClick={generate} disabled={state === 'loading'}>{state === 'loading' ? 'Regenerating…' : '↻ Regenerate this lesson'}</button>}
        </>
      )}

      {others.length > 0 && (
        <section>
          <h2 className="section-title">Also appears in</h2>
          <div className="list">{others.map((o) => <TermRow key={o.id} t={o} showCourse />)}</div>
        </section>
      )}

      <nav className="pager">
        {prev ? <a href={'#/t/' + encodeURIComponent(prev.id)}>‹ {prev.name}</a> : <span />}
        {next ? <a href={'#/t/' + encodeURIComponent(next.id)}>{next.name} ›</a> : <span />}
      </nav>
    </div>
  );
}

function QA({ items }) {
  const [open, setOpen] = useState(() => new Set());
  if (!items.length) return <p className="muted">No questions yet.</p>;
  return (
    <ol className="qa">
      {items.map(([q, a], i) => (
        <li key={i}>
          <button className="qa-q" aria-expanded={open.has(i)} onClick={() => { const n = new Set(open); n.has(i) ? n.delete(i) : n.add(i); setOpen(n); }}>{q}</button>
          {open.has(i) && <div className="qa-a"><Md text={a} /></div>}
        </li>
      ))}
    </ol>
  );
}

function Coding({ items, lang }) {
  const [open, setOpen] = useState(() => new Set());
  if (!items.length) return <p className="muted">No coding questions yet.</p>;
  return (
    <ol className="qa">
      {items.map(([q, level, sol], i) => (
        <li key={i}>
          <div className="qa-q static"><span className={'lvl lvl-' + String(level).toLowerCase()}>{level}</span> <Md text={q} /></div>
          <button className="link-btn" onClick={() => { const n = new Set(open); n.has(i) ? n.delete(i) : n.add(i); setOpen(n); }}>{open.has(i) ? 'Hide solution' : 'Show solution'}</button>
          {open.has(i) && <Solution sol={String(sol)} lang={lang} />}
        </li>
      ))}
    </ol>
  );
}

// A solution is shown as code if it looks like code, otherwise as formatted text
function Solution({ sol, lang }) {
  if (sol.includes('```')) return <div className="qa-a"><Md text={sol} /></div>;
  const looksLikeCode = sol.includes('\n') && /(#include|def |print\(|;\s*$|\{\s*$|=>|console\.|return |<\w+)/m.test(sol);
  return looksLikeCode ? <CodeBlock code={sol} lang={lang} label="solution" /> : <div className="qa-a"><Md text={sol} /></div>;
}

export function Saved() {
  const p = useProgress();
  const list = p.saved.map((id) => BY_ID[id]).filter(Boolean);
  return (
    <section>
      <h2 className="section-title">Saved terms</h2>
      {list.length ? <div className="list">{list.map((t) => <TermRow key={t.id} t={t} showCourse />)}</div> : <p className="muted">Tap ☆ Save on any term to keep it here.</p>}
    </section>
  );
}

export function NotFound() {
  return <div className="page"><h1>Not found</h1><p><a href="#/">Back to Learn</a></p></div>;
}

export const allCourses = COURSES;
