'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Category, Post } from '@/lib/data';

/**
 * Category filter chips over a grid of article cards, used by /blog and /news.
 *
 * Non-matching cards are hidden with CSS rather than unmounted. ScrollReveal
 * collects `.reveal` elements once per route change, so a card mounted later
 * would never be observed and would stay stuck at opacity 0. Keeping every
 * card mounted means the observer is already watching it: hidden cards simply
 * don't intersect, and they animate in normally once a filter reveals them.
 *
 * Filtering is client-side state, not a `?category=` search param — reading
 * searchParams in a page opts it out of static rendering, and both listings
 * rely on ISR. Deep links live at /category/<slug> instead.
 */

type Props = {
  items: Post[];
  categories: Category[];
  /** '/blog' or '/news' — the prefix for each card's link. */
  basePath: string;
  /** Passed straight to next/image, so each page keeps its own sizing. */
  sizes: string;
  quality?: number;
};

export default function ArticleFilter({ items, categories, basePath, sizes, quality }: Props) {
  const [active, setActive] = useState('all');

  // Only offer a chip for a category that actually has an article here.
  const chips = categories.filter((c) => items.some((i) => i.categorySlug === c.slug));
  const isVisible = (item: Post) => active === 'all' || item.categorySlug === active;

  return (
    <>
      {/* One category between them all means there is nothing to filter. */}
      {chips.length > 1 && (
        <div className="cat-chips reveal" role="group" aria-label="Filter articles by category">
          <button
            type="button"
            className={`cat-chip${active === 'all' ? ' is-active' : ''}`}
            aria-pressed={active === 'all'}
            onClick={() => setActive('all')}
          >
            All
          </button>
          {chips.map((c) => (
            <button
              key={c.slug}
              type="button"
              className={`cat-chip${active === c.slug ? ' is-active' : ''}`}
              aria-pressed={active === c.slug}
              onClick={() => setActive(c.slug)}
            >
              {c.title}
            </button>
          ))}
        </div>
      )}

      <div className="blog-grid">
        {items.map((item) => (
          <Link
            href={`${basePath}/${item.slug}`}
            key={item.slug}
            className={`blog-card reveal${isVisible(item) ? '' : ' is-hidden'}`}
          >
            <div className="blog-card-img">
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.imageAlt || item.title}
                  fill
                  sizes={sizes}
                  {...(quality ? { quality } : {})}
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
            <div className="blog-card-body">
              {item.category && <span className="blog-card-cat">{item.category}</span>}
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <span className="blog-card-more">Read article →</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
