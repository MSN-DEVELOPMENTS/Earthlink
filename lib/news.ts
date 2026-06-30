import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { isSanityConfigured } from '@/sanity/env';
import { news as fallbackNews, type News } from '@/lib/data';

/* Data access for news articles. Mirrors lib/blog.ts.
   Reads from Sanity when configured (NEXT_PUBLIC_SANITY_PROJECT_ID set),
   otherwise falls back to the built-in items in lib/data.ts so the news
   section always renders. Sanity docs are mapped to the existing News shape,
   with the cover image resolved to a URL string. */

const FIELDS = `
  "slug": slug.current,
  title,
  category,
  excerpt,
  seoTitle,
  metaDescription,
  publishedAt,
  "imageAlt": coverImage.alt,
  "cover": coverImage,
  "body": coalesce(body, []),
  "faqs": coalesce(faqs, [])
`;

type SanityNews = Omit<News, 'img'> & { cover?: SanityImageSource };

function toNews(doc: SanityNews): News {
  return {
    ...doc,
    body: doc.body ?? [],
    faqs: doc.faqs ?? [],
    img: doc.cover ? urlFor(doc.cover).width(2400).quality(80).url() : '',
  };
}

export async function getNews(): Promise<News[]> {
  if (!isSanityConfigured) return fallbackNews;
  try {
    const docs = await client.fetch<SanityNews[]>(
      `*[_type == "news" && defined(slug.current)] | order(publishedAt desc){${FIELDS}}`
    );
    return docs.length ? docs.map(toNews) : fallbackNews;
  } catch {
    return fallbackNews;
  }
}

export async function getNewsBySlug(slug: string): Promise<News | undefined> {
  const fromFallback = () => fallbackNews.find((n) => n.slug === slug);
  if (!isSanityConfigured) return fromFallback();
  try {
    const doc = await client.fetch<SanityNews | null>(
      `*[_type == "news" && slug.current == $slug][0]{${FIELDS}}`,
      { slug }
    );
    return doc ? toNews(doc) : fromFallback();
  } catch {
    return fromFallback();
  }
}

export async function getNewsSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return fallbackNews.map((n) => n.slug);
  try {
    const slugs = await client.fetch<string[]>(
      `*[_type == "news" && defined(slug.current)].slug.current`
    );
    return slugs.length ? slugs : fallbackNews.map((n) => n.slug);
  } catch {
    return fallbackNews.map((n) => n.slug);
  }
}
