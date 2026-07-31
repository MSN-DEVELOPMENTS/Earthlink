import type { Metadata } from 'next';
import PropertiesView from '@/components/PropertiesView';
import { seoMetadata } from '@/lib/seo';

/* The sale view of the listings. Was /properties?type=sale, which read as a
   duplicate of /properties; next.config.mjs 301s that query URL here. */

export const metadata: Metadata = seoMetadata('/properties/for-sale');

export default function PropertiesForSalePage() {
  return <PropertiesView active="sale" />;
}
