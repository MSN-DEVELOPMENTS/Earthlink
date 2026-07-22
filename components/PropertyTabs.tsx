'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Property } from '@/lib/data';

/* Sale / rent tabs for the properties listing.
   Filtering happens in the browser off the already-rendered list, so switching
   tabs is instant and every listing is still in the initial HTML for search
   engines — nothing is hidden behind a fetch.

   The active tab is mirrored into the URL (?type=sale) so each view is linkable,
   which is what makes it usable in an ad or a WhatsApp message.

   That sync deliberately uses the History API rather than useSearchParams. In
   the App Router, useSearchParams forces this component behind a Suspense
   boundary, and the prerendered HTML would then contain the fallback instead of
   the listings — the exact SEO cost this component was written to avoid. Reading
   the query in an effect keeps /properties fully static with all listings in the
   server HTML, and a popstate listener keeps the back button working. */

type Filter = 'all' | 'sale' | 'rent';

const TABS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'sale', label: 'For Sale' },
  { id: 'rent', label: 'For Rent' },
];

function parseFilter(value: string | null): Filter {
  return value === 'sale' || value === 'rent' ? value : 'all';
}

/** Tags are free text ("For Sale", "For Rent"), so match loosely on the word. */
function matches(p: Property, filter: Filter) {
  if (filter === 'all') return true;
  const tag = (p.tag || '').toLowerCase();
  return filter === 'sale' ? tag.includes('sale') : tag.includes('rent');
}

export default function PropertyTabs({ properties }: { properties: Property[] }) {
  // Starts at 'all' so the server and client agree on the first render; the
  // effect below applies ?type= immediately after mount.
  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    const fromUrl = () =>
      setFilter(parseFilter(new URLSearchParams(window.location.search).get('type')));
    fromUrl();
    // Someone pressing back should see the tab they came from.
    window.addEventListener('popstate', fromUrl);
    return () => window.removeEventListener('popstate', fromUrl);
  }, []);

  const select = useCallback((next: Filter) => {
    setFilter(next);
    // `all` drops the parameter entirely so the canonical /properties URL stays
    // clean. pushState (not replace) is what gives the back button something to
    // return to.
    const url = next === 'all' ? window.location.pathname : `${window.location.pathname}?type=${next}`;
    window.history.pushState({ type: next }, '', url);
  }, []);

  const counts = {
    all: properties.length,
    sale: properties.filter((p) => matches(p, 'sale')).length,
    rent: properties.filter((p) => matches(p, 'rent')).length,
  };

  const shown = properties.filter((p) => matches(p, filter));

  return (
    <>
      <div className="ptabs reveal" role="tablist" aria-label="Filter properties by listing type">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`ptab-${t.id}`}
            aria-selected={filter === t.id}
            aria-controls="ptab-panel"
            className={`ptab${filter === t.id ? ' is-active' : ''}`}
            onClick={() => select(t.id)}
          >
            {t.label}
            <span className="ptab-count">{counts[t.id]}</span>
          </button>
        ))}
      </div>

      <div className="pcards" id="ptab-panel" role="tabpanel" aria-labelledby={`ptab-${filter}`}>
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
