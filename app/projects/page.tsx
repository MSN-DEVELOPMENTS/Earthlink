import Link from 'next/link';
import type { Metadata } from 'next';
import { offers, properties, matchSteps } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projects — Earthlink Real Estate',
  description: 'Curated Dubai property: off-plan launches, ready homes, and commercial. New launches arrive often.',
};

export default function ProjectsPage() {
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
          <div className="grid g-3">
            {properties.map((p) => (
              <div className="glass prop reveal" key={p.name}>
                <div className="img">
                  <span className="tag">{p.tag}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.name} />
                </div>
                <div className="bd">
                  <h3>{p.name}</h3>
                  <div className="loc">{p.location}</div>
                  <dl className="spec">
                    <div><dt>Type</dt><dd>{p.type}</dd></div>
                    <div><dt>Beds</dt><dd>{p.beds}</dd></div>
                    <div><dt>Area</dt><dd>{p.area}</dd></div>
                    <div><dt>From</dt><dd className="price">{p.price}</dd></div>
                  </dl>
                  <div className="ref">
                    <span>REF · {p.ref}</span>
                    <span>DLD · {p.permit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="table-note reveal">
            The list updates weekly. Ask us what fits. Reference and DLD permit numbers shown are
            illustrative placeholders.
          </p>
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
                <h4>{s.title}</h4>
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
