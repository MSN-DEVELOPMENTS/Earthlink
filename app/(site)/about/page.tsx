import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { services, stats } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
  alternates: { canonical: '/about' },
  description: 'Built around you. A Dubai brokerage backed by ERE, with sales, leasing, and management under one roof.',
};

export default function AboutPage() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 14 }}>About Earthlink</span>
          <h1 className="reveal">Built <span className="grad">Around You</span></h1>
          <p className="reveal">
            Real estate works best when someone keeps your interests at the centre of every decision. That
            is the idea Earthlink was built on. We guide families into homes and investors into portfolios
            with the same level of care, whatever the size of the deal.
          </p>
        </div>
      </section>

      {/* ===== STORY + STATS ===== */}
      <section id="story" style={{ paddingTop: 40 }}>
        <div className="wrap about-grid">
          <div className="about-img reveal">
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
              alt="Earthlink team at work"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 45vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="reveal">
            <span className="eyebrow">Backed by ERE</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>The strength behind every deal</h2>
            <p className="lead">
              Behind every deal sits the strength of ERE, a wider real estate network with reach across the
              UAE. That backing means deeper market access, stronger developer ties, and a team that handles
              sales, leasing, and management together rather than apart. For you, it means one partner for
              the whole journey.
            </p>
            <div className="stats">
              {stats.map((s) => (
                <div className="glass stat" key={s.lbl}>
                  <div className="big">{s.big}</div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section id="how-we-work">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">How We Work</span>
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

      {/* ===== OUR PROMISE ===== */}
      <section id="promise">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <span className="eyebrow">Our Promise</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>We tell it straight</h2>
            <p className="prose center" style={{ marginTop: 18, marginBottom: 28 }}>
              A broker who puts your goals first and tells it straight, even when the honest answer is the
              harder one. That is the standard we hold on every deal, large or small.
            </p>
            <Link href="/contact" className="btn btn-gold">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
