// News.jsx — live trending articles (DEV.to via /api/news) + a curated "release watch"
import { useEffect, useState } from 'react';
import { api } from '../lib.js';

const FILTERS = [['all', 'All'], ['ai', 'AI / ML'], ['python', 'Python & Data'], ['c', 'C / C++'], ['dsa', 'DSA'], ['web', 'Web'], ['career', 'Career & Interviews'], ['devops', 'Git / DevOps / Security']];

// Curated, slow-changing items. Update this list when new versions ship.
const RELEASE_WATCH = [
  { title: 'C23 is the current C standard', body: 'ISO/IEC 9899:2024 — adds `bool`/`true`/`false` as keywords, `nullptr`, `typeof`, `constexpr` objects, `#embed`, binary literals `0b1010`, digit separators `1\'000\'000`.', tag: 'C' },
  { title: 'C++23 published; C++26 is next', body: 'C++23 brought `std::print`, `std::expected`, `std::mdspan`, deducing `this`. C++26 adds reflection, contracts and `std::execution`.', tag: 'C++' },
  { title: 'Python 3.14', body: 'Released Oct 2025: template strings (t-strings), deferred evaluation of annotations, officially supported free-threaded (no-GIL) build, and a new experimental JIT.', tag: 'Python' },
  { title: 'ECMAScript 2025', body: 'Iterator helpers (`.map/.filter` on iterators), new Set methods (`union`, `intersection`…), `RegExp.escape`, `Promise.try`, JSON modules, Float16Array.', tag: 'JavaScript' },
  { title: 'Node.js 24 LTS', body: 'Current long-term-support line for servers and tooling; ships npm 11 and a newer V8.', tag: 'Tooling' },
  { title: 'AI agents & MCP', body: 'LLM apps now use tool calling, retrieval (RAG) and the Model Context Protocol (MCP) to connect models to data and tools — see the AI & ML track.', tag: 'AI' }
];

const ago = (iso) => {
  const d = (Date.now() - new Date(iso)) / 86400000;
  return d < 1 ? 'today' : d < 2 ? 'yesterday' : Math.floor(d) + ' days ago';
};

export default function News() {
  const [filter, setFilter] = useState('all');
  const [items, setItems] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    let live = true;
    setItems(null); setError('');
    api('news?tag=' + filter).then((d) => { if (!live) return; if (!Array.isArray(d.items)) throw new Error('no api'); setItems(d.items); }).catch(() => { if (live) { setItems([]); setError('Live news needs the deployed app (Vercel) or `vercel dev`.'); } });
    return () => { live = false; };
  }, [filter]);

  return (
    <div className="page">
      <header className="page-head">
        <p className="eyebrow">News</p>
        <h1>What’s new in tech</h1>
        <p className="muted">Trending this week, plus a release watch for the languages in your syllabus.</p>
      </header>

      <section>
        <h2 className="section-title">Release watch</h2>
        <div className="news-grid">
          {RELEASE_WATCH.map((r) => (
            <article key={r.title} className="card news-card">
              <span className="pill">{r.tag}</span>
              <h3>{r.title}</h3>
              <p className="muted small">{r.body.split('`').map((p, i) => (i % 2 ? <code key={i}>{p}</code> : p))}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Trending this week</h2>
        <div className="chips">{FILTERS.map(([k, l]) => <button key={k} className={'chip' + (filter === k ? ' active' : '')} onClick={() => setFilter(k)}>{l}</button>)}</div>
        {items === null && <p className="muted">Loading…</p>}
        {error && <p className="warn">{error}</p>}
        <div className="list">
          {items?.map((a) => (
            <a key={a.id} className="news-row" href={a.url} target="_blank" rel="noreferrer">
              <strong>{a.title}</strong>
              <span className="muted small">{a.author} · {ago(a.published)} · {a.readMin} min read · ♥ {a.reactions}</span>
              <span className="tags">{a.tags?.slice(0, 4).map((t) => <span key={t}>#{t}</span>)}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
