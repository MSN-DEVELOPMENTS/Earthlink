import type { Metadata } from 'next';
import { faqs } from '@/lib/data';
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
            senior team will map out the best path forward. Review our full working model at{' '}
            <a href="https://www.sharoonirfan.com" target="_blank" rel="noopener noreferrer">www.sharoonirfan.com</a>.
          </p>
        </div>
      </section>

      {/* ===== SEND A MESSAGE ===== */}
      <section id="reach" className="section-light">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: 640, margin: '0 auto' }}>
            <InquiryForm />
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
