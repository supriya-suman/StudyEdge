// Skill track: HTML
export default {
  id: 'html', name: 'HTML', short: 'HTML', order: 6, icon: '📄', color: '#fb7185', lang: 'html',
  desc: 'Every HTML building block — semantics, forms, media, modern elements, SEO and Web Components.',
  units: [
    { name: 'Basics', terms: [
      ['what-is-html', 'What is HTML', 'HyperText Markup Language — the structure of web pages.'],
      ['document-structure', 'Document Structure', '<!DOCTYPE html>, html, head, body.'],
      ['elements', 'Elements, Tags & Attributes', 'Opening/closing tags with attributes like id, class, href.'],
      ['void-elements', 'Void (Self-closing) Elements', 'img, br, hr, input, meta, link have no closing tag.'],
      ['block-inline', 'Block vs Inline Elements', 'Block takes full width (div, p); inline flows in text (span, a).'],
      ['headings-paragraphs', 'Headings & Paragraphs', 'h1–h6 for hierarchy; p for text.'],
      ['text-formatting', 'Text Formatting', 'strong, em, mark, small, sub, sup, code, pre, blockquote.'],
      ['links', 'Links (a)', 'href, target="_blank" with rel="noopener", anchors (#id), mailto, tel.'],
      ['images', 'Images (img)', 'src, alt, width/height, loading="lazy".'],
      ['lists', 'Lists', 'ul, ol, li, dl/dt/dd.'],
      ['tables', 'Tables', 'table, thead, tbody, tr, th, td, caption, colspan, rowspan, scope.'],
      ['div-span', 'div & span', 'Generic containers without meaning.'],
      ['entities', 'HTML Entities', '&lt; &gt; &amp; &nbsp; &copy;.'],
      ['comments-html', 'Comments', '<!-- comment -->.'],
      ['meta-tags', 'Head & Meta Tags', 'charset, viewport, description, title, link, script.'],
      ['global-attributes', 'Global Attributes', 'id, class, style, title, hidden, lang, tabindex, data-*.']
    ] },
    { name: 'Semantic HTML', terms: [
      ['semantic', 'Semantic HTML', 'Elements that describe meaning — better for SEO and accessibility.'],
      ['layout-elements', 'header, nav, main, section, article, aside, footer', 'Landmark elements for page structure.'],
      ['figure', 'figure & figcaption', 'Self-contained media with a caption.'],
      ['details-summary', 'details & summary', 'Native expandable sections.'],
      ['dialog', 'dialog', 'Native modal and non-modal dialogs with showModal().'],
      ['time-address', 'time, address, abbr, cite', 'Semantic inline elements.'],
      ['search-element', '<search> Element', 'Landmark for search forms.'],
      ['heading-outline', 'Heading Hierarchy', 'One h1, don’t skip levels.']
    ] },
    { name: 'Forms', terms: [
      ['forms', 'Forms', 'form with action and method collect user input.'],
      ['input-types', 'Input Types', 'text, email, password, number, tel, url, date, range, color, file, checkbox, radio.'],
      ['labels', 'label & for', 'Connect labels to inputs for clicks and screen readers.'],
      ['form-controls', 'select, option, textarea, button', 'Other form controls.'],
      ['fieldset', 'fieldset & legend', 'Group related controls.'],
      ['validation-attrs', 'Built-in Validation', 'required, min, max, minlength, pattern, type checks.'],
      ['datalist', 'datalist', 'Suggestions for an input.'],
      ['autocomplete', 'autocomplete & inputmode', 'Help browsers fill and show the right keyboard.'],
      ['get-post-form', 'GET vs POST Forms', 'Data in URL vs request body.']
    ] },
    { name: 'Media & Graphics', terms: [
      ['media', 'audio & video', 'Native media with controls, autoplay, muted, poster, track (captions).'],
      ['responsive-images', 'Responsive Images: srcset, sizes, picture', 'Serve the right image for each screen.'],
      ['iframe', 'iframe', 'Embed another page; sandbox for safety.'],
      ['canvas', 'canvas', 'Draw graphics with JavaScript.'],
      ['svg', 'Inline SVG', 'Scalable vector graphics in HTML.'],
      ['embed-object', 'embed & object', 'Older ways to embed content.']
    ] },
    { name: 'Modern & Advanced', terms: [
      ['popover', 'Popover API', 'popover attribute for tooltips/menus without JS libraries.'],
      ['lazy-loading-html', 'Lazy Loading & fetchpriority', 'loading="lazy" and fetchpriority="high".'],
      ['template-slot', 'template & slot', 'Inert HTML templates and Web Component slots.'],
      ['web-components', 'Web Components (Custom Elements)', 'Define your own tags with customElements.define.'],
      ['shadow-dom', 'Shadow DOM', 'Encapsulated DOM and styles for components.'],
      ['inert', 'inert Attribute', 'Make a region non-interactive.'],
      ['script-loading', 'script: async, defer, type="module"', 'Control how scripts load and run.'],
      ['preload-hints', 'Resource Hints: preload, prefetch, preconnect', 'Tell the browser what to fetch early.', 'perf.resource-hints'],
      ['html-validation', 'HTML Validation (W3C Validator)', 'Check markup for errors.']
    ] },
    { name: 'SEO & Sharing', terms: [
      ['seo-basics', 'SEO Basics', 'Titles, descriptions, headings, semantic HTML, fast pages.'],
      ['open-graph', 'Open Graph & Twitter Cards', 'og:title, og:image for link previews.'],
      ['structured-data', 'Structured Data (JSON-LD)', 'schema.org markup for rich results.'],
      ['canonical', 'Canonical URL & robots', 'Avoid duplicate content; control indexing.'],
      ['sitemap', 'sitemap.xml & robots.txt', 'Help crawlers discover pages.']
    ] }
  ]
};
