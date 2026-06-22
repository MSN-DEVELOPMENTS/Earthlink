import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { properties } from '@/lib/data';

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const property = properties.find((p) => p.slug === params.slug);
  if (!property) return { title: 'Property' };
  return {
    title: property.name,
    description: `${property.name} in ${property.location}. ${property.type}, from ${property.price}.`,
    alternates: { canonical: `/projects/${property.slug}` },
  };
}

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const property = properties.find((p) => p.slug === params.slug);
  if (!property) notFound();

  return (
    <article>
      {/* ===== HEADER ===== */}
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 14 }}>
            {property.tag} · {property.location}
          </span>
          <h1 className="reveal">{property.name}</h1>
        </div>
      </section>

      {/* ===== DETAIL ===== */}
      <section style={{ paddingTop: 44 }}>
        <div className="wrap">
          <Link href="/projects" className="back-link">← Back to all properties</Link>

          <div className="property-detail">
            <div className="detail-media reveal">
              <Image
                src={property.img}
                alt={property.name}
                fill
                priority
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="reveal">
              <div className="prop-price">From {property.price}</div>

              <dl className="detail-spec">
                <div><dt>Type</dt><dd>{property.type}</dd></div>
                <div><dt>Bedrooms</dt><dd>{property.beds}</dd></div>
                <div><dt>Area</dt><dd>{property.area}</dd></div>
                <div><dt>Location</dt><dd>{property.location}</dd></div>
                <div><dt>Reference</dt><dd>{property.ref}</dd></div>
                <div><dt>DLD Permit</dt><dd>{property.permit}</dd></div>
              </dl>

              {property.description.map((paragraph, i) => (
                <p className="prose" key={i} style={{ marginBottom: 16 }}>
                  {paragraph}
                </p>
              ))}

              <div className="hero-btns" style={{ marginTop: 30 }}>
                <Link href="/contact" className="btn btn-gold">Enquire about this property</Link>
                <Link href="/projects" className="btn btn-glass">View all properties</Link>
              </div>

              <p className="table-note" style={{ marginTop: 24 }}>
                Reference and DLD permit numbers shown are illustrative placeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
