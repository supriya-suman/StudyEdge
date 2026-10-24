// Learn.jsx — Home, Semester, Course, Term, Roadmap and Quick Revision pages
import { useEffect, useMemo, useState } from 'react';
import {
  SEMESTERS, SKILLS, COURSES, COURSE_MAP, BY_ID, KIND, STATS, LEVELS, semCourses, searchTerms,
  termOfTheDay, relatedPlaces, fullLesson, loadCourseLessons, levelName
} from '../data/index.js';
import { useProgress, useSettings, settings, toggleMastered, toggleSaved, markRecent, aiLessons, api } from '../lib.js';
import Md from './Md.jsx';
import CodeBlock from './CodeBlock.jsx';

/* ================= shared bits ================= */
export function Bar({ value, label }) {
  const v = Math.round(value || 0);
  return <span className="bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={v} aria-label={label}><i style={{ width: v + '%' }} /></span>;
}
export const pct = (ids, mastered) => (ids.length ? (ids.filter((id) => mastered.includes(id)).length / ids.length) * 100 : 0);

export const Level = ({ t }) => <span className={'lvl lvl-' + levelName(t).toLowerCase()}>{levelName(t)}</span>;

export function TermRow({ t, showCourse }) {
  const p = useProgress();
  const c = COURSE_MAP[t.course];
  const done = p.mastered.includes(t.id);
  return (
    <a className="term-row" href={'#/t/' + encodeURIComponent(t.id)}>
      <span className={'check' + (done ? ' on' : '')} aria-hidden>{done ? '✓' : ''}</span>
      <span className="term-row-body">
        <span className="term-row-name">{t.name} <Level t={t} /></span>
        <span className="term-row-one">{t.one}</span>
        {showCourse && <span className="term-row-course" style={{ color: c.color }}>{c.icon} {c.short || c.name}</span>}
      </span>
      <span className="chev" aria-hidden>›</span>
    </a>
  );
}

/* filters: All · Beginner · Intermediate · Advanced · Not mastered (remembered on this device) */
const FILTERS = [['all', 'All'], ['B', 'Beginner'], ['I', 'Intermediate'], ['A', 'Advanced'], ['todo', 'Not mastered']];
function useFilter() {
  const s = useSettings();
  return [s.filter || 'all', (f) => settings.set({ filter: f })];
}
export function applyFilter(terms, f, mastered) {
  if (f === 'all') return terms;
  if (f === 'todo') return terms.filter((t) => !mastered.includes(t.id));
  return terms.filter((t) => t.lvl === f);
}
function FilterChips({ value, onChange }) {
  return (
    <div className="chips" role="radiogroup" aria-label="Filter terms">
      {FILTERS.map(([k, l]) => (
        <button key={k} role="radio" aria-checked={value === k} className={'chip' + (value === k ? ' active' : '')} onClick={() => onChange(k)}>{l}</button>
      ))}
    </div>
  );
}

const nextTerm = (ids, mastered) => BY_ID[ids.find((id) => !mastered.includes(id)) || ids[0]];

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

/* ================= HOME ================= */
export function Home({ install }) {
  const [q, setQ] = useState('');
  const [filter, setFilter] = useFilter();
  const p = useProgress();
  const s = useSettings();
  const semIds = semCourses(s.currentSem).flatMap((c) => c.termIds);
  const start = nextTerm(semIds, p.mastered);
  const results = useMemo(() => (q.trim().length > 1 ? applyFilter(searchTerms(q, 80), filter, p.mastered).slice(0, 40) : []), [q, filter, p.mastered]);
  const browse = useMemo(() => (filter !== 'all' && !q.trim() ? applyFilter(semIds.map((id) => BY_ID[id]), filter, p.mastered) : []), [filter, q, s.currentSem, p.mastered]);
  const tod = termOfTheDay();
  const hour = new Date().getHours();
  const hello = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">B.Tech CSE (AI) · Gurugram University</p>
          <h1>{hello}, {s.name} 👋</h1>
          <p className="muted">{STATS.terms.toLocaleString()} terms across 8 semesters and {SKILLS.length} skill tracks.</p>
        </div>
        {install}
      </header>

      <nav className="actions" aria-label="Quick actions">
        <a className="action primary" href={'#/t/' + encodeURIComponent(start.id)}>
          <span className="action-icon" aria-hidden>▶</span>
          <span><strong>Start learning</strong><small>Sem {s.currentSem} · {start.name}</small></span>
        </a>
        <a className="action" href="#/roadmap"><span className="action-icon" aria-hidden>🗺</span><span><strong>Roadmap</strong><small>Semesters & tracks</small></span></a>
        <a className="action" href="#/revise"><span className="action-icon" aria-hidden>⚡</span><span><strong>Quick revision</strong><small>Flashcards</small></span></a>
        <a className="action" href="#/mock"><span className="action-icon" aria-hidden>✎</span><span><strong>Mock test</strong><small>MCQ · exam · company</small></span></a>
      </nav>

      <div className="search">
        <span aria-hidden>⌕</span>
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search any term — pointers, BST, Kadane, CNN, CORS…" aria-label="Search terms" />
      </div>
      <FilterChips value={filter} onChange={setFilter} />

      {q.trim().length > 1 ? (
        <section>
          <h2 className="section-title">{results.length ? `Results for “${q}”` : 'No match'}</h2>
          {!results.length && <p className="muted">Try another word or filter, or ask the <a href={'#/mentor?q=' + encodeURIComponent(q)}>AI Mentor</a>.</p>}
          <div className="list">{results.map((t) => <TermRow key={t.id} t={t} showCourse />)}</div>
        </section>
      ) : filter !== 'all' ? (
        <section>
          <h2 className="section-title">Semester {s.currentSem} · {FILTERS.find((f) => f[0] === filter)[1]} ({browse.length})</h2>
          <p className="muted small">Change the semester in Progress → Settings. Open any course to filter its own terms.</p>
          <div className="list">{browse.slice(0, 120).map((t) => <TermRow key={t.id} t={t} showCourse />)}</div>
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
              )) : <p className="muted">Tap <strong>Start learning</strong> to begin Semester {s.currentSem}.</p>}
            </div>
          </section>

          <section>
            <div className="section-head"><h2 className="section-title">Semesters</h2><a className="small" href="#/roadmap">View roadmap ›</a></div>
            <div className="sem-grid">
              {SEMESTERS.map((sem) => {
                const ids = semCourses(sem.sem).flatMap((c) => c.termIds);
                return (
                  <a key={sem.sem} href={'#/sem/' + sem.sem} className={'sem-card' + (sem.sem === s.currentSem ? ' current' : '')}>
                    <span className="sem-num">{sem.sem}</span>
                    <span className="sem-label">Semester {sem.sem}{sem.sem === s.currentSem && <span className="pill tiny">You're here</span>}</span>
                    <span className="muted small">{semCourses(sem.sem).length} subjects · {ids.length} terms</span>
                    <Bar value={pct(ids, p.mastered)} label={'Semester ' + sem.sem + ' progress'} />
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

/* ================= SEMESTER ================= */
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
        <div className="row gap wrap">
          <a className="btn small" href={'#/revise?sem=' + sem.sem}>⚡ Quick revision</a>
          <a className="btn small ghost" href={'#/mock'}>✎ Mock test</a>
        </div>
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

/* ================= COURSE (subject or skill track) ================= */
export function Course({ id }) {
  const c = COURSE_MAP[id];
  const p = useProgress();
  const [filter, setFilter] = useFilter();
  const [open, setOpen] = useState(() => new Set([0]));
  const [q, setQ] = useState('');
  useEffect(() => { if (c) loadCourseLessons(c.id); }, [id]);   // warm the cache so terms open instantly
  if (!c) return <NotFound />;
  const value = pct(c.termIds, p.mastered);
  const text = q.trim().toLowerCase();
  const start = nextTerm(c.termIds, p.mastered);
  const filtering = filter !== 'all' || text;
  return (
    <div className="page">
      <a className="back" href={c.group === 'sem' ? '#/sem/' + c.sem : '#/'}>‹ {c.group === 'sem' ? 'Semester ' + c.sem : 'Learn'}</a>
      <header className="page-head" style={{ '--accent': c.color }}>
        <p className="eyebrow">{c.group === 'sem' ? `Semester ${c.sem} · ${KIND[c.kind]?.label || ''}${c.code ? ' · ' + c.code : ''}` : 'Skill track'}</p>
        <h1><span aria-hidden>{c.icon}</span> {c.name}</h1>
        {c.desc && <p className="muted">{c.desc}</p>}
        <div className="row gap"><Bar value={value} label="Course progress" /><span className="muted small">{Math.round(value)}% · {c.termIds.filter((x) => p.mastered.includes(x)).length}/{c.termIds.length} mastered</span></div>
      </header>

      <nav className="actions compact" aria-label="Course actions">
        <a className="action primary" href={'#/t/' + encodeURIComponent(start.id)}><span className="action-icon" aria-hidden>▶</span><span><strong>{value > 0 ? 'Continue' : 'Start learning'}</strong><small>{start.name}</small></span></a>
        <a className="action" href={'#/roadmap/' + c.id}><span className="action-icon" aria-hidden>🗺</span><span><strong>Roadmap</strong><small>{c.units.length} units</small></span></a>
        <a className="action" href={'#/revise?course=' + c.id}><span className="action-icon" aria-hidden>⚡</span><span><strong>Quick revision</strong><small>Flashcards</small></span></a>
        <a className="action" href={'#/mock?course=' + c.id}><span className="action-icon" aria-hidden>✎</span><span><strong>Mock test</strong><small>This course</small></span></a>
      </nav>

      <div className="search slim"><span aria-hidden>⌕</span><input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={'Search ' + c.termIds.length + ' terms'} aria-label="Search terms in this course" /></div>
      <FilterChips value={filter} onChange={setFilter} />

      {c.units.map((u, ui) => {
        let terms = applyFilter(u.ids.map((tid) => BY_ID[tid]), filter, p.mastered);
        if (text) terms = terms.filter((t) => t.name.toLowerCase().includes(text) || t.one.toLowerCase().includes(text));
        if (filtering && !terms.length) return null;
        const isOpen = filtering || open.has(ui);
        const done = u.ids.filter((x) => p.mastered.includes(x)).length;
        return (
          <section key={ui} className="unit">
            <button className="unit-head" aria-expanded={!!isOpen} onClick={() => { const n = new Set(open); n.has(ui) ? n.delete(ui) : n.add(ui); setOpen(n); }}>
              <span><strong>{u.name}</strong><span className="muted small"> · {done}/{u.ids.length}</span></span>
              <span aria-hidden>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="list">{terms.map((t) => <TermRow key={t.id} t={t} />)}</div>}
          </section>
        );
      })}
    </div>
  );
}

/* ================= TERM ================= */
const TABS = [['learn', 'Learn'], ['code', 'Code'], ['interview', 'Interview'], ['coding', 'Code Q&A'], ['roadmap', 'Roadmap']];

export function Term({ id }) {
  const t = BY_ID[id];
  const p = useProgress();
  const [tab, setTab] = useState('learn');
  const [lesson, setLesson] = useState(null);
  const [state, setState] = useState('loading');   // loading | ready | writing | nokey | error
  const [err, setErr] = useState('');

  async function writeWithAI() {
    const c = COURSE_MAP[t.course];
    setState('writing'); setErr('');
    try {
      const { lesson: l } = await api('chat', { mode: 'lesson', term: { id: t.id, name: t.name, one: t.one, course: c.name + ' — ' + c.units[t.unit].name, lang: c.lang } });
      aiLessons.set(t.id, l);
      setLesson((old) => ({ ...l, ...(old || {}) }));
      setState('ready');
    } catch (e) {
      if (e.code === 'NO_KEY') setState('nokey'); else { setState('error'); setErr(e.message); }
    }
  }

  useEffect(() => {
    if (!t) return;
    markRecent(t.id);
    let live = true;
    setTab('learn'); setLesson(null); setState('loading');
    fullLesson(t).then((l) => {
      if (!live) return;
      const cached = aiLessons.get(t.id);
      const merged = l || cached ? { ...(cached || {}), ...(l || {}) } : null;
      setLesson(merged);
      // complete card available → show it; otherwise write it automatically (no button to press)
      if (merged && merged.explain && merged.theory?.length && (merged.keyPoints?.length || cached)) setState('ready');
      else if (merged && merged.explain) { setState('ready'); writeWithAI(); }
      else writeWithAI();
    });
    return () => { live = false; };
  }, [id]);

  if (!t) return <NotFound />;
  const c = COURSE_MAP[t.course];
  const unit = c.units[t.unit];
  const pos = c.termIds.indexOf(t.id);
  const prev = BY_ID[c.termIds[pos - 1]];
  const next = BY_ID[c.termIds[pos + 1]];

  return (
    <div className="page term-page" style={{ '--accent': c.color }}>
      <a className="back" href={'#/c/' + c.id}>‹ {c.short || c.name}</a>
      <header className="page-head">
        <p className="eyebrow">{c.group === 'sem' ? 'Sem ' + c.sem + ' · ' : ''}{c.name} · {unit.name}</p>
        <h1>{t.name}</h1>
        <p className="one-liner">{t.one}</p>
        <div className="row gap wrap">
          <Level t={lesson?.level ? { lvl: { Beginner: 'B', Intermediate: 'I', Advanced: 'A' }[lesson.level] } : t} />
          <button className={'btn small' + (p.mastered.includes(t.id) ? ' done' : '')} onClick={() => toggleMastered(t.id)}>{p.mastered.includes(t.id) ? '✓ Mastered' : 'Mark as mastered'}</button>
          <button className="btn small ghost" onClick={() => toggleSaved(t.id)} aria-pressed={p.saved.includes(t.id)}>{p.saved.includes(t.id) ? '★ Saved' : '☆ Save'}</button>
          <a className="btn small ghost" href={'#/mentor?q=' + encodeURIComponent('Explain "' + t.name + '" (' + c.name + ') simply with an example')}>✦ Ask Mentor</a>
        </div>
      </header>

      <div className="tabs" role="tablist">
        {TABS.map(([k, label]) => <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? 'active' : ''} onClick={() => setTab(k)}>{label}</button>)}
      </div>

      <section className="card lesson" role="tabpanel">
        {tab === 'roadmap' ? <TermRoadmap t={t} /> : !lesson?.explain ? (
          <LessonStatus state={state} err={err} retry={writeWithAI} />
        ) : (
          <>
            {tab === 'learn' && <LearnTab l={lesson} state={state} />}
            {tab === 'code' && <CodeTab l={lesson} lang={c.lang} />}
            {tab === 'interview' && <QA items={lesson.theory || []} />}
            {tab === 'coding' && <Coding items={lesson.coding || []} lang={lesson.code?.lang || c.lang} />}
          </>
        )}
      </section>

      <nav className="pager">
        {prev ? <a href={'#/t/' + encodeURIComponent(prev.id)}>‹ {prev.name}</a> : <span />}
        {next ? <a href={'#/t/' + encodeURIComponent(next.id)}>{next.name} ›</a> : <span />}
      </nav>
    </div>
  );
}

function LessonStatus({ state, err, retry }) {
  if (state === 'nokey') return <p className="warn">This lesson isn’t pre-written yet and AI isn’t connected here. Run <code>npm run lessons</code> (see README) or add GEMINI_API_KEY in Vercel.</p>;
  if (state === 'error') return <div className="empty-lesson"><p className="warn">Couldn’t load this lesson: {err}</p><button className="btn small" onClick={retry}>Try again</button></div>;
  return (
    <div className="skeleton-wrap" aria-live="polite">
      <p className="muted small">{state === 'writing' ? 'Preparing this lesson… (first time only)' : 'Loading…'}</p>
      {[90, 75, 82, 60, 70].map((w, i) => <span key={i} className="skeleton-line" style={{ width: w + '%' }} />)}
    </div>
  );
}

function LearnTab({ l, state }) {
  return (
    <div className="learn-tab">
      <Section title="Explanation"><Md text={Array.isArray(l.explain) ? l.explain.join('\n') : l.explain} /></Section>
      {l.how?.length > 0 && <Section title="How it works"><ol className="steps">{l.how.map((s, i) => <li key={i}><Md text={s} /></li>)}</ol></Section>}
      {l.keyPoints?.length > 0 && <Section title="Key points to remember" tone="good"><ul className="ticks">{l.keyPoints.map((s, i) => <li key={i}><Md text={s} /></li>)}</ul></Section>}
      {l.mistakes?.length > 0 && <Section title="Common mistakes" tone="warn"><ul className="warns">{l.mistakes.map((s, i) => <li key={i}><Md text={s} /></li>)}</ul></Section>}
      {state === 'writing' && <p className="muted small">Adding key points and common mistakes…</p>}
    </div>
  );
}
const Section = ({ title, tone, children }) => <div className={'lsec' + (tone ? ' ' + tone : '')}><h4 className="md-h">{title}</h4>{children}</div>;

function CodeTab({ l, lang }) {
  return (
    <>
      {l.syntax ? <><h4 className="md-h">Syntax</h4><CodeBlock code={l.syntax} lang={l.code?.lang || lang} label="syntax" /></> : null}
      {l.code?.src && <><h4 className="md-h">Example</h4><CodeBlock code={l.code.src} lang={l.code.lang} /></>}
      {l.code?.out && <><h4 className="md-h">Output</h4><pre className="output">{l.code.out}</pre></>}
      {!l.syntax && !l.code?.src && <p className="muted">No code for this topic.</p>}
    </>
  );
}

function TermRoadmap({ t }) {
  const p = useProgress();
  const c = COURSE_MAP[t.course];
  const unit = c.units[t.unit];
  const others = relatedPlaces(t);
  return (
    <div className="term-roadmap">
      <p className="muted small">{c.name} → <strong>{unit.name}</strong> (unit {t.unit + 1} of {c.units.length})</p>
      <ol className="timeline">
        {unit.ids.map((tid) => {
          const x = BY_ID[tid];
          const status = tid === t.id ? 'current' : p.mastered.includes(tid) ? 'done' : '';
          return (
            <li key={tid} className={status}>
              <a href={'#/t/' + encodeURIComponent(tid)}>
                <span className="dot" aria-hidden>{status === 'done' ? '✓' : ''}</span>
                <span><strong>{x.name}</strong>{status === 'current' && <span className="pill tiny">You are here</span>}<small>{x.one}</small></span>
              </a>
            </li>
          );
        })}
      </ol>
      {t.unit + 1 < c.units.length && <p className="small">Next unit: <a href={'#/t/' + encodeURIComponent(c.units[t.unit + 1].ids[0])}>{c.units[t.unit + 1].name} ›</a></p>}
      {others.length > 0 && (<><h4 className="md-h">Also appears in</h4><div className="list">{others.map((o) => <TermRow key={o.id} t={o} showCourse />)}</div></>)}
      <a className="btn small ghost" href={'#/roadmap/' + c.id}>🗺 Full course roadmap</a>
    </div>
  );
}

function QA({ items }) {
  const [open, setOpen] = useState(() => new Set());
  if (!items.length) return <p className="muted">No questions yet.</p>;
  const all = open.size === items.length;
  return (
    <>
      <button className="link-btn small" onClick={() => setOpen(all ? new Set() : new Set(items.map((_, i) => i)))}>{all ? 'Hide all answers' : 'Show all answers'}</button>
      <ol className="qa">
        {items.map(([q, a], i) => (
          <li key={i}>
            <button className="qa-q" aria-expanded={open.has(i)} onClick={() => { const n = new Set(open); n.has(i) ? n.delete(i) : n.add(i); setOpen(n); }}>{q}</button>
            {open.has(i) && <div className="qa-a"><Md text={a} /></div>}
          </li>
        ))}
      </ol>
    </>
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

/* ================= ROADMAP ================= */
export function Roadmap({ id }) {
  const p = useProgress();
  const s = useSettings();
  if (id) {
    const c = COURSE_MAP[id];
    if (!c) return <NotFound />;
    const start = nextTerm(c.termIds, p.mastered);
    return (
      <div className="page">
        <a className="back" href={'#/c/' + c.id}>‹ {c.short || c.name}</a>
        <header className="page-head" style={{ '--accent': c.color }}>
          <p className="eyebrow">Roadmap</p>
          <h1>{c.icon} {c.name}</h1>
          <div className="row gap"><Bar value={pct(c.termIds, p.mastered)} label="progress" /><a className="btn small" href={'#/t/' + encodeURIComponent(start.id)}>▶ Continue: {start.name}</a></div>
        </header>
        <ol className="roadmap">
          {c.units.map((u, ui) => {
            const v = pct(u.ids, p.mastered);
            return (
              <li key={ui} className={v === 100 ? 'done' : v > 0 ? 'active' : ''}>
                <div className="rm-node" aria-hidden>{v === 100 ? '✓' : ui + 1}</div>
                <div className="rm-body">
                  <h3>{u.name}</h3>
                  <div className="row gap"><Bar value={v} label={u.name} /><span className="muted small">{Math.round(v)}%</span></div>
                  <div className="rm-terms">
                    {u.ids.map((tid) => <a key={tid} href={'#/t/' + encodeURIComponent(tid)} className={'rm-chip' + (p.mastered.includes(tid) ? ' done' : '') + ' lv-' + BY_ID[tid].lvl}>{BY_ID[tid].name}</a>)}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="muted small">Chip border colour: green = Beginner, amber = Intermediate, red = Advanced. Filled = mastered.</p>
      </div>
    );
  }
  return (
    <div className="page">
      <a className="back" href="#/">‹ Learn</a>
      <header className="page-head"><p className="eyebrow">Roadmap</p><h1>Your 4-year path</h1><p className="muted">Follow the semesters in order and practise a skill track alongside each one.</p></header>
      <ol className="roadmap">
        {SEMESTERS.map((sem) => {
          const cs = semCourses(sem.sem);
          const v = pct(cs.flatMap((c) => c.termIds), p.mastered);
          return (
            <li key={sem.sem} className={(v === 100 ? 'done' : sem.sem === s.currentSem ? 'active' : '')}>
              <div className="rm-node" aria-hidden>{v === 100 ? '✓' : sem.sem}</div>
              <div className="rm-body">
                <h3><a href={'#/sem/' + sem.sem}>Semester {sem.sem}</a>{sem.sem === s.currentSem && <span className="pill tiny">You're here</span>}</h3>
                <div className="row gap"><Bar value={v} label={'Semester ' + sem.sem} /><span className="muted small">{Math.round(v)}%</span></div>
                <div className="rm-terms">{cs.map((c) => <a key={c.id} className="rm-chip" href={'#/roadmap/' + c.id}>{c.icon} {c.short || c.name}</a>)}</div>
              </div>
            </li>
          );
        })}
      </ol>
      <section>
        <h2 className="section-title">Skill tracks (do alongside)</h2>
        <div className="list">
          {SKILLS.map((sk) => { const c = COURSE_MAP[sk.id]; const v = pct(c.termIds, p.mastered); return (
            <a key={c.id} className="progress-row" href={'#/roadmap/' + c.id}><span>{c.icon} {c.name}</span><Bar value={v} label={c.name} /><span className="muted small">{Math.round(v)}%</span></a>
          ); })}
        </div>
      </section>
    </div>
  );
}

/* ================= QUICK REVISION (flashcards) ================= */
export function Revise({ params }) {
  const p = useProgress();
  const s = useSettings();
  const [filter, setFilter] = useFilter();
  const courseId = params.get('course');
  const semN = Number(params.get('sem')) || (courseId ? null : s.currentSem);
  const pool = useMemo(() => {
    const ids = courseId ? COURSE_MAP[courseId]?.termIds || [] : semCourses(semN).flatMap((c) => c.termIds);
    return applyFilter(ids.map((x) => BY_ID[x]), filter, p.mastered);
  }, [courseId, semN, filter]);
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const [extra, setExtra] = useState(null);
  const card = pool[Math.min(i, pool.length - 1)];
  useEffect(() => { setFlip(false); setExtra(null); if (card) fullLesson(card).then((l) => setExtra(l)); }, [card?.id]);
  useEffect(() => setI(0), [courseId, semN, filter]);

  const scope = courseId ? COURSE_MAP[courseId]?.name : 'Semester ' + semN;
  const go = (d) => setI((x) => (pool.length ? (x + d + pool.length) % pool.length : 0));
  return (
    <div className="page">
      <a className="back" href={courseId ? '#/c/' + courseId : '#/'}>‹ Back</a>
      <header className="page-head"><p className="eyebrow">Quick revision</p><h1>{scope}</h1></header>
      <div className="row gap wrap">
        {!courseId && <select className="select" value={semN} onChange={(e) => (location.hash = '#/revise?sem=' + e.target.value)} aria-label="Semester">{[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n} value={n}>Semester {n}</option>)}</select>}
        <span className="muted small">{pool.length ? `${Math.min(i, pool.length - 1) + 1} / ${pool.length}` : ''}</span>
      </div>
      <FilterChips value={filter} onChange={setFilter} />
      {!card ? <p className="muted">Nothing to revise with this filter. 🎉</p> : (
        <>
          <button className={'flashcard' + (flip ? ' flipped' : '')} onClick={() => setFlip((f) => !f)} aria-label="Flip card">
            {!flip ? (
              <span className="fc-front">
                <span className="muted small">{COURSE_MAP[card.course].short || COURSE_MAP[card.course].name}</span>
                <strong>{card.name}</strong>
                <Level t={card} />
                <span className="muted small">Tap to reveal</span>
              </span>
            ) : (
              <span className="fc-back">
                <strong>{card.name}</strong>
                <span>{card.one}</span>
                {extra?.keyPoints?.length > 0 && <ul className="ticks">{extra.keyPoints.slice(0, 5).map((k, j) => <li key={j}>{k}</li>)}</ul>}
              </span>
            )}
          </button>
          <div className="row gap wrap center-row">
            <button className="btn ghost" onClick={() => go(-1)}>‹ Prev</button>
            <button className="btn ghost" onClick={() => go(1)}>Again later</button>
            <button className="btn" onClick={() => { if (!p.mastered.includes(card.id)) toggleMastered(card.id); go(1); }}>Got it ✓</button>
            <a className="btn ghost" href={'#/t/' + encodeURIComponent(card.id)}>Open lesson</a>
          </div>
        </>
      )}
    </div>
  );
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
export const levelLabels = LEVELS;
