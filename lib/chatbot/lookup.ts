/* On-demand lookups for the chatbot's tools. These return the FULL detail for a
   specific project or article, so the deep content doesn't have to sit in every
   system prompt. The compact knowledge base already lists what exists (names +
   links); these fetch the details when a visitor asks. */

import { developers, type DeveloperProject } from '@/lib/developers';
import { getPosts } from '@/lib/blog';
import { getNews } from '@/lib/news';
import type { Post } from '@/lib/data';
import type { Block } from '@/lib/portable';

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/* Flatten Portable Text blocks to plain text for the model to read. */
function portableToText(blocks: Block[] = []): string {
  return blocks
    .map((b) => {
      const text = (b.children || []).map((c) => c.text).join('');
      if (!text) return '';
      if (b.listItem) return `- ${text}`;
      if (b.style === 'h2' || b.style === 'h3') return `\n${text}`;
      return text;
    })
    .filter(Boolean)
    .join('\n');
}

/* Find one developer project by slug or name (fuzzy contains) and return its
   full detail. Returns a message string when nothing matches. */
export function findProject(query: string): string {
  const q = norm(query);
  let match: { dev: string; devSlug: string; p: DeveloperProject } | null = null;
  for (const dev of developers) {
    for (const p of dev.projects) {
      if (norm(p.slug).includes(q) || norm(p.name).includes(q) || q.includes(norm(p.name))) {
        match = { dev: dev.name, devSlug: dev.slug, p };
        break;
      }
    }
    if (match) break;
  }
  if (!match) return `No project found matching "${query}".`;

  const { dev, devSlug, p } = match;
  const lines = [
    `Project: ${p.name} (by ${dev})`,
    p.tagline ? `Tagline: ${p.tagline}` : '',
    `Community: ${p.community}`,
    `Price: ${p.price}`,
    p.bedrooms ? `Bedrooms: ${p.bedrooms}` : '',
    p.unitTypes ? `Unit types: ${p.unitTypes}` : '',
    p.sizes ? `Sizes: ${p.sizes}` : '',
    p.handover ? `Handover: ${p.handover}` : '',
    p.paymentPlan ? `Payment plan: ${p.paymentPlan}` : '',
    p.location ? `Location: ${p.location.area}. Nearby: ${p.location.nearby.join('; ')}` : '',
    p.amenities?.length ? `Amenities: ${p.amenities.join(', ')}` : '',
    p.description?.length ? `About:\n${p.description.join('\n')}` : '',
    `Project page: /developers/${devSlug}/${p.slug}`,
  ].filter(Boolean);
  return lines.join('\n');
}

/* Find one article (blog post or news item) by slug or title and return its full
   text. Async because articles come from the blog/news data layer. */
export async function findArticle(query: string): Promise<string> {
  const q = norm(query);
  const [posts, news] = await Promise.all([getPosts(), getNews()]);
  const pool: Array<{ base: string; a: Post }> = [
    ...posts.map((a) => ({ base: '/blog', a })),
    ...news.map((a) => ({ base: '/news', a })),
  ];
  const hit =
    pool.find((x) => norm(x.a.slug).includes(q) || norm(x.a.title).includes(q) || q.includes(norm(x.a.title))) ||
    null;
  if (!hit) return `No article found matching "${query}".`;

  const { base, a } = hit;
  const lines = [
    `Title: ${a.title}`,
    a.category ? `Category: ${a.category}` : '',
    a.publishedAt ? `Published: ${a.publishedAt.slice(0, 10)}` : '',
    a.excerpt ? `Summary: ${a.excerpt}` : '',
    `Article page: ${base}/${a.slug}`,
    '',
    portableToText(a.body),
  ].filter((l) => l !== undefined);
  return lines.join('\n');
}
