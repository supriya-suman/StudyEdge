// CodeBlock.jsx — syntax-highlighted code with a copy button
import { useMemo, useState } from 'react';
import hljs from 'highlight.js/lib/core';
import c from 'highlight.js/lib/languages/c';
import cpp from 'highlight.js/lib/languages/cpp';
import python from 'highlight.js/lib/languages/python';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import java from 'highlight.js/lib/languages/java';
import sql from 'highlight.js/lib/languages/sql';
import r from 'highlight.js/lib/languages/r';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import bash from 'highlight.js/lib/languages/bash';
import json from 'highlight.js/lib/languages/json';
import yaml from 'highlight.js/lib/languages/yaml';

const LANGS = { c, cpp, python, javascript, typescript, java, sql, r, xml, css, bash, json, yaml };
Object.entries(LANGS).forEach(([n, l]) => hljs.registerLanguage(n, l));
const ALIAS = { js: 'javascript', ts: 'typescript', py: 'python', 'c++': 'cpp', html: 'xml', sh: 'bash', shell: 'bash', jsx: 'javascript', yml: 'yaml' };

export default function CodeBlock({ code = '', lang = '', label }) {
  const [copied, setCopied] = useState(false);
  const l = ALIAS[lang?.toLowerCase()] || lang?.toLowerCase();
  const html = useMemo(() => {
    if (l && hljs.getLanguage(l)) return hljs.highlight(code, { language: l }).value;
    return code.replace(/[&<>]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[ch]));
  }, [code, l]);
  const copy = async () => {
    try { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch { /* ignore */ }
  };
  return (
    <div className="code">
      <div className="code-head">
        <span>{label || lang || 'code'}</span>
        <button className="link-btn" onClick={copy}>{copied ? 'Copied ✓' : 'Copy'}</button>
      </div>
      {/* highlight.js output is escaped by the library, so this is safe */}
      <pre><code dangerouslySetInnerHTML={{ __html: html }} /></pre>
    </div>
  );
}
