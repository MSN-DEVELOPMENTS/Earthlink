import Link from 'next/link';
import { services, stats, properties, communities, testimonials } from '@/lib/data';
import SearchBar from '@/components/SearchBar';

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" id="home">
        <div className="wrap">
          <span className="pill reveal">
            <span className="dot"></span> Dubai Brokerage · Backed by ERE
          </span>
          <h1 className="reveal">
            Dubai real estate,<br />
            <span className="grad">made clear.</span>
          </h1>
          <p className="reveal">
            Buy, lease, or invest with advice you can trust. Ten years of local deals, and a team that
            reads the market street by street.
          </p>
          <div className="hero-btns reveal">
            <Link href="/projects" className="btn btn-gold">Explore Properties</Link>
            <Link href="/contact" className="btn btn-glass">Talk to an Advisor</Link>
          </div>
          <SearchBar />
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section id="services">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 44, maxWidth: 560 }}>
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
              alt="Earthlink advisor with clients"
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
      <section id="properties">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">Properties — Curated for Dubai</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>New launches worth your time</h2>
            <p className="lead" style={{ margin: '14px auto 0' }}>
              Off-plan early access from Emaar, Sobha, Binghatti and DAMAC — plus ready homes in settled
              communities. The list updates weekly.
            </p>
          </div>
          <div className="grid g-3">
            {properties.slice(0, 3).map((p) => (
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
          <div className="reveal" style={{ textAlign: 'center', marginTop: 44 }}>
            <Link href="/projects" className="btn btn-gold">View all properties</Link>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITIES ===== */}
      <section id="communities">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 44, maxWidth: 560 }}>
            <span className="eyebrow">Communities</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Dubai&apos;s best-known addresses</h2>
          </div>
          <div className="comm-grid">
            {communities.slice(0, 6).map((c) => (
              <div className="comm reveal" key={c.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.name} />
                <div className="ov">
                  <h4>{c.name}</h4>
                  <span>{c.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">Client Voices</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Trusted on every deal</h2>
          </div>
          <div className="grid tgrid">
            {testimonials.map((t) => (
              <div className="glass tcard reveal" key={t.name}>
                <div className="stars">★★★★★</div>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <div className="who">
                  <div className="av">{t.initials}</div>
                  <div>
                    <div className="nm">{t.name}</div>
                    <div className="rl">{t.role}</div>
                  </div>
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
            <span className="eyebrow">Ready to Begin</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Tell us your goal</h2>
            <p className="lead" style={{ margin: '14px auto 28px' }}>
              Tell us your goal, and we map the route from there. Buying, leasing, or investing, the team
              stays with you for every step.
            </p>
            <div className="hero-btns" style={{ justifyContent: 'center' }}>
              <Link href="/contact" className="btn btn-gold">Schedule a Consultation</Link>
              <Link href="/projects" className="btn btn-glass">Browse Properties</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
