import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata('/about');

/* About: headline stats — labels are About-specific (the Home page uses its own). */
const stats = [
  { big: '10+', lbl: 'Years in market executing uncompromised transactions.' },
  { big: '4', lbl: 'Services strictly managed under one roof.' },
  { big: '7+', lbl: 'Core communities completely mapped and monitored.' },
];

/* About: leadership & team. Photos live under /public/about/team and are added
   as they arrive; until a photo is set, the card shows the member's initials. */
const team: { name: string; role: string; img?: string }[] = [
  { name: 'Zeeshan Naqvi', role: 'CEO', img: '/about/team/zeeshan-naqvi.jpg' },
  { name: 'Natasha Hall', role: 'Sales Manager' },
  { name: 'Sharoon Irfan Khan', role: 'Marketing Head', img: '/about/team/sharoon-irfan-khan.jpg?v=2' },
  { name: 'Naveed Anjum', role: 'Content Manager', img: '/about/team/naveed-anjum.jpg' },
  { name: 'Safia Sehar', role: 'Social Media Manager', img: '/about/team/safia-sehar.jpg?v=2' },
  { name: 'Hamad Zaheer', role: 'Sales Executive', img: '/about/team/hamad-zaheer.jpg' },
  { name: 'Saeed Anwar', role: 'Website Developer', img: '/about/team/saeed-anwar.jpg?v=2' },
  { name: 'Zain Khalid', role: 'Sales Executive' },
];

/* About: How We Work — the three principles behind every deal. */
const howWeWork = [
  {
    title: 'Clear numbers',
    text: 'We track pricing, supply, and yield by community, and keep it current as the market moves. You trade on hard data, not speculation.',
  },
  {
    title: 'Honest advice',
    text: 'You hear the full picture on every option, including the upside and the trade-offs, before you commit. We strip away the noise.',
  },
  {
    title: 'Long-term care',
    text: 'Our work runs on through management and aftersales, so the asset keeps performing well past handover.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===== HEADER — full-bleed Atlantis hero, copy centred on image ===== */}
      <section className="ab-hero" id="about-hero">
        <div className="ab-hero-bg" aria-hidden="true">
          <video
            className="ab-hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/about/hero-poster.jpg?v=2"
          >
            <source src="/about/hero.mp4?v=2" type="video/mp4" />
          </video>
        </div>
        <div className="wrap">
          <div className="ab-hero-inner reveal">
            <h1 className="ab-hero-title">Built <span className="grad">Around You</span></h1>
          </div>
        </div>
      </section>

      {/* ===== STORY + STATS ===== */}
      <section id="story" className="section-light">
        <div className="wrap">
          <div className="ab-banner reveal">
            <Image
              src="/about/dubai-frame.jpg"
              alt="Aerial view of the Dubai Frame with the city skyline and park beyond"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="ab-banner-text">
              <h2 className="section-title">The Strength Behind Every Deal</h2>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: 56 }}>
            <span className="eyebrow ab-ey">Operational Footprint</span>
            <h2 className="section-title">Result. Integrity. Discipline.</h2>
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
              <h2 className="section-title">The Way We Look After You</h2>
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

      {/* ===== TEAM ===== */}
      <section id="team" className="section-light">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 42 }}>
            <span className="eyebrow ab-ey">Our Team</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>The People Behind Every Deal</h2>
          </div>
          <div className="ab-team reveal">
            {team.map((m) => (
              <figure className="ab-team-card" key={m.name}>
                <div className="ab-team-photo">
                  {m.img ? (
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 980px) 33vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <span className="ab-team-initials" aria-hidden="true">
                      {m.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                    </span>
                  )}
                </div>
                <figcaption>
                  <span className="ab-team-name">{m.name}</span>
                  <span className="ab-team-role">{m.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR PROMISE ===== */}
      <section id="promise" className="section-light">
        <div className="wrap">
          <div className="ab-promise reveal">
            <span className="eyebrow ab-ey">Our Promise</span>
            <p className="ab-quote">
              We value honesty over ease.
            </p>
            <p className="ab-promise-sub">
              A broker who puts your goals first on every deal, large or small. That is the standard we
              hold. We do not deal in artificial scarcity; we deal in execution.
            </p>
            <Link href="/contact" className="btn btn-gold">Contact Us</Link>
          </div>
        </div>
      </section>

    </>
  );
}
