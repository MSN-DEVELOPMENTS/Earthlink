import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { isSanityConfigured } from '@/sanity/env';
import { categories as fallbackCategories, type Category, type Post } from '@/lib/data';
import { getPosts } from '@/lib/blog';

/* Data access for blog categories.
   Mirrors lib/blog.ts: reads from Sanity when configured, otherwise falls back
   to the built-in list in lib/data.ts so category chips and archive pages
   always render.

   Blog-only by design. The five categories the team defined are all property
   topics (buying, renting, investment, the market), none of which fit a
   company announcement, so news articles carry no category at all.

   Posts are read through getPosts() rather than a separate GROQ query, so the
   fallback behaviour stays identical to the /blog page and there is only one
   place where a post is shaped. */

const FIELDS = `
  title,
  "slug": slug.current,
  "description": coalesce(description, ""),
  "imageAlt": coverImage.alt,
  "cover": coverImage,
  seoTitle,
  metaDescription
`;

// Categories without an explicit `order` sort last, then alphabetically.
const ORDER = `order(coalesce(order, 9999) asc, title asc)`;

type SanityCategory = Omit<Category, 'img'> & { cover?: SanityImageSource };

// The cover is resolved to a URL here so nothing downstream needs to know the
// category came from Sanity (same split as toPost in lib/blog.ts).
function toCategory(doc: SanityCategory): Category {
  return {
    ...doc,
    img: doc.cover ? urlFor(doc.cover).width(2400).quality(80).url() : '',
  };
}

export async function getCategories(): Promise<Category[]> {
  if (!isSanityConfigured) return fallbackCategories;
  try {
    const docs = await client.fetch<SanityCategory[]>(
      `*[_type == "category" && defined(slug.current)] | ${ORDER}{${FIELDS}}`
    );
    return docs.length ? docs.map(toCategory) : fallbackCategories;
  } catch {
    return fallbackCategories;
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  const cats = await getCategories();
  return cats.find((c) => c.slug === slug);
}

export async function getPostsByCategory(slug: string): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((p) => p.categorySlug === slug);
}

/** Categories that have at least one post, with their counts.
    Empty categories are hidden from the filter chips and left out of the
    sitemap — an archive page with nothing on it is a weak page to index. */
export async function getCategoriesInUse(): Promise<(Category & { count: number })[]> {
  const [cats, posts] = await Promise.all([getCategories(), getPosts()]);

  return cats
    .map((c) => ({
      ...c,
      count: posts.filter((p) => p.categorySlug === c.slug).length,
    }))
    .filter((c) => c.count > 0);
}

export async function getCategorySlugs(): Promise<string[]> {
  const cats = await getCategoriesInUse();
  return cats.map((c) => c.slug);
}
