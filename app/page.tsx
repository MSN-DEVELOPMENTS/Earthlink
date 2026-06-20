import Link from 'next/link';
import { services, communities, whyEarthlink } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" id="home">
        <div className="wrap">
          <span className="pill reveal">
            <span className="dot"></span> Dubai Real Estate Brokerage · Backed by ERE
          </span>
          <h1 className="reveal">
            Identity <span className="grad">Redefined.</span>
          </h1>
          <p className="reveal">
            Buying, leasing, or investing in Dubai works best with clear advice. We bring ten years of
            local deals and a team that reads the market street by street.
          </p>
          <div className="hero-btns reveal">
            <Link href="/projects" className="btn btn-gold">Explore Properties</Link>
            <Link href="/contact" className="btn btn-glass">Book a Consultation</Link>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section id="who">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 12 }}>
            <span className="eyebrow">Who We Are</span>
          </div>
          <p className="prose center reveal">
            A Dubai brokerage backed by ERE, with ten years in the market. We cover sales, leasing,
            property management, and off-plan, all under one roof. The relationship continues after
            handover, because owning well matters as much as buying well.
          </p>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section id="services">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Four services, one standard of care</h2>
          </div>
          <div className="grid g-4">
            {services.map((s) => (
              <div className="glass card reveal" key={s.n}>
                <div className="ic">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR PHILOSOPHY ===== */}
      <section id="philosophy">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 12 }}>
            <span className="eyebrow">Our Philosophy</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Straight answers, real numbers</h2>
          </div>
          <p className="prose center reveal">
            Every figure we share is real, every option comes with its trade-offs laid out, and every
            answer is the straight one. The market can feel complicated, so we make your part of it clear
            and keep you informed at each step. That is how good decisions get made.
          </p>
        </div>
      </section>

      {/* ===== COMMUNITIES ===== */}
      <section id="communities">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">Communities We Work With</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Dubai&apos;s most established addresses</h2>
            <p className="lead" style={{ margin: '14px auto 0' }}>
              We work across Dubai&apos;s most established communities. A few we know best.
            </p>
          </div>
          <div className="comm-grid">
            {communities.map((c) => (
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

      {/* ===== WHY EARTHLINK ===== */}
      <section id="why">
        <div className="wrap about-grid">
          <div className="about-img reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
              alt="Earthlink team"
            />
          </div>
          <div className="reveal">
            <span className="eyebrow">Why Earthlink</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>What working with us looks like</h2>
            <ul className="checklist">
              {whyEarthlink.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
