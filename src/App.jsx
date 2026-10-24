// App.jsx — routes + the 5 main tabs (Learn, Mock, AI Mentor, News, Progress)
import { useEffect, useState } from 'react';
import { useRoute, useSettings, applySettings } from './lib.js';
import { Home, Semester, Course, Term, Roadmap, Revise, NotFound } from './components/Learn.jsx';
import Mock from './components/Mock.jsx';
import Mentor from './components/Mentor.jsx';
import News from './components/News.jsx';
import Progress from './components/Progress.jsx';

const TABS = [
  { id: '', label: 'Learn', icon: '◧' },
  { id: 'mock', label: 'Mock', icon: '✎' },
  { id: 'mentor', label: 'AI Mentor', icon: '✦' },
  { id: 'news', label: 'News', icon: '◎' },
  { id: 'progress', label: 'Progress', icon: '▲' }
];

// "Install app" button: Android/desktop Chrome & Edge use the install prompt; iPhone gets instructions
function InstallButton() {
  const [evt, setEvt] = useState(null);
  const [hint, setHint] = useState(false);
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  useEffect(() => {
    const on = (e) => { e.preventDefault(); setEvt(e); };
    addEventListener('beforeinstallprompt', on);
    return () => removeEventListener('beforeinstallprompt', on);
  }, []);
  if (standalone || (!evt && !isIOS)) return null;
  return (
    <div className="install">
      <button className="btn small" onClick={async () => { if (evt) { evt.prompt(); await evt.userChoice; setEvt(null); } else setHint((v) => !v); }}>⇩ Install app</button>
      {hint && <p className="muted small">On iPhone: tap <b>Share</b> → <b>Add to Home Screen</b>.</p>}
    </div>
  );
}

export default function App() {
  const { parts, params } = useRoute();
  const s = useSettings();
  useEffect(() => {
    applySettings(s);
    const mq = matchMedia('(prefers-color-scheme: light)');
    const on = () => applySettings(s);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, [s]);

  const [root, id] = parts;
  let page;
  switch (root) {
    case undefined: page = <Home install={<InstallButton />} />; break;
    case 'sem': page = <Semester n={id} />; break;
    case 'c': page = <Course key={id} id={id} />; break;
    case 't': page = <Term key={id} id={id} />; break;
    case 'roadmap': page = <Roadmap key={id || 'all'} id={id} />; break;
    case 'revise': page = <Revise key={params.toString()} params={params} />; break;
    case 'mock': page = <Mock key={params.toString()} params={params} />; break;
    case 'mentor': page = <Mentor key={params.get('q') || 'm'} params={params} />; break;
    case 'news': page = <News />; break;
    case 'progress': page = <Progress />; break;
    default: page = <NotFound />;
  }
  const active = ['sem', 'c', 't', 'roadmap', 'revise'].includes(root) ? '' : root || '';

  return (
    <div className="shell">
      <a className="skip-link" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}>Skip to content</a>
      <nav className="tabbar" aria-label="Main">
        <a className="brand" href="#/"><img src="/icons/icon-192.png" alt="" width="28" height="28" /> <span>StudyEdge</span></a>
        {TABS.map((t) => (
          <a key={t.label} href={'#/' + t.id} className={'tab' + (active === t.id ? ' active' : '')} aria-current={active === t.id ? 'page' : undefined}>
            <span className="tab-icon" aria-hidden>{t.icon}</span><span>{t.label}</span>
          </a>
        ))}
      </nav>
      <main id="main" tabIndex={-1} className="main">{page}</main>
    </div>
  );
}
