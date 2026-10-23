// Progress.jsx — overall progress, per-semester and per-track bars, streak, mock history, saved terms, settings
import { useRef } from 'react';
import { SEMESTERS, SKILLS, COURSE_MAP, TERMS, STATS, semCourses } from '../data/index.js';
import { useProgress, useSettings, settings, progress, streak, exportData, importData } from '../lib.js';
import { Bar, pct, Saved } from './Learn.jsx';

export default function Progress() {
  const p = useProgress();
  const s = useSettings();
  const fileRef = useRef(null);
  const overall = (p.mastered.length / STATS.terms) * 100;
  const avg = p.mocks.length ? Math.round((p.mocks.reduce((a, m) => a + m.score / m.total, 0) / p.mocks.length) * 100) : null;

  // weakest started courses = lowest % among courses with at least one mastered term or a mock
  const started = Object.values(COURSE_MAP).filter((c) => c.termIds.some((id) => p.mastered.includes(id)));
  const weak = started.map((c) => [c, pct(c.termIds, p.mastered)]).sort((a, b) => a[1] - b[1]).slice(0, 4);

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">Progress</p>
        <h1>Your journey</h1>
      </header>

      <section className="stats">
        <div className="stat"><span className="stat-num">{p.mastered.length}</span><span className="muted small">of {STATS.terms.toLocaleString()} terms mastered</span></div>
        <div className="stat"><span className="stat-num">🔥 {streak(p.days)}</span><span className="muted small">day streak</span></div>
        <div className="stat"><span className="stat-num">{p.mocks.length}</span><span className="muted small">mock tests{avg !== null ? ` · avg ${avg}%` : ''}</span></div>
        <div className="stat"><span className="stat-num">{p.saved.length}</span><span className="muted small">saved terms</span></div>
      </section>
      <div className="row gap"><Bar value={overall} label="Overall progress" /><span className="muted small">{overall.toFixed(1)}%</span></div>

      <section>
        <h2 className="section-title">Semesters</h2>
        <div className="list">
          {SEMESTERS.map((sem) => {
            const ids = semCourses(sem.sem).flatMap((c) => c.termIds);
            const v = pct(ids, p.mastered);
            return (
              <a key={sem.sem} className="progress-row" href={'#/sem/' + sem.sem}>
                <span>Semester {sem.sem}</span><Bar value={v} label={'Semester ' + sem.sem} /><span className="muted small">{Math.round(v)}%</span>
              </a>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="section-title">Skill tracks</h2>
        <div className="list">
          {SKILLS.map((sk) => {
            const c = COURSE_MAP[sk.id];
            const v = pct(c.termIds, p.mastered);
            return (
              <a key={c.id} className="progress-row" href={'#/c/' + c.id}>
                <span>{c.icon} {c.name}</span><Bar value={v} label={c.name} /><span className="muted small">{Math.round(v)}%</span>
              </a>
            );
          })}
        </div>
      </section>

      {weak.length > 0 && (
        <section>
          <h2 className="section-title">Revise next</h2>
          <div className="list">{weak.map(([c, v]) => <a key={c.id} className="progress-row" href={'#/c/' + c.id}><span>{c.icon} {c.name}</span><Bar value={v} label={c.name} /><span className="muted small">{Math.round(v)}%</span></a>)}</div>
        </section>
      )}

      <Saved />

      <section className="card form">
        <h2 className="section-title">Settings</h2>
        <label>Name<input value={s.name} onChange={(e) => settings.set({ name: e.target.value })} /></label>
        <label>Current semester
          <select value={s.currentSem} onChange={(e) => settings.set({ currentSem: Number(e.target.value) })}>{[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n} value={n}>Semester {n}</option>)}</select>
        </label>
        <label>Theme
          <select value={s.theme} onChange={(e) => settings.set({ theme: e.target.value })}><option value="system">Match device</option><option value="dark">Dark</option><option value="light">Light</option></select>
        </label>
        <label>Text size
          <select value={s.text} onChange={(e) => settings.set({ text: e.target.value })}><option value="s">Small</option><option value="m">Medium</option><option value="l">Large</option></select>
        </label>
        <div className="row gap wrap">
          <button className="btn small ghost" onClick={() => {
            const blob = new Blob([exportData()], { type: 'application/json' });
            const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'studyedge-progress.json'; a.click();
          }}>⇩ Export progress</button>
          <button className="btn small ghost" onClick={() => fileRef.current?.click()}>⇧ Import progress</button>
          <input ref={fileRef} type="file" accept="application/json" hidden onChange={async (e) => { const f = e.target.files?.[0]; if (f) importData(await f.text()); }} />
          <button className="btn small ghost danger" onClick={() => { if (confirm('Reset all progress on this device?')) progress.set({ mastered: [], saved: [], recent: [], mocks: [], days: [] }); }}>Reset progress</button>
        </div>
        <p className="muted small">Progress is stored on this device. Use Export/Import to move it between phone and laptop.</p>
      </section>
      <p className="muted small center">StudyEdge · {STATS.courses} courses · {TERMS.length.toLocaleString()} terms · {STATS.lessons} fully written lessons</p>
    </div>
  );
}
