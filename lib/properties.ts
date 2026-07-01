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

/* Sanity's `property` documents are currently placeholder/demo data and the
   SANITY_API_TOKEN is expired, so properties are served from the curated real
   listings in lib/data.ts (the 9 live Bayut listings, with their real photos).
   To hand properties back to the CMS later: add the real properties in Sanity,
   set a valid SANITY_API_TOKEN, then flip this flag to true. */
const USE_SANITY_PROPERTIES = false;

type SanityProperty = Omit<Property, 'img'> & { img?: SanityImageSource };

/* Build a small photo gallery for the detail page. Bayut uploads a listing's
   photos as consecutive IDs (…/thumbnails/<id>-800x600.jpeg), so we derive a
   few neighbours of the main image. Any non-Bayut image just yields itself. */
const BAYUT_THUMB = /(https:\/\/images\.bayut\.com\/thumbnails\/)(\d+)(-\d+x\d+\.jpe?g)/i;

export function buildGallery(img: string, existing?: string[]): string[] {
  if (existing && existing.length) return existing;
  const m = img.match(BAYUT_THUMB);
  if (!m) return img ? [img] : [];
  const [, prefix, idStr, suffix] = m;
  const id = Number(idStr);
  return [0, 1, 2, 3].map((d) => `${prefix}${id + d}${suffix}`);
}

function withGallery(p: Property): Property {
  return { ...p, gallery: buildGallery(p.img, p.gallery) };
}

function toProperty(doc: SanityProperty): Property {
  return {
    ...doc,
    description: doc.description ?? [],
    img: doc.img ? urlFor(doc.img).width(1100).quality(80).url() : '',
  };
}

export async function getProperties(): Promise<Property[]> {
  if (!USE_SANITY_PROPERTIES || !isSanityConfigured) return fallbackProperties;
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
  const fromFallback = () => {
    const p = fallbackProperties.find((p) => p.slug === slug);
    return p ? withGallery(p) : undefined;
  };
  if (!USE_SANITY_PROPERTIES || !isSanityConfigured) return fromFallback();
  try {
    const doc = await client.fetch<SanityProperty | null>(
      `*[_type == "property" && slug.current == $slug][0]{${FIELDS}}`,
      { slug }
    );
    return doc ? withGallery(toProperty(doc)) : fromFallback();
  } catch {
    return fromFallback();
  }
}

export async function getPropertySlugs(): Promise<string[]> {
  if (!USE_SANITY_PROPERTIES || !isSanityConfigured) return fallbackProperties.map((p) => p.slug);
  try {
    const slugs = await client.fetch<string[]>(
      `*[_type == "property" && defined(slug.current)].slug.current`
    );
    return slugs.length ? slugs : fallbackProperties.map((p) => p.slug);
  } catch {
    return fallbackProperties.map((p) => p.slug);
  }
}
