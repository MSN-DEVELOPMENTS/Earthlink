import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProject, getProjectParams } from '@/lib/developers';
import PropertyGallery from '@/components/PropertyGallery';
import ProjectWhatsApp from '@/components/ProjectWhatsApp';
import ProjectInquiryForm from '@/components/ProjectInquiryForm';

export function generateStaticParams() {
  return getProjectParams().map(({ dev, project }) => ({ slug: dev, project }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; project: string };
}): Promise<Metadata> {
  const found = getProject(params.slug, params.project);
  if (!found) return { title: 'Project' };
  const { project, developer } = found;
  return {
    title: `${project.name} — ${developer.name}`,
    description:
      project.tagline ??
      `${project.name} by ${developer.name} in ${project.community}. From ${project.price}.`,
    alternates: { canonical: `/developers/${developer.slug}/${project.slug}` },
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string; project: string };
}) {
  const found = getProject(params.slug, params.project);
  if (!found) notFound();
  const { project, developer } = found;

  const images = [project.image, ...(project.gallery ?? [])];

  // Spec rows — only render the ones we actually have a value for.
  const specs: { label: string; value: string | undefined }[] = [
    { label: 'Developer', value: developer.name },
    { label: 'Community', value: project.community },
    { label: 'Unit types', value: project.unitTypes },
    { label: 'Bedrooms', value: project.bedrooms },
    { label: 'Sizes', value: project.sizes },
    { label: 'Starting price', value: project.price },
    { label: 'Payment plan', value: project.paymentPlan },
    { label: 'Handover', value: project.handover },
  ];

  return (
    <article>
      {/* ===== HEADER ===== */}
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 14 }}>
            {developer.name} · {project.community}
          </span>
          <h1 className="reveal">{project.name}</h1>
          {project.tagline && <p className="reveal">{project.tagline}</p>}
        </div>
      </section>

      {/* ===== DETAIL ===== */}
      <section className="section-light" style={{ paddingTop: 44 }}>
        <div className="wrap">
          <Link href={`/developers/${developer.slug}`} className="back-link">
            ← Back to {developer.name}
          </Link>

          <div className="property-detail" style={{ marginTop: 26 }}>
            <PropertyGallery images={images} alt={project.name} />

            <div className="reveal">
              <div className="prop-price">{project.price}</div>

              <dl className="detail-spec">
                {specs
                  .filter((s) => s.value)
                  .map((s) => (
                    <div key={s.label}>
                      <dt>{s.label}</dt>
                      <dd>{s.value}</dd>
                    </div>
                  ))}
              </dl>

              {(project.description ?? []).map((paragraph, i) => (
                <p className="prose" key={i} style={{ marginBottom: 16 }}>
                  {paragraph}
                </p>
              ))}

              <div className="hero-btns" style={{ marginTop: 30 }}>
                <a href="#enquire" className="btn btn-gold">Enquire about this project</a>
              </div>
            </div>
          </div>

          {/* ===== AMENITIES ===== */}
          {project.amenities && project.amenities.length > 0 && (
            <div className="reveal" style={{ marginTop: 56 }}>
              <h2 className="section-title" style={{ marginBottom: 22, textAlign: 'center' }}>Amenities</h2>
              <ul className="amenity-grid">
                {project.amenities.map((a) => (
                  <li key={a} className="amenity-item">
                    <span className="amenity-tick" aria-hidden="true">
                      <svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ===== LOCATION ===== */}
          {project.location && (
            <div className="reveal" style={{ marginTop: 56 }}>
              <h2 className="section-title" style={{ marginBottom: 8, textAlign: 'center' }}>Location</h2>
              <p className="prose center" style={{ marginBottom: 18 }}>{project.location.area}</p>
              <ul className="loc-grid">
                {project.location.nearby.map((n) => (
                  <li key={n} className="loc-item">
                    <span className="loc-pin" aria-hidden="true">
                      <svg viewBox="0 0 24 24"><path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                    </span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ===== FLOOR PLANS NOTE ===== */}
          <div className="reveal glass card" style={{ marginTop: 56, padding: 28 }}>
            <h3 style={{ marginBottom: 8 }}>Floor plans &amp; brochure</h3>
            <p className="prose" style={{ marginBottom: 16 }}>
              Detailed floor plans, the full unit mix, and the official brochure for {project.name} are
              available on request. Send us a message and we&apos;ll share them along with current
              availability and the latest payment plan.
            </p>
            <a href="#enquire" className="btn btn-gold">Request floor plans</a>
          </div>

          {/* ===== CONTACT / WHATSAPP ===== */}
          <div id="enquire" className="reveal contact-block" style={{ marginTop: 64 }}>
            <div>
              <h2 className="section-title" style={{ marginBottom: 12 }}>
                Interested in {project.name}?
              </h2>
              <p className="prose" style={{ marginBottom: 24 }}>
                Talk to an Earth Link consultant. Message us on WhatsApp for the fastest reply, or
                send the form and we&apos;ll get back within one business day — either way, we&apos;ll
                know you&apos;re asking about <strong>{project.name}</strong>.
              </p>
              <ProjectWhatsApp projectName={project.name} />
            </div>

            <ProjectInquiryForm projectName={project.name} developerName={developer.name} />
          </div>

          <p className="table-note" style={{ marginTop: 32 }}>
            Prices, sizes, payment plans, and handover dates are set by the developer and change
            often. Some details are indicative — contact Earth Link Real Estate to confirm the
            latest on {project.name}.
          </p>
        </div>
      </section>
    </article>
  );
}
