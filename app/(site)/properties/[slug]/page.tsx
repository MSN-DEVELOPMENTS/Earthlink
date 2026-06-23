import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPropertyBySlug, getPropertySlugs } from '@/lib/properties';
import PropertyGallery from '@/components/PropertyGallery';

export async function generateStaticParams() {
  const slugs = await getPropertySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const property = await getPropertyBySlug(params.slug);
  if (!property) return { title: 'Property' };
  return {
    title: property.name,
    description: `${property.name} in ${property.location}. ${property.type}, from ${property.price}.`,
    alternates: { canonical: `/properties/${property.slug}` },
  };
}

export default async function PropertyPage({ params }: { params: { slug: string } }) {
  const property = await getPropertyBySlug(params.slug);
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
          <Link href="/properties" className="back-link">← Back to all properties</Link>

          <div className="property-detail">
            <PropertyGallery
              images={property.gallery && property.gallery.length ? property.gallery : [property.img]}
              alt={property.name}
            />

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
                {property.url && (
                  <a
                    href={property.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-glass"
                  >
                    View on Bayut ↗
                  </a>
                )}
                <Link href="/properties" className="btn btn-glass">View all properties</Link>
              </div>

              <p className="table-note" style={{ marginTop: 24 }}>
                Listed by Earth Link Real Estate. Contact us for the DLD permit and full documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
