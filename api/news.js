// api/news.js — Vercel serverless function: trending articles from DEV.to (free, no key needed).
// GET /api/news?tag=ai   ->  { items: [...] }

const GROUPS = {
  all: ['ai', 'machinelearning', 'python', 'javascript', 'webdev', 'cpp', 'career', 'beginners'],
  ai: ['ai', 'machinelearning', 'deeplearning', 'llm'],
  python: ['python', 'datascience'],
  c: ['c', 'cpp'],
  web: ['javascript', 'webdev', 'css', 'html'],
  dsa: ['algorithms', 'datastructures', 'leetcode'],
  career: ['career', 'interview', 'beginners', 'productivity'],
  devops: ['git', 'devops', 'github', 'security']
};

export default async function handler(req, res) {
  try {
    const group = String(req.query?.tag || 'all');
    const tags = GROUPS[group] || GROUPS.all;

    // fetch every tag in parallel; top=7 means "most popular in the last 7 days"
    const lists = await Promise.all(
      tags.map((t) =>
        fetch(`https://dev.to/api/articles?tag=${encodeURIComponent(t)}&top=7&per_page=12`, {
          headers: { 'User-Agent': 'StudyEdge-App' }
        }).then((r) => (r.ok ? r.json() : [])).catch(() => [])
      )
    );

    // flatten, remove duplicates, keep only the fields the app shows
    const seen = new Set();
    const items = lists.flat()
      .filter((a) => a && a.id && !seen.has(a.id) && seen.add(a.id))
      .sort((a, b) => (b.positive_reactions_count || 0) - (a.positive_reactions_count || 0))
      .slice(0, 30)
      .map((a) => ({
        id: a.id, title: a.title, url: a.url, author: a.user?.name, tags: a.tag_list,
        reactions: a.positive_reactions_count, published: a.published_at, readMin: a.reading_time_minutes,
        cover: a.cover_image || null
      }));

    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600'); // cache 30 min at the edge
    res.status(200).json({ items });
  } catch {
    res.status(500).json({ items: [], error: 'News source unavailable' });
  }
}
