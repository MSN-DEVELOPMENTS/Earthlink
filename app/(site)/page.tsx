import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { services, stats, communities } from '@/lib/data';
import { getProperties } from '@/lib/properties';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata('/');

export default async function HomePage() {
  const properties = await getProperties();
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero hero--bg" id="home">
        <video
          className="hero-bg hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/home/hero-poster.jpg?v=2"
          aria-hidden="true"
        >
          <source src="/home/hero.mp4?v=2" type="video/mp4" />
        </video>
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
            <h2 className="section-title">What We Do</h2>
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
            <span className="eyebrow">The Earth Link Foundation</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Core Persona</h2>
            <p className="lead">
              Real estate demands an open-book policy. We keep your goals at the center of every deal. Behind
              every signed contract is the full strength of Earth Link—giving you off-market access, direct ties
              to top builders, and one team handling your property from start to finish. Under Sharoon&apos;s
              leadership, we bring tested standards to every transaction.
            </p>
            <div className="stats">
              {stats.map((s) => (
                <div className="glass stat" key={s.lbl}>
                  <div className="big">{s.big}</div>
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
            <h2 className="section-title" style={{ marginTop: 12 }}>Off-Plan Properties</h2>
            <p className="lead" style={{ margin: '14px auto 0' }}>
              Off-plan early access from Emaar, Sobha, Binghatti and DAMAC — plus ready homes in settled
              communities. The list updates weekly.
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

      {/* ===== COMMUNITIES ===== */}
      <section id="communities">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 44 }}>
            <span className="eyebrow">Live the Dubai Lifestyle</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Dubai&apos;s Finest Neighborhoods</h2>
          </div>
          <div className="comm-grid">
            {communities.slice(0, 8).map((c) => (
              <div className="comm reveal" key={c.name}>
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  loading="eager"
                  sizes="(max-width: 620px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: 'cover', objectPosition: c.pos ?? 'center' }}
                />
                <div className="ov">
                  <h3>{c.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
