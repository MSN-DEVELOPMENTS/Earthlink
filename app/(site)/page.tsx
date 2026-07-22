import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import HeroVideo from '@/components/HeroVideo';
import { services, stats } from '@/lib/data';
import { getProperties } from '@/lib/properties';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata('/');

export default async function HomePage() {
  const properties = await getProperties();
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero hero--bg" id="home">
        <HeroVideo src="/home/hero.mp4" poster="/home/hero-poster.jpg" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1 className="reveal">
              Earth Link <span className="grad">Real Estate</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section id="services" className="section-light">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 44 }}>
            <span className="eyebrow">Our Services</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>What We Do</h2>
          </div>
          <div className="grid g-4">
            {services.map((s) => (
              <div className="glass card reveal" key={s.n}>
                <div className="ic">
                  <svg viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section id="about" className="about-cover">
        <div className="about-cover-bg" aria-hidden="true">
          <Image
            src="/home/core-persona-villa.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="about-cover-overlay" aria-hidden="true" />
        <div className="wrap">
          <div className="about-cover-content reveal">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Built on Ten Years</h2>
            <p className="lead">
              Ten years in the market. Four services in one place. Seven and more areas mapped in detail. This
              is the base every client decision stands on.
            </p>
            <div className="stats">
              {stats.map((s) => (
                <div className="glass stat" key={s.lbl}>
                  <div className="big">{s.big}</div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 30 }}>
              <Link href="/about" className="btn btn-glass">More about us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROPERTIES ===== */}
      <section id="properties" className="section-light">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">Properties — Curated for Dubai</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Featured Properties</h2>
            <p className="lead" style={{ margin: '14px auto 0' }}>
              Ready homes to rent and buy across Dubai&apos;s settled communities, listed by our brokers.
              The list updates weekly.
            </p>
          </div>
          <div className="pcards">
            {properties.slice(0, 3).map((p) => (
              <Link href={`/properties/${p.slug}`} className="pcard reveal" key={p.name}>
                <span className="pcard-media">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
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
          <div className="reveal" style={{ textAlign: 'center', marginTop: 44 }}>
            <Link href="/properties" className="btn btn-gold">View all properties</Link>
          </div>
        </div>
      </section>

    </>
  );
}
