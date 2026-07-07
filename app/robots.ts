import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.eregroup.ae';

// This is a real-estate site, so we deliberately let Google crawl the Next.js
// image optimizer (/_next/image) — that keeps property, area, and team photos
// eligible for Google Images. /_next/static stays crawlable too so Googlebot can
// render pages. Only the API and the Sanity Studio admin are disallowed.
// (To keep images OUT of search instead, add '/_next/image' to disallow.)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/_next/image', '/_next/static'],
      disallow: ['/api/', '/studio'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
