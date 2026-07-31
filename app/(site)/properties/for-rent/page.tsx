import type { Metadata } from 'next';
import PropertiesView from '@/components/PropertiesView';
import { seoMetadata } from '@/lib/seo';

/* The rent view of the listings. Was /properties?type=rent, which read as a
   duplicate of /properties; next.config.mjs 301s that query URL here. */

export const metadata: Metadata = seoMetadata('/properties/for-rent');

export default function PropertiesForRentPage() {
  return <PropertiesView active="rent" />;
}
