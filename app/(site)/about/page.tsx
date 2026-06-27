import Link from 'next/link';
import type { Metadata } from 'next';
import { stats } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
  alternates: { canonical: '/about' },
  description: 'Built around you. A Dubai brokerage backed by ERE, with sales, leasing, and management under one roof.',
};

/* About: How We Work — the three principles behind every deal. */
const howWeWork = [
  {
    title: 'Clear numbers',
    text: 'We track pricing, supply, and yield by community, and keep it current as the market moves.',
    icon: 'M3 17l6-6 4 4 8-8M21 7h-5M21 7v5',
  },
  {
    title: 'Honest advice',
    text: 'You hear the full picture on every option, the upside and the trade-offs, before you commit.',
    icon: 'M12 3l8 4v5c0 5-3.4 8-8 9-4.6-1-8-4-8-9V7l8-4zM9 12l2 2 4-4',
  },
  {
    title: 'Long-term care',
    text: 'Our work runs on through management and aftersales, so the asset keeps performing well past handover.',
    icon: 'M21 12a9 9 0 1 1-3-6.7M21 4v4h-4',
  },
];

export default function AboutPage() {
  return (
    <>
<<<<<<< Updated upstream
      {/* ===== HEADER ===== */}
      <section className="page-head">
=======
      {/* ===== HEADER — full-bleed Atlantis hero, copy centred on image ===== */}
      <section className="ab-hero" id="about-hero">
        <div className="ab-hero-bg" aria-hidden="true">
          <Image
            src="/about/hero-desert.jpg"
            alt="Sunset over the Dubai desert dunes"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <section id="story" style={{ paddingTop: 40 }}>
=======
      <section id="story" className="section-light">
>>>>>>> Stashed changes
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: 760 }}>
            <span className="eyebrow">Backed by ERE</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>The strength behind every deal</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Behind every deal sits the strength of ERE, a wider real estate network with reach across the
              UAE. That backing means deeper market access, stronger developer ties, and a team that handles
              sales, leasing, and management together rather than apart. For you, it means one partner for
              the whole journey.
            </p>
          </div>
          <div className="stats reveal" style={{ marginTop: 48 }}>
            {stats.map((s) => (
              <div className="glass stat" key={s.lbl}>
                <div className="big">{s.big}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section id="how-we-work">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 48 }}>
            <span className="eyebrow">How We Work</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>The way we look after you</h2>
          </div>
          <div className="grid g-3">
            {howWeWork.map((s) => (
              <div className="glass card reveal" key={s.title}>
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
      <section id="promise" className="section-light">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: 760 }}>
            <span className="eyebrow">Our Promise</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>We tell it straight</h2>
            <p className="prose" style={{ marginTop: 18, marginBottom: 28 }}>
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
