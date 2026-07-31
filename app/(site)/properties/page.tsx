import type { Metadata } from 'next';
import PropertiesView from '@/components/PropertiesView';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata('/properties');

export default function PropertiesPage() {
  return <PropertiesView active="all" />;
}
