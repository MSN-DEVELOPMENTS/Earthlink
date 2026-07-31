import type { MetadataRoute } from 'next';
import { getPropertySlugs } from '@/lib/properties';
import { getPostSlugs } from '@/lib/blog';
import { getNewsSlugs } from '@/lib/news';
import { getCategorySlugs } from '@/lib/categories';
import { getDeveloperSlugs, getProjectParams } from '@/lib/developers';

const siteUrl = 'https://www.eregroup.ae';

// Static routes under app/(site). Dynamic [slug] routes are appended below.
const staticPaths = [
  '',
  '/about',
  '/properties',
  '/properties/for-sale',
  '/properties/for-rent',
  '/developers',
  '/blog',
  '/news',
  '/media-center',
  '/contact',
  '/privacy',
  '/terms',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // getCategorySlugs() returns only categories that have at least one article —
  // an empty archive page is not worth submitting for indexing.
  const [propertySlugs, postSlugs, newsSlugs, categorySlugs] = await Promise.all([
    getPropertySlugs(),
    getPostSlugs(),
    getNewsSlugs(),
    getCategorySlugs(),
  ]);
  const developerSlugs = getDeveloperSlugs();
  const projectParams = getProjectParams();

  const url = (path: string): MetadataRoute.Sitemap[number] => ({
    url: `${siteUrl}${path}`,
  });

  return [
    ...staticPaths.map(url),
    ...propertySlugs.map((slug) => url(`/properties/${slug}`)),
    ...developerSlugs.map((slug) => url(`/developers/${slug}`)),
    ...projectParams.map(({ dev, project }) => url(`/developers/${dev}/${project}`)),
    ...postSlugs.map((slug) => url(`/blog/${slug}`)),
    ...newsSlugs.map((slug) => url(`/news/${slug}`)),
    ...categorySlugs.map((slug) => url(`/category/${slug}`)),
  ];
}
