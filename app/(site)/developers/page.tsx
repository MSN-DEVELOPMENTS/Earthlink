import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getDevelopers, developersPage, developerStartingFrom } from '@/lib/developers';

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
      {/* ===== HERO (Dubai supertall towers aerial background video) ===== */}
      <section className="page-head page-head--hero">
        <video
          className="page-head-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/developers/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/developers/hero.mp4" type="video/mp4" />
        </video>
        <div className="page-head-overlay" aria-hidden="true" />
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

      {/* ===== DEVELOPER ROWS ===== */}
      <section id="dev-list" className="section-light">
        <div className="wrap">
          <div className="dv-list">
            {developers.map((d) => {
              const from = developerStartingFrom(d);
              return (
                <Link href={`/developers/${d.slug}`} className="dv-banner reveal" key={d.slug}>
                  <Image
                    src={d.image}
                    alt={`${d.name} — signature development`}
                    fill
                    sizes="(max-width: 1100px) 100vw, 1100px"
                    style={{ objectFit: 'cover' }}
                  />
                  <span className="dv-scrim" aria-hidden="true" />
                  <div className="dv-overlay">
                    <h2 className="dv-name">{d.name}</h2>
                    <p className="dv-tag">{d.tagline}</p>
                    <div className="dv-meta">
                      {from && (
                        <span className="dv-stat">
                          <span className="dv-stat-l">Starting from</span>
                          {from}
                        </span>
                      )}
                      <span className="dv-stat">
                        <span className="dv-stat-l">Live projects</span>
                        {d.projects.length}
                      </span>
                    </div>
                    <span className="dv-go">View projects →</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="table-note reveal">New launches arrive often. Ask us what fits your goals.</p>
        </div>
      </section>
    </>
  );
}
