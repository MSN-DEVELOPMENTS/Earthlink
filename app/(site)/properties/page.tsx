import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { offers, matchSteps } from '@/lib/data';
import { getProperties } from '@/lib/properties';

export const metadata: Metadata = {
  title: 'Properties',
  alternates: { canonical: '/properties' },
  description: 'Curated Dubai property: off-plan launches, ready homes, and commercial. New launches arrive often.',
};

export default async function PropertiesPage() {
  const properties = await getProperties();
  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 14 }}>Properties — Curated for Dubai</span>
          <h1 className="reveal">New launches <span className="grad">worth your time</span></h1>
          <p className="reveal">
            Off-plan early access from Emaar, Sobha, Binghatti and DAMAC — plus ready homes in settled
            communities. The list updates weekly.
          </p>
        </div>
      </section>

      {/* ===== CURRENT SELECTION ===== */}
      <section id="selection" className="section-light" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 className="section-title">Select Primary Developments</h2>
          </div>
          <div className="pcards">
            {properties.map((p, i) => (
              <Link href={`/properties/${p.slug}`} className="pcard reveal" key={p.name}>
                <span className="pcard-media">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <span className="pcard-num">{String(i + 1).padStart(2, '0')}</span>
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
