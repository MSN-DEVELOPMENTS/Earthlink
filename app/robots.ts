import type { MetadataRoute } from 'next';

const siteUrl = 'https://earthlink.ae';

// Keeps crawlers (and SEO audit tools) focused on real pages. The bulk of the
// "extra" URLs a crawl reports are Next.js image-optimizer requests under
// /_next/image — resources, not pages — so we disallow them here. /_next/static
// stays crawlable because Googlebot needs the JS/CSS to render the pages.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next/image', '/studio', '/api/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
