import Link from 'next/link';
import Image from 'next/image';
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
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="section-light" style={{ paddingTop: 44 }}>
        <div className="wrap">
          <Link href="/developers" className="back-link">← Back to all developers</Link>

          <div
            className="reveal"
            style={{ margin: '26px 0 30px', display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}
          >
            <h2 className="section-title" style={{ margin: 0 }}>Current projects</h2>
            <span className="muted" style={{ fontSize: '.95rem' }}>
              {developer.projects.length} launches
            </span>
          </div>

          <ul className="pj-grid" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {developer.projects.map((project, i) => (
              <li className="reveal" key={project.slug}>
                <Link
                  href={`/developers/${developer.slug}/${project.slug}`}
                  className="pj-card glass card"
                  aria-label={`View details for ${project.name} in ${project.community}`}
                >
                  <span className="pj-media">
                    <Image
                      src={project.image}
                      alt={`${project.name} — ${project.community}`}
                      fill
                      quality={90}
                      sizes="(max-width: 720px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <span className="pj-num">{String(i + 1).padStart(2, '0')}</span>
                  </span>
                  <span className="pj-body">
                    <h3 className="pj-name">{project.name}</h3>
                    <p className="pj-loc">{project.community}</p>
                    <span className="pj-foot">
                      <strong className="pj-price">{project.price}</strong>
                      <span className="pj-go">View details →</span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hero-btns reveal" style={{ marginTop: 36 }}>
            <Link href="/contact" className="btn btn-gold">Enquire about {developer.name}</Link>
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
