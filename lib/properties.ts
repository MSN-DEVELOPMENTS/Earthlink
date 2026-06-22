import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { isSanityConfigured } from '@/sanity/env';
import { properties as fallbackProperties, type Property } from '@/lib/data';

/* Data access for properties.
   Reads from Sanity when configured (NEXT_PUBLIC_SANITY_PROJECT_ID set),
   otherwise falls back to the hardcoded list in lib/data.ts so the site
   always renders. Sanity docs are mapped to the existing Property shape,
   with the image resolved to a URL string. */

const FIELDS = `
  "slug": slug.current,
  name, tag, location, type, beds, area, price, ref, permit,
  "img": image,
  "description": coalesce(description, [])
`;

type SanityProperty = Omit<Property, 'img'> & { img?: SanityImageSource };

function toProperty(doc: SanityProperty): Property {
  return {
    ...doc,
    description: doc.description ?? [],
    img: doc.img ? urlFor(doc.img).width(1100).quality(80).url() : '',
  };
}

export async function getProperties(): Promise<Property[]> {
  if (!isSanityConfigured) return fallbackProperties;
  try {
    const docs = await client.fetch<SanityProperty[]>(
      `*[_type == "property"] | order(order asc, name asc){${FIELDS}}`
    );
    return docs.length ? docs.map(toProperty) : fallbackProperties;
  } catch {
    return fallbackProperties;
  }
}

export async function getPropertyBySlug(slug: string): Promise<Property | undefined> {
  if (!isSanityConfigured) return fallbackProperties.find((p) => p.slug === slug);
  try {
    const doc = await client.fetch<SanityProperty | null>(
      `*[_type == "property" && slug.current == $slug][0]{${FIELDS}}`,
      { slug }
    );
    return doc ? toProperty(doc) : fallbackProperties.find((p) => p.slug === slug);
  } catch {
    return fallbackProperties.find((p) => p.slug === slug);
  }
}

export async function getPropertySlugs(): Promise<string[]> {
  if (!isSanityConfigured) return fallbackProperties.map((p) => p.slug);
  try {
    const slugs = await client.fetch<string[]>(
      `*[_type == "property" && defined(slug.current)].slug.current`
    );
    return slugs.length ? slugs : fallbackProperties.map((p) => p.slug);
  } catch {
    return fallbackProperties.map((p) => p.slug);
  }
}
