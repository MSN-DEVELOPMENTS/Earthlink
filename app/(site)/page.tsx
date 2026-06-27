import Link from 'next/link';
import Image from 'next/image';
import { services, stats, communities } from '@/lib/data';
import { getProperties } from '@/lib/properties';
import HeroSlideshow from '@/components/HeroSlideshow';

export default async function HomePage() {
  const properties = await getProperties();
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero hero--bg" id="home">
        <HeroSlideshow />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="pill reveal">
              <span className="dot"></span> Dubai Brokerage · Backed by ERE
            </span>
            <h1 className="reveal">
              Dubai real estate,<br />
              <span className="grad">Made clear.</span>
            </h1>
            <p className="reveal">
              Buy, lease, or invest with advice you can trust. Ten years of local deals, and a team that
              reads the market street by street.
            </p>
            <div className="hero-btns reveal">
              <Link href="/properties" className="btn btn-gold">Explore Properties</Link>
              <Link href="/contact" className="btn btn-glass">Talk to an Advisor</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section id="services" className="section-light">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 44 }}>
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Four services, one standard of care</h2>
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
      <section id="about">
        <div className="wrap about-grid">
          <div className="about-img reveal">
            <Image
              src="/home/about-living-room.jpg"
              alt="Luxury Dubai apartment interior with a Burj Khalifa view"
              fill
              sizes="(max-width: 860px) 100vw, 45vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="reveal">
            <span className="eyebrow">About Earthlink</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Built around you</h2>
            <p className="lead">
              Real estate works best when someone keeps your interests at the centre of every decision. We
              guide families into homes and investors into portfolios with the same care. Behind every deal
              sits the strength of <b>ERE</b> — deeper market access, stronger developer ties, one partner
              for the whole journey.
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
            <h2 className="section-title" style={{ marginTop: 12 }}>New launches worth your time</h2>
            <p className="lead" style={{ margin: '14px auto 0' }}>
              Off-plan early access from Emaar, Sobha, Binghatti and DAMAC — plus ready homes in settled
              communities. The list updates weekly.
            </p>
          </div>
          <div className="pcards">
            {properties.slice(0, 3).map((p, i) => (
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
          <div className="reveal" style={{ textAlign: 'center', marginTop: 44 }}>
            <Link href="/properties" className="btn btn-gold">View all properties</Link>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITIES ===== */}
      <section id="communities">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 44 }}>
            <span className="eyebrow">Communities</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Dubai&apos;s best-known addresses</h2>
          </div>
          <div className="comm-grid">
            {communities.slice(0, 6).map((c) => (
              <div className="comm reveal" key={c.name}>
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="ov">
                  <h3>{c.name}</h3>
                  <span>{c.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== READY TO BEGIN ===== */}
      <section id="cta">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Ready to begin</h2>
            <p className="lead" style={{ margin: '14px auto 28px' }}>
              Tell us your goal, and we map the route from there. Buying, leasing, or investing, the team
              stays with you for every step.
            </p>
            <div className="hero-btns" style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn-gold">Schedule a Consultation</Link>
              <Link href="/properties" className="btn btn-glass">Browse Properties</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
