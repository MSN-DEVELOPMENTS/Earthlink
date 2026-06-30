import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { isSanityConfigured } from '@/sanity/env';
import { posts as fallbackPosts, type Post } from '@/lib/data';

/* Data access for blog posts.
   Reads from Sanity when configured (NEXT_PUBLIC_SANITY_PROJECT_ID set),
   otherwise falls back to the built-in articles in lib/data.ts so the blog
   always renders. Sanity docs are mapped to the existing Post shape, with the
   cover image resolved to a URL string. */

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

type SanityPost = Omit<Post, 'img'> & { cover?: SanityImageSource };

function toPost(doc: SanityPost): Post {
  return {
    ...doc,
    body: doc.body ?? [],
    faqs: doc.faqs ?? [],
    img: doc.cover ? urlFor(doc.cover).width(2400).quality(80).url() : '',
  };
}

export async function getPosts(): Promise<Post[]> {
  if (!isSanityConfigured) return fallbackPosts;
  try {
    const docs = await client.fetch<SanityPost[]>(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){${FIELDS}}`
    );
    return docs.length ? docs.map(toPost) : fallbackPosts;
  } catch {
    return fallbackPosts;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const fromFallback = () => fallbackPosts.find((p) => p.slug === slug);
  if (!isSanityConfigured) return fromFallback();
  try {
    const doc = await client.fetch<SanityPost | null>(
      `*[_type == "post" && slug.current == $slug][0]{${FIELDS}}`,
      { slug }
    );
    return doc ? toPost(doc) : fromFallback();
  } catch {
    return fromFallback();
  }
}

export async function getPostSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return fallbackPosts.map((p) => p.slug);
  try {
    const slugs = await client.fetch<string[]>(
      `*[_type == "post" && defined(slug.current)].slug.current`
    );
    return slugs.length ? slugs : fallbackPosts.map((p) => p.slug);
  } catch {
    return fallbackPosts.map((p) => p.slug);
  }
}
