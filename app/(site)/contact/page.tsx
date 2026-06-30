import type { Metadata } from 'next';
import { contact, faqs } from '@/lib/data';
import InquiryForm from '@/components/InquiryForm';

export const metadata: Metadata = {
  title: 'Contact',
  alternates: { canonical: '/contact' },
  description: 'Get in touch with Earthlink. Send a message or book a consultation with a Dubai property consultant.',
};

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
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 42 }}>
            <span className="eyebrow">Questions</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>FAQ</h2>
          </div>
          <div className="faq reveal">
            {faqs.map((item, i) => (
              <details key={item.q} open={i === 0}>
                <summary>{item.q}</summary>
                <div className="ans">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
