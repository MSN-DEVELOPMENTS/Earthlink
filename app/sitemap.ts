import type { MetadataRoute } from 'next';
import { getPropertySlugs } from '@/lib/properties';
import { getPostSlugs } from '@/lib/blog';
import { getNewsSlugs } from '@/lib/news';
import { getDeveloperSlugs, getProjectParams } from '@/lib/developers';

const siteUrl = 'https://www.eregroup.ae';

// Static routes under app/(site). Dynamic [slug] routes are appended below.
const staticPaths = [
  '',
  '/about',
  '/properties',
  '/developers',
  '/blog',
  '/news',
  '/media-center',
  '/contact',
  '/privacy',
  '/terms',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [propertySlugs, postSlugs, newsSlugs] = await Promise.all([
    getPropertySlugs(),
    getPostSlugs(),
    getNewsSlugs(),
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
  ];
}
