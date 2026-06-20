import type { Metadata } from 'next';
import { contact } from '@/lib/data';
import InquiryForm from '@/components/InquiryForm';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Contact — Earthlink Real Estate',
  description: 'Get in touch with Earthlink. Send a message or book a consultation with a Dubai property consultant.',
};

export default function ContactPage() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 14 }}>Contact</span>
          <h1 className="reveal">Get <span className="grad">in Touch</span></h1>
          <p className="reveal">
            A question about buying, leasing, or investing in Dubai? Start here, and a consultant takes it
            from the first message.
          </p>
        </div>
      </section>

      {/* ===== DETAILS + FORMS ===== */}
      <section id="reach" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="c-grid">
            {/* Contact details */}
            <div className="reveal">
              <div className="ib">
                <div className="l">Call Us</div>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </div>
              <div className="ib">
                <div className="l">Email Us</div>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className="ib">
                <div className="l">Visit Us</div>
                <p>{contact.location}</p>
              </div>
              <div className="ib">
                <div className="l">Connect</div>
                <p className="muted" style={{ fontSize: '.95rem' }}>{contact.socials.join(' · ')}</p>
              </div>
            </div>

            {/* Forms */}
            <div className="reveal">
              <div className="contact-forms" style={{ marginTop: 0 }}>
                <InquiryForm />
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
