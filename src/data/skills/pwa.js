// Skill track: PWA & Mobile Web
export default {
  id: 'pwa', name: 'PWA & Mobile Web', short: 'PWA & Mobile', order: 14, icon: '📲', color: '#06b6d4', lang: 'javascript',
  desc: 'Installable, offline-capable web apps — manifest, service workers, caching strategies, push, and app-store packaging. (This app is a PWA!)',
  units: [
    { name: 'PWA Basics', terms: [
      ['what-is-pwa', 'What is a PWA', 'A website that installs like an app and works offline.'],
      ['pwa-requirements', 'Installability Requirements', 'HTTPS, web app manifest, service worker, icons.'],
      ['manifest', 'Web App Manifest', 'JSON with name, icons, start_url, display, theme_color.'],
      ['display-modes', 'Display Modes', 'standalone, fullscreen, minimal-ui, browser.'],
      ['install-prompt', 'Install Prompt (beforeinstallprompt)', 'Show your own Install button on Chrome/Edge/Android.'],
      ['ios-pwa', 'PWAs on iPhone', 'Install via Share → Add to Home Screen; push supported since iOS 16.4.']
    ] },
    { name: 'Service Workers & Offline', terms: [
      ['service-worker', 'Service Worker', 'A background script that intercepts network requests.'],
      ['sw-lifecycle', 'Service Worker Lifecycle', 'register → install → activate → fetch; skipWaiting, clients.claim.'],
      ['cache-api', 'Cache API', 'Store request/response pairs for offline use.'],
      ['cache-strategies', 'Caching Strategies', 'Cache-first, network-first, stale-while-revalidate.'],
      ['offline-page', 'Offline Fallback Page', 'Show something useful when offline.'],
      ['workbox', 'Workbox', 'Google’s library for service-worker caching.'],
      ['background-sync', 'Background Sync', 'Retry actions when the connection returns.'],
      ['push-notifications-pwa', 'Push Notifications (Push API)', 'Server-sent notifications via the service worker.'],
      ['sw-updates', 'Updating a PWA', 'Version caches; prompt users to refresh.']
    ] },
    { name: 'Mobile Web', terms: [
      ['viewport', 'Viewport Meta & Mobile Layout', 'width=device-width; mobile-first CSS.', 'css.viewport-meta'],
      ['touch-pointer', 'Touch & Pointer Events', 'Unified pointer events for mouse, pen and touch.'],
      ['safe-area', 'Safe-area Insets', 'env(safe-area-inset-bottom) avoids notches and home bars.'],
      ['mobile-performance', 'Mobile Performance', 'Slow CPUs and networks — ship less JS.', 'perf.core-web-vitals'],
      ['device-apis', 'Device APIs', 'Web Share, Geolocation, Camera (getUserMedia), Vibration, Clipboard.'],
      ['responsive-testing', 'Testing on Devices & Emulators', 'DevTools device mode, real-phone remote debugging.']
    ] },
    { name: 'Packaging & Distribution', terms: [
      ['twa', 'Trusted Web Activity (Play Store)', 'Publish a PWA to Google Play using an Android wrapper.'],
      ['pwabuilder', 'PWABuilder', 'Generate store packages for Android, iOS and Windows.'],
      ['capacitor', 'Capacitor / Cordova', 'Wrap web apps as native apps with plugin access.'],
      ['app-store-ios', 'Publishing to the App Store', 'Xcode project via Capacitor; Apple review guidelines.'],
      ['pwa-vs-native', 'PWA vs Native vs Hybrid', 'Reach and cost vs full device access and performance.']
    ] }
  ]
};
