import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getDeveloperBySlug, getDeveloperSlugs } from '@/lib/developers';

export function generateStaticParams() {
  return getDeveloperSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const developer = getDeveloperBySlug(params.slug);
  if (!developer) return { title: 'Developer' };
  return {
    title: developer.name,
    description: `${developer.name} in Dubai — current launches, communities, and starting prices.`,
    alternates: { canonical: `/developers/${developer.slug}` },
  };
}

export default function DeveloperPage({ params }: { params: { slug: string } }) {
  const developer = getDeveloperBySlug(params.slug);
  if (!developer) notFound();

  return (
    <article>
      {/* ===== HEADER ===== */}
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 14 }}>
            Developer · Dubai
          </span>
          <h1 className="reveal">{developer.name}</h1>
          <p className="reveal">{developer.tagline}</p>
          <div className="hero-btns reveal" style={{ marginTop: 26 }}>
            <a
              href={developer.brochuresUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              All brochures ↗
            </a>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section style={{ paddingTop: 44 }}>
        <div className="wrap">
          <Link href="/developers" className="back-link">← Back to all developers</Link>

          <div
            className="reveal"
            style={{ margin: '26px 0 30px', display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}
          >
            <h2 className="section-title" style={{ margin: 0 }}>Current projects</h2>
            <span className="muted" style={{ fontSize: '.95rem' }}>
              {developer.projects.length} launches
            </span>
          </div>

          <ul className="grid" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {developer.projects.map((project, i) => (
              <li
                className="glass card reveal"
                key={project.url}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 20,
                }}
              >
                <div style={{ minWidth: 0, display: 'flex', alignItems: 'center', gap: 18 }}>
                  <span className="ic" style={{ marginBottom: 0, flex: '0 0 auto' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ minWidth: 0 }}>
                    <h3 style={{ marginBottom: 6 }}>{project.name}</h3>
                    <p style={{ marginBottom: 0 }}>
                      {project.community} ·{' '}
                      <strong style={{ color: 'var(--slate)', fontWeight: 700 }}>{project.price}</strong>
                    </p>
                  </span>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-glass"
                  aria-label={`View ${project.name} on the official ${developer.name} site (opens in a new tab)`}
                >
                  View project ↗
                </a>
              </li>
            ))}
          </ul>

          <div className="hero-btns reveal" style={{ marginTop: 36 }}>
            <Link href="/contact" className="btn btn-gold">Enquire about {developer.name}</Link>
            <a
              href={developer.brochuresUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass"
            >
              All brochures ↗
            </a>
            <Link href="/developers" className="btn btn-glass">View all developers</Link>
          </div>

          <p className="table-note" style={{ marginTop: 24 }}>
            Prices and availability are set by the developer and change often. Contact Earth Link Real
            Estate for the latest on any project.
          </p>
        </div>
      </section>
    </article>
  );
}
