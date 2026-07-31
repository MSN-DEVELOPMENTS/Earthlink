import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';
import PropertyTabs from '@/components/PropertyTabs';
import { offers, matchSteps } from '@/lib/data';
import { getProperties, type ListingFilter } from '@/lib/properties';

/* The body shared by /properties, /properties/for-sale and /properties/for-rent.
   Only the headings and the active tab differ, so the three page files stay
   thin and the sections below the listings can't drift apart. */

const COPY: Record<ListingFilter, { lead: string; accent: string; section: string }> = {
  all: { lead: 'Explore', accent: 'Listings', section: 'Featured Properties' },
  sale: { lead: 'Property', accent: 'For Sale', section: 'Properties for Sale in Dubai' },
  rent: { lead: 'Property', accent: 'For Rent', section: 'Properties for Rent in Dubai' },
};

export default async function PropertiesView({ active }: { active: ListingFilter }) {
  const properties = await getProperties();
  const copy = COPY[active];

  return (
    <>
      {/* ===== HERO (Dubai Frame aerial background video) ===== */}
      <section className="page-head page-head--hero">
        <HeroVideo className="page-head-video" src="/properties/hero.mp4" poster="/properties/hero-poster.jpg" />
        <div className="page-head-overlay" aria-hidden="true" />
        <div className="wrap">
          <h1 className="reveal">{copy.lead} <span className="grad">{copy.accent}</span></h1>
        </div>
      </section>

      {/* ===== CURRENT SELECTION ===== */}
      <section id="selection" className="section-light" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="section-title">{copy.section}</h2>
          </div>
          <PropertyTabs properties={properties} active={active} />
          <p className="table-note reveal">The selection updates weekly. Ask us what fits.</p>
        </div>
      </section>

      {/* ===== WHAT WE OFFER ===== */}
      <section id="offer">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">What We Offer</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Three Ways In</h2>
          </div>
          <div className="grid g-3">
            {offers.map((o, i) => (
              <div className="glass card reveal" key={o.title}>
                <div className="ic">{String(i + 1).padStart(2, '0')}</div>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE MATCH YOU ===== */}
      <section id="match" className="section-light">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">How We Match You</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Four Steps to the Keys</h2>
          </div>
          <div className="grid steps">
            {matchSteps.map((s) => (
              <div className="glass step reveal" key={s.n}>
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 44 }}>
            <Link href="/contact" className="btn btn-gold">Request the Full List</Link>
          </div>
        </div>
      </section>
    </>
  );
}
