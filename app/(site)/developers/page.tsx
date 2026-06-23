import Link from 'next/link';
import type { Metadata } from 'next';
import { getDevelopers, developersPage } from '@/lib/developers';

export const metadata: Metadata = {
  title: 'Developers',
  alternates: { canonical: '/developers' },
  description:
    'Dubai’s leading developers — Emaar, DAMAC, Sobha and Binghatti — with their latest launches and starting prices.',
};

export default function DevelopersPage() {
  const developers = getDevelopers();
  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 14 }}>
            {developersPage.eyebrow}
          </span>
          <h1 className="reveal">
            {developersPage.headlineLead} <span className="grad">{developersPage.headlineAccent}</span>
          </h1>
          <p className="reveal">{developersPage.intro}</p>
        </div>
      </section>

      {/* ===== DEVELOPER CARDS ===== */}
      <section style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="grid g-4">
            {developers.map((d, i) => (
              <Link href={`/developers/${d.slug}`} className="glass card reveal" key={d.slug}>
                <div className="ic">{String(i + 1).padStart(2, '0')}</div>
                <h3>{d.name}</h3>
                <p>{d.tagline}</p>
                <span
                  style={{
                    display: 'inline-block',
                    marginTop: 18,
                    color: 'var(--champagne-ink)',
                    fontWeight: 600,
                    fontSize: '.9rem',
                  }}
                >
                  View projects →
                </span>
              </Link>
            ))}
          </div>
          <p className="table-note reveal">New launches arrive often. Ask us what fits your goals.</p>
        </div>
      </section>
    </>
  );
}
