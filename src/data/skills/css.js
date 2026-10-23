// Skill track: CSS
export default {
  id: 'css', name: 'CSS', short: 'CSS', order: 7, icon: '🎨', color: '#60a5fa', lang: 'css',
  desc: 'Selectors to container queries, Flexbox, Grid, animations and the newest CSS features.',
  units: [
    { name: 'Basics', terms: [
      ['css-intro', 'What is CSS & Ways to Add It', 'Cascading Style Sheets — inline, internal <style>, external .css.'],
      ['syntax-css', 'CSS Syntax', 'selector { property: value; }.'],
      ['selectors', 'Selectors', 'Element, class, id, universal, attribute, group.'],
      ['combinators', 'Combinators', 'Descendant (space), child (>), adjacent (+), sibling (~).'],
      ['pseudo-classes', 'Pseudo-classes', ':hover, :focus, :focus-visible, :nth-child, :first-child, :not.'],
      ['pseudo-elements', 'Pseudo-elements', '::before, ::after, ::first-line, ::placeholder, ::selection.'],
      ['specificity', 'Specificity', 'Which rule wins: inline > id > class > element.'],
      ['cascade', 'Cascade & Inheritance', 'Order, importance and inherited properties decide final styles.'],
      ['important', '!important', 'Overrides specificity — avoid except for utilities.'],
      ['box-model', 'Box Model', 'Content, padding, border, margin.'],
      ['box-sizing', 'box-sizing: border-box', 'Width includes padding and border.'],
      ['margin-collapse', 'Margin Collapsing', 'Vertical margins of blocks merge.'],
      ['units', 'Units', 'px, %, em, rem, vw, vh, dvh/svh/lvh, ch, fr.'],
      ['colors', 'Colours', 'hex, rgb, hsl, oklch, color-mix(), currentColor.'],
      ['typography', 'Typography', 'font-family, size, weight, line-height, letter-spacing, web fonts.'],
      ['backgrounds', 'Backgrounds & Gradients', 'background-image, linear/radial/conic gradients.'],
      ['borders-shadows', 'Borders, Radius & Shadows', 'border-radius, box-shadow, outline.']
    ] },
    { name: 'Layout', terms: [
      ['display', 'display', 'block, inline, inline-block, none, flex, grid, contents.'],
      ['position', 'position', 'static, relative, absolute, fixed, sticky.'],
      ['z-index', 'z-index & Stacking Context', 'Layer order; new stacking contexts from transforms, opacity.'],
      ['overflow', 'overflow', 'visible, hidden, scroll, auto, clip.'],
      ['float', 'float & clear', 'Old layout technique; text wrapping around images.'],
      ['flexbox', 'Flexbox', 'One-dimensional layout along a main axis.'],
      ['flex-container', 'Flex Container Properties', 'flex-direction, wrap, justify-content, align-items, align-content, gap.'],
      ['flex-items', 'Flex Item Properties', 'flex-grow, flex-shrink, flex-basis, flex, order, align-self.'],
      ['grid', 'CSS Grid', 'Two-dimensional layout of rows and columns.'],
      ['grid-template', 'grid-template-columns/rows & fr', 'Define tracks with fr, repeat(), minmax().'],
      ['grid-areas', 'grid-template-areas', 'Name regions of a layout.'],
      ['auto-fit-fill', 'auto-fit vs auto-fill', 'Responsive grids without media queries.'],
      ['subgrid', 'Subgrid', 'Child grids align to the parent’s tracks.'],
      ['flex-vs-grid', 'Flexbox vs Grid', 'Flex for 1-D components, Grid for 2-D page layouts.'],
      ['centering', 'Centering Techniques', 'place-items: center; flex centering; margin auto.'],
      ['multi-column', 'Multi-column Layout', 'columns: 3 for magazine-style text.']
    ] },
    { name: 'Responsive Design', terms: [
      ['responsive', 'Responsive Design & Mobile-first', 'Design for small screens first, enhance upward.'],
      ['viewport-meta', 'Viewport Meta Tag', 'width=device-width, initial-scale=1.'],
      ['media-queries', 'Media Queries', '@media (min-width: 768px) { … }; prefers-color-scheme, prefers-reduced-motion.'],
      ['container-queries', 'Container Queries', '@container styles components by their container size.'],
      ['clamp', 'clamp(), min(), max()', 'Fluid values with limits.'],
      ['fluid-type', 'Fluid Typography', 'font-size: clamp(1rem, 2.5vw, 2rem).'],
      ['aspect-ratio', 'aspect-ratio', 'Keep width/height ratio.'],
      ['object-fit', 'object-fit', 'How images fill their box: cover, contain.']
    ] },
    { name: 'Modern CSS', terms: [
      ['variables', 'Custom Properties (CSS Variables)', '--brand: #7c6cff; color: var(--brand).'],
      ['has', ':has() Parent Selector', 'Style a parent based on its children.'],
      ['is-where', ':is() & :where()', 'Group selectors; :where has zero specificity.'],
      ['nesting', 'Native CSS Nesting', 'Nest rules like Sass without a build step.'],
      ['layers', 'Cascade Layers (@layer)', 'Control cascade order explicitly.'],
      ['scope', '@scope', 'Limit styles to a DOM subtree.'],
      ['property-rule', '@property', 'Typed, animatable custom properties.'],
      ['logical-properties', 'Logical Properties', 'margin-inline, padding-block for any writing direction.'],
      ['accent-color', 'accent-color', 'Theme checkboxes, radios and ranges.'],
      ['scroll-snap', 'Scroll Snap', 'Carousel-like snapping scroll.'],
      ['scroll-driven', 'Scroll-driven Animations', 'animation-timeline: scroll() / view().'],
      ['view-transitions', 'View Transitions API', 'Animated transitions between page states.'],
      ['anchor-positioning', 'Anchor Positioning', 'Position tooltips relative to other elements in CSS.'],
      ['starting-style', '@starting-style', 'Animate elements as they appear.'],
      ['text-wrap', 'text-wrap: balance / pretty', 'Better headline and paragraph wrapping.'],
      ['light-dark', 'color-scheme & light-dark()', 'Easy light/dark theming.']
    ] },
    { name: 'Effects & Animation', terms: [
      ['transitions', 'Transitions', 'Animate property changes smoothly.'],
      ['animations', 'Keyframe Animations', '@keyframes with animation properties.'],
      ['transforms', 'Transforms', 'translate, rotate, scale, skew; 3D transforms.'],
      ['filters', 'Filters & backdrop-filter', 'blur, brightness, grayscale; frosted glass.'],
      ['clip-path', 'clip-path & mask', 'Cut elements into shapes.'],
      ['blend-modes', 'Blend Modes', 'mix-blend-mode, background-blend-mode.'],
      ['reduced-motion', 'prefers-reduced-motion', 'Respect users who want less animation.', 'a11y.reduced-motion']
    ] },
    { name: 'Architecture & Tools', terms: [
      ['bem', 'BEM Naming', 'block__element--modifier.'],
      ['css-modules', 'CSS Modules', 'Locally scoped class names.'],
      ['sass', 'Sass / SCSS', 'Variables, nesting, mixins, partials.'],
      ['tailwind', 'Tailwind CSS', 'Utility-first classes in HTML.'],
      ['css-in-js', 'CSS-in-JS', 'styled-components, Emotion — styles in JavaScript.'],
      ['postcss', 'PostCSS & Autoprefixer', 'Transform CSS with plugins; add vendor prefixes.'],
      ['reset-normalize', 'CSS Reset & Normalize', 'Consistent baseline styles across browsers.'],
      ['critical-css', 'Critical CSS', 'Inline above-the-fold styles for faster first paint.', 'perf.critical-path'],
      ['reflow-repaint', 'Reflow vs Repaint', 'Layout recalculation vs redraw — avoid layout thrashing.']
    ] }
  ]
};
