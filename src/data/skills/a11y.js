// Skill track: Accessibility (a11y)
export default {
  id: 'a11y', name: 'Accessibility (a11y)', short: 'Accessibility', order: 11, icon: '♿', color: '#34d399', lang: 'html',
  desc: 'Build apps everyone can use: WCAG 2.2, semantic HTML, ARIA, keyboard support, screen readers and testing.',
  units: [
    { name: 'Foundations', terms: [
      ['what-is-a11y', 'What is Accessibility', 'Designing so people with disabilities can perceive, use and understand apps.'],
      ['disability-types', 'Types of Disabilities', 'Visual, hearing, motor, cognitive — permanent, temporary, situational.'],
      ['wcag', 'WCAG 2.2', 'Web Content Accessibility Guidelines — levels A, AA (common target), AAA.'],
      ['pour', 'POUR Principles', 'Perceivable, Operable, Understandable, Robust.'],
      ['a11y-laws', 'Accessibility Laws', 'ADA (US), European Accessibility Act, India’s RPwD Act & GIGW.'],
      ['assistive-tech', 'Assistive Technologies', 'Screen readers, magnifiers, switch devices, voice control.']
    ] },
    { name: 'Semantic HTML & ARIA', terms: [
      ['semantic-a11y', 'Semantic HTML for Accessibility', 'Native elements bring roles, names and keyboard support for free.', 'html.semantic'],
      ['landmarks', 'Landmarks', 'header, nav, main, aside, footer help screen-reader navigation.'],
      ['headings-a11y', 'Heading Structure', 'Logical h1–h6 outline for scanning.'],
      ['alt-text', 'Alt Text for Images', 'Describe meaning; alt="" for decorative images.'],
      ['accessible-names', 'Accessible Names & Labels', 'label, aria-label, aria-labelledby give controls names.'],
      ['aria', 'ARIA Basics', 'Roles, states and properties for custom widgets.'],
      ['first-rule-aria', 'First Rule of ARIA', 'Use a native element instead of ARIA whenever possible.'],
      ['aria-live', 'Live Regions (aria-live)', 'Announce dynamic updates to screen readers.'],
      ['aria-states', 'aria-expanded, aria-pressed, aria-current, aria-hidden', 'Common states and properties.'],
      ['accessible-forms', 'Accessible Forms & Error Messages', 'Labels, instructions, aria-describedby, clear errors.'],
      ['accessible-tables', 'Accessible Tables', 'th with scope, caption.'],
      ['link-button', 'Links vs Buttons', 'Links navigate; buttons perform actions.']
    ] },
    { name: 'Keyboard & Focus', terms: [
      ['keyboard-nav', 'Keyboard Navigation', 'Everything usable with Tab, Shift+Tab, Enter, Space, arrows.'],
      ['focus-visible', 'Visible Focus & :focus-visible', 'Never remove outlines without a replacement.'],
      ['tabindex', 'tabindex', '0 adds to tab order, −1 makes focusable by script; avoid positive values.'],
      ['skip-links', 'Skip Links', 'Let keyboard users jump to main content.'],
      ['focus-management', 'Focus Management in SPAs', 'Move focus on route changes and after actions.'],
      ['focus-trap', 'Focus Trap in Modals', 'Keep focus inside dialogs; return it on close.'],
      ['roving-tabindex', 'Roving tabindex', 'Arrow-key navigation within menus, tabs, grids.']
    ] },
    { name: 'Visual & Content', terms: [
      ['color-contrast', 'Colour Contrast', '4.5:1 for normal text, 3:1 for large text and UI parts (AA).'],
      ['color-alone', 'Don’t Rely on Colour Alone', 'Add text/icons to colour-coded info.'],
      ['text-resize', 'Text Resizing & Zoom (200%, Reflow)', 'Layouts must work zoomed and at 320px width.'],
      ['reduced-motion', 'prefers-reduced-motion', 'Reduce animations for motion-sensitive users.'],
      ['target-size', 'Target Size (WCAG 2.2)', 'Interactive targets at least 24×24 CSS px.'],
      ['captions', 'Captions & Transcripts', 'Text alternatives for audio and video.'],
      ['plain-language', 'Plain Language & Readability', 'Short sentences, clear words, consistent UI.'],
      ['dark-mode-a11y', 'Dark Mode & High Contrast', 'Support user colour preferences.']
    ] },
    { name: 'Testing Accessibility', terms: [
      ['screen-readers', 'Screen Readers (NVDA, JAWS, VoiceOver, TalkBack)', 'Test real announcements.'],
      ['axe', 'axe DevTools', 'Automated a11y checks in the browser and tests.'],
      ['lighthouse-a11y', 'Lighthouse Accessibility Audit', 'Automated score with fixes.'],
      ['manual-testing', 'Manual Accessibility Testing', 'Keyboard-only and screen-reader walk-throughs.'],
      ['a11y-interview', 'Accessibility Interview Questions', 'ARIA vs semantic HTML, focus management, contrast.']
    ] }
  ]
};
