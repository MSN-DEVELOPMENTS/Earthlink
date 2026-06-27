import Link from 'next/link';
import Image from 'next/image';
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
  },
  {
    title: 'Honest advice',
    text: 'You hear the full picture on every option, the upside and the trade-offs, before you commit.',
  },
  {
    title: 'Long-term care',
    text: 'Our work runs on through management and aftersales, so the asset keeps performing well past handover.',
  },
];

export default function AboutPage() {
  return (
    <>
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
      {/* ===== HEADER ===== */}
      <section className="page-head">
=======
>>>>>>> staging
      {/* ===== HEADER — full-bleed Atlantis hero, copy centred on image ===== */}
      <section className="ab-hero" id="about-hero">
        <div className="ab-hero-bg" aria-hidden="true">
          <Image
<<<<<<< HEAD
            src="/about/hero-beach.jpg"
            alt="Atlantis and the Palm Jumeirah coastline at sunset"
=======
            src="/about/hero-desert.jpg"
            alt="Sunset over the Dubai desert dunes"
>>>>>>> staging
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> staging
        <div className="wrap">
          <div className="ab-hero-inner reveal">
            <h1>Built <span className="grad">Around You</span></h1>
            <p className="ab-hero-lead">
              Real estate works best when someone keeps your interests at the centre of every decision.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STORY + STATS ===== */}
<<<<<<< HEAD
      <section id="story">
=======
<<<<<<< Updated upstream
      <section id="story" style={{ paddingTop: 40 }}>
=======
      <section id="story" className="section-light">
>>>>>>> Stashed changes
>>>>>>> staging
        <div className="wrap">
          <div className="ab-split reveal">
            <div className="ab-split-img">
              <Image
                src="/about/community-family.jpg"
                alt="A family walking through a landscaped Dubai residential community"
                fill
                sizes="(max-width: 860px) 100vw, 46vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="ab-split-text">
              <span className="eyebrow ab-ey">Backed by ERE</span>
              <h2 className="section-title">The strength behind every deal</h2>
              <p className="ab-body">
                Behind every deal sits the strength of ERE, a wider real estate network with reach across
                the UAE. That backing means deeper market access, stronger developer ties, and a team that
                handles sales, leasing, and management together rather than apart. For you, it means one
                partner for the whole journey.
              </p>
            </div>
          </div>

          <div className="ab-stats reveal">
            {stats.map((s) => (
              <div className="ab-stat" key={s.lbl}>
                <span className="ab-stat-n">{s.big}</span>
                <span className="ab-stat-l">{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section id="how-we-work">
        <div className="wrap">
          <div className="ab-work reveal">
            <div className="ab-work-head">
              <span className="eyebrow ab-ey">How We Work</span>
              <h2 className="section-title">The way we look after you</h2>
            </div>
            <div className="ab-work-body">
              <dl className="ab-list">
                {howWeWork.map((s) => (
                  <div className="ab-item" key={s.title}>
                    <dt>{s.title}</dt>
                    <dd>{s.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR PROMISE ===== */}
      <section id="promise" className="section-light">
        <div className="wrap">
          <div className="ab-promise reveal">
            <span className="eyebrow ab-ey">Our Promise</span>
            <p className="ab-quote">
              We tell it straight — even when the honest answer is the harder one.
            </p>
            <p className="ab-promise-sub">
              A broker who puts your goals first on every deal, large or small. That is the standard we
              hold.
            </p>
            <Link href="/contact" className="btn btn-gold">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
