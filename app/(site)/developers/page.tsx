import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getDevelopers, developersPage, developerStartingFrom } from '@/lib/developers';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata('/developers');

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
          poster="/developers/hero-poster.jpg?v=2"
          aria-hidden="true"
        >
          <source src="/developers/hero.mp4?v=2" type="video/mp4" />
        </video>
        <div className="page-head-overlay" aria-hidden="true" />
        <div className="wrap">
          <h1 className="reveal">
            {developersPage.headlineLead} <span className="grad">{developersPage.headlineAccent}</span>
          </h1>
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
