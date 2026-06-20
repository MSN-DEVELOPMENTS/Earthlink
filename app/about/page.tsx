import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Earthlink Real Estate',
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

      {/* ===== HOW WE WORK ===== */}
      <section id="how-we-work">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">How We Work</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Three commitments, every deal</h2>
          </div>
          <div className="grid g-3">
            <div className="glass card reveal">
              <div className="ic">01</div>
              <h3>Clear numbers</h3>
              <p>We track pricing, supply, and yield by community, and keep it current as the market moves.</p>
            </div>
            <div className="glass card reveal">
              <div className="ic">02</div>
              <h3>Honest advice</h3>
              <p>You hear the full picture on every option, the upside and the trade-offs, before you commit.</p>
            </div>
            <div className="glass card reveal">
              <div className="ic">03</div>
              <h3>Long-term care</h3>
              <p>Our work runs on through management and aftersales, so the asset keeps performing well past handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BACKED BY ERE ===== */}
      <section id="ere">
        <div className="wrap about-grid">
          <div className="reveal">
            <span className="eyebrow">Backed by ERE</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>The strength behind every deal</h2>
            <p className="lead">
              Behind every deal sits the strength of ERE, a wider real estate network with reach across the
              UAE. That backing means deeper market access, stronger developer ties, and a team that handles
              sales, leasing, and management together rather than apart. For you, it means one partner for
              the whole journey.
            </p>
          </div>
          <div className="about-img reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
              alt="Dubai skyline"
            />
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
