import Link from 'next/link';
import type { Metadata } from 'next';
import { offers, projects, matchSteps } from '@/lib/data';

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
          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 14 }}>Projects</span>
          <h1 className="reveal">Curated <span className="grad">for Dubai</span></h1>
          <p className="reveal">New launches arrive often. We bring you the ones worth your time.</p>
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

      {/* ===== CURRENT SELECTION ===== */}
      <section id="selection">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="eyebrow">Current Selection</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>On the list right now</h2>
          </div>
          <div className="ptable-wrap reveal">
            <table className="ptable">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Type</th>
                  <th>Community</th>
                  <th>From</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p.name}>
                    <td>{p.name}</td>
                    <td>{p.type}</td>
                    <td>{p.community}</td>
                    <td className="from">{p.from}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-note reveal">The list updates weekly. Ask us what fits.</p>
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
