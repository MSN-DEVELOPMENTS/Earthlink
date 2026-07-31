import Link from 'next/link';
import Image from 'next/image';
import type { Property } from '@/lib/data';
import { type ListingFilter, matchesListingType } from '@/lib/properties';

/* Sale / rent tabs for the properties listing.

   Each view is its own route — /properties, /properties/for-sale,
   /properties/for-rent — so the tabs are plain links and the filtering happens
   on the server. That keeps every view crawlable with its own title and
   canonical, and a link shared in an ad or a WhatsApp message lands on the
   right listings in the first response, with no client-side flash of "All".

   This used to filter in the browser and mirror the tab into ?type=sale via the
   History API. Those query URLs read as duplicates of /properties to search
   engines, so next.config.mjs now 301s them onto the paths below. */

const TABS: { id: ListingFilter; label: string; href: string }[] = [
  { id: 'all', label: 'All', href: '/properties' },
  { id: 'sale', label: 'For Sale', href: '/properties/for-sale' },
  { id: 'rent', label: 'For Rent', href: '/properties/for-rent' },
];

export default function PropertyTabs({
  properties,
  active,
}: {
  properties: Property[];
  active: ListingFilter;
}) {
  const counts = {
    all: properties.length,
    sale: properties.filter((p) => matchesListingType(p, 'sale')).length,
    rent: properties.filter((p) => matchesListingType(p, 'rent')).length,
  };

  const shown = properties.filter((p) => matchesListingType(p, active));

  return (
    <>
      <nav className="ptabs reveal" aria-label="Filter properties by listing type">
        {TABS.map((t) => (
          <Link
            key={t.id}
            href={t.href}
            aria-current={active === t.id ? 'page' : undefined}
            className={`ptab${active === t.id ? ' is-active' : ''}`}
          >
            {t.label}
            <span className="ptab-count">{counts[t.id]}</span>
          </Link>
        ))}
      </nav>

      <div className="pcards">
        {shown.map((p) => (
          <Link href={`/properties/${p.slug}`} className="pcard reveal in" key={p.slug}>
            <span className="pcard-media">
              <Image
                src={p.img}
                alt={p.name}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <span className="pcard-tag">{p.tag}</span>
            </span>
            <span className="pcard-body">
              <span className="pcard-nm">{p.name}</span>
              <span className="pcard-place">{p.location} · {p.type}</span>
              <span className="pcard-foot">
                <span className="pcard-price">{p.price}</span>
                <span className="pcard-go" aria-hidden="true">→</span>
              </span>
            </span>
          </Link>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="table-note">Nothing listed under this filter right now — ask us what is coming up.</p>
      )}
    </>
  );
}
