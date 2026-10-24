// sw.js — offline support. App shell + assets are cached as they are used.
// API calls (/api/*) always go to the network so AI answers and news stay fresh.
const CACHE = 'studyedge-v2';

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(['/', '/index.html', '/manifest.webmanifest'])));
  self.skipWaiting(); // activate the new version immediately
});

self.addEventListener('activate', (e) => {
  // delete caches from older versions
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin || url.pathname.startsWith('/api/')) return;

  if (req.mode === 'navigate') {
    // pages: network first, fall back to cached shell when offline
    e.respondWith(fetch(req).then((res) => {
      caches.open(CACHE).then((c) => c.put('/index.html', res.clone()));
      return res;
    }).catch(() => caches.match('/index.html')));
    return;
  }
  // lesson files: show cached copy instantly, refresh it in the background
  if (url.pathname.startsWith('/lessons/')) {
    e.respondWith(caches.open(CACHE).then((c) => c.match(req).then((hit) => {
      const fresh = fetch(req).then((res) => { if (res.ok) c.put(req, res.clone()); return res; }).catch(() => hit);
      return hit || fresh;
    })));
    return;
  }
  // static files: cache first, then network (and store for next time)
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
    return res;
  })));
});
