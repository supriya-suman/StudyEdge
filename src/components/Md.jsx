// Md.jsx — very small, safe markdown renderer (no HTML injection):
// paragraphs, - bullets, 1. lists, ### headings, **bold**, *italic*, `code`, ```fenced code```, [links](url)
import CodeBlock from './CodeBlock.jsx';

function inline(text, keyBase = '') {
  const out = [];
  const re = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*\s][^*]*\*|\[[^\]]+\]\((https?:\/\/[^)\s]+|#\/[^)\s]*)\))/g;
  let last = 0, m, i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    const k = keyBase + '-' + i++;
    if (tok.startsWith('`')) out.push(<code key={k}>{tok.slice(1, -1)}</code>);
    else if (tok.startsWith('**')) out.push(<strong key={k}>{tok.slice(2, -2)}</strong>);
    else if (tok.startsWith('[')) {
      const label = tok.slice(1, tok.indexOf(']'));
      const href = m[2];
      out.push(<a key={k} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>{label}</a>);
    } else out.push(<em key={k}>{tok.slice(1, -1)}</em>);
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function Md({ text = '' }) {
  const blocks = [];
  const lines = String(text).replace(/\r/g, '').split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (/^```/.test(line)) {                       // fenced code
      const lang = line.slice(3).trim();
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      blocks.push(<CodeBlock key={blocks.length} lang={lang} code={buf.join('\n')} />);
      continue;
    }
    if (/^\s*[-*•]\s+/.test(line)) {               // bullet list
      const items = [];
      while (i < lines.length && /^\s*[-*•]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*[-*•]\s+/, ''));
      blocks.push(<ul key={blocks.length}>{items.map((t, j) => <li key={j}>{inline(t, 'u' + j)}</li>)}</ul>);
      continue;
    }
    if (/^\s*\d+[.)]\s+/.test(line)) {             // numbered list
      const items = [];
      while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*\d+[.)]\s+/, ''));
      blocks.push(<ol key={blocks.length}>{items.map((t, j) => <li key={j}>{inline(t, 'o' + j)}</li>)}</ol>);
      continue;
    }
    const h = line.match(/^(#{1,4})\s+(.*)/);       // heading
    if (h) { blocks.push(<h4 key={blocks.length} className="md-h">{inline(h[2])}</h4>); i++; continue; }
    if (!line.trim()) { i++; continue; }
    const para = [];                                // paragraph
    while (i < lines.length && lines[i].trim() && !/^(```|\s*[-*•]\s+|\s*\d+[.)]\s+|#{1,4}\s)/.test(lines[i])) para.push(lines[i++]);
    blocks.push(<p key={blocks.length}>{inline(para.join(' '), 'p' + blocks.length)}</p>);
  }
  return <div className="md">{blocks}</div>;
}
