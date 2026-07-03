import type { Metadata } from 'next';
import { seoMetadata } from '@/lib/seo';
import { contact } from '@/lib/data';
import InquiryForm from '@/components/InquiryForm';

export const metadata: Metadata = seoMetadata('/contact');

export default function ContactPage() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 14 }}>Expert Advice &amp; Market Data</span>
          <h1 className="reveal">Get <span className="grad">In Touch</span></h1>
          <p className="reveal">
            Need clear market facts? Start the conversation. Tell us your buying or selling goals, and our
            senior team will map out the best path forward.
          </p>
        </div>
      </section>

      {/* ===== DETAILS + FORM ===== */}
      <section id="reach" className="section-light">
        <div className="wrap">
          <div className="c-grid">
            {/* Contact details */}
            <aside className="c-info reveal">
              <div className="ib">
                <div className="l">Call</div>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </div>
              <div className="ib">
                <div className="l">Email</div>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className="ib">
                <div className="l">Visit</div>
                <p>{contact.location}</p>
              </div>
              <div className="ib">
                <div className="l">Connect</div>
                <p>{contact.socials.join(' · ')}</p>
              </div>
              <div className="ib">
                <div className="l">Licensed</div>
                <p className="c-fine">
                  {contact.licence.regulator}
                  <br />
                  {contact.licence.orn} · {contact.licence.ded}
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className="reveal">
              <InquiryForm />
            </div>
          </div>

          {/* Office location map */}
          <div className="c-map reveal">
            <div className="c-map-bar">
              <p className="c-map-addr">
                <span className="c-map-label">Our Office</span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.location}
                </a>
              </p>
              <a
                className="c-map-dir"
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.location)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
              </a>
            </div>
            <iframe
              title={`Earth Link office location — ${contact.location}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(contact.location)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
