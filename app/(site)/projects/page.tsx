import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { offers, matchSteps } from '@/lib/data';
import { getProperties } from '@/lib/properties';

export const metadata: Metadata = {
  title: 'Projects',
  alternates: { canonical: '/projects' },
  description: 'Curated Dubai property: off-plan launches, ready homes, and commercial. New launches arrive often.',
};

export default async function ProjectsPage() {
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
      <section id="selection" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="index">
            {properties.map((p, i) => (
              <Link href={`/projects/${p.slug}`} className="row reveal" key={p.name}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <span className="thumb">
                  <Image src={p.img} alt={p.name} fill sizes="78px" style={{ objectFit: 'cover' }} />
                </span>
                <span className="info">
                  <span className="nm">{p.name}</span>
                  <span className="place">{p.location} · {p.type}</span>
                </span>
                <span className="price">{p.price}</span>
                <span className="go" aria-hidden="true">→</span>
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
            <h2 className="section-title" style={{ marginTop: 12 }}>Three ways in</h2>
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
      <section id="match">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">How We Match You</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Four steps, start to keys</h2>
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
