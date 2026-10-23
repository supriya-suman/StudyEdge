// Skill track: Web Performance
export default {
  id: 'perf', name: 'Web Performance', short: 'Performance', order: 13, icon: '⚡', color: '#fbbf24', lang: 'javascript',
  desc: 'Core Web Vitals, the rendering path, loading strategies, images, caching, rendering modes and profiling.',
  units: [
    { name: 'Metrics', terms: [
      ['why-performance', 'Why Performance Matters', 'Faster sites keep users, rank better and convert more.'],
      ['core-web-vitals', 'Core Web Vitals', 'LCP (loading), INP (responsiveness), CLS (visual stability).'],
      ['lcp', 'LCP — Largest Contentful Paint', 'Time until the main content shows; good ≤ 2.5 s.'],
      ['inp', 'INP — Interaction to Next Paint', 'Responsiveness to taps/clicks; good ≤ 200 ms.'],
      ['cls', 'CLS — Cumulative Layout Shift', 'Unexpected movement of content; good ≤ 0.1.'],
      ['other-metrics', 'TTFB, FCP, TBT', 'Server response, first paint, main-thread blocking.'],
      ['lab-field', 'Lab vs Field Data (RUM)', 'Lighthouse tests vs real-user measurements (CrUX).']
    ] },
    { name: 'How Browsers Render', terms: [
      ['critical-path', 'Critical Rendering Path', 'HTML → DOM, CSS → CSSOM → render tree → layout → paint → composite.'],
      ['render-blocking', 'Render-blocking Resources', 'CSS and sync JS in head delay first paint.'],
      ['main-thread', 'Main Thread & Long Tasks', 'Tasks > 50 ms block input.'],
      ['layout-thrashing', 'Layout Thrashing', 'Reading and writing layout repeatedly forces reflows.'],
      ['compositing', 'GPU Compositing', 'Animate transform/opacity for smooth 60 fps.']
    ] },
    { name: 'Loading Strategies', terms: [
      ['lazy-loading', 'Lazy Loading', 'Load images, components and routes only when needed.'],
      ['code-splitting', 'Code Splitting', 'Ship smaller bundles; load the rest on demand.'],
      ['resource-hints', 'preload, prefetch, preconnect, dns-prefetch', 'Tell the browser what to fetch early.'],
      ['async-defer-perf', 'async & defer Scripts', 'Don’t block parsing with scripts.'],
      ['bundle-size', 'Bundle Size Budgets & Analysis', 'Measure and cap JS sent to users.'],
      ['third-party', 'Third-party Script Cost', 'Analytics/ads can dominate load time.']
    ] },
    { name: 'Assets', terms: [
      ['image-optimization', 'Image Optimization', 'Right size, modern formats (WebP/AVIF), compression.'],
      ['responsive-images-perf', 'Responsive Images', 'srcset/sizes serve smaller images to phones.', 'html.responsive-images'],
      ['font-optimization', 'Font Optimization', 'font-display: swap, subsetting, preloading, variable fonts.'],
      ['compression', 'Compression (gzip, Brotli)', 'Shrink text responses on the wire.'],
      ['minify-perf', 'Minification', 'Smaller CSS/JS/HTML.', 'tooling.minification']
    ] },
    { name: 'Caching & Delivery', terms: [
      ['browser-cache', 'Browser Caching', 'Cache-Control, immutable hashed files.', 'net.caching-http'],
      ['cdn-perf', 'CDNs & Edge', 'Serve from locations near users.', 'net.cdn'],
      ['service-worker-cache', 'Service Worker Caching', 'Offline and instant repeat loads.', 'pwa.service-worker'],
      ['http2-3-perf', 'HTTP/2 & HTTP/3 Benefits', 'Multiplexing and faster connections.', 'net.http-versions']
    ] },
    { name: 'Rendering Strategies', terms: [
      ['csr', 'Client-side Rendering (CSR)', 'Browser builds the page with JS — slower first load.'],
      ['ssr', 'Server-side Rendering (SSR)', 'Server sends ready HTML each request.'],
      ['ssg', 'Static Site Generation (SSG)', 'Build HTML ahead of time.'],
      ['isr', 'Incremental Static Regeneration (ISR)', 'Rebuild static pages in the background.'],
      ['streaming-ssr', 'Streaming & Partial Hydration', 'Send HTML in chunks; hydrate only interactive parts (islands).'],
      ['virtualization', 'List Virtualization', 'Render only visible rows of long lists.'],
      ['memoization-ui', 'Memoization in UI (React.memo, useMemo)', 'Avoid unnecessary re-renders.'],
      ['debounce-perf', 'Debounce & Throttle Input', 'Reduce work on fast events.', 'js.debounce']
    ] },
    { name: 'Tools', terms: [
      ['lighthouse', 'Lighthouse', 'Audit performance, accessibility, SEO, best practices.'],
      ['pagespeed', 'PageSpeed Insights & WebPageTest', 'Real-user and lab performance reports.'],
      ['perf-panel', 'Chrome Performance Panel', 'Record and inspect long tasks and layout.'],
      ['web-vitals-lib', 'web-vitals Library', 'Measure CWV from real users.']
    ] }
  ]
};
