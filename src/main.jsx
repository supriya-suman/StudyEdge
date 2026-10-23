import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { applySettings, settings } from './lib.js';
import './styles.css';

applySettings(settings.get()); // set theme before first paint
createRoot(document.getElementById('root')).render(<App />);

// register the service worker (offline + installable) in production builds only
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
}
