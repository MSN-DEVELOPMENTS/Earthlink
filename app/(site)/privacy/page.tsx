import type { Metadata } from 'next';
import { contact } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  alternates: { canonical: '/privacy' },
  description:
    'How Earthlink Real Estate collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 14 }}>Legal</span>
          <h1 className="reveal">Privacy <span className="grad">Policy</span></h1>
          <p className="reveal">
            How we collect, use, and protect the information you share with Earthlink Real Estate.
          </p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="section-light">
        <div className="wrap">
          <div className="legal reveal">
            <p className="legal-meta">Last updated: 30 June 2026</p>

            <p>
              Earthlink Real Estate (&ldquo;ERE&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting your
              privacy. This policy explains what personal information we collect, why we collect it, and the
              choices you have. By using our website or services, you agree to the practices described here.
            </p>

            <h2 className="legal-h2">Information We Collect</h2>
            <p>
              We collect the details you provide directly &mdash; such as your name, email address, phone number,
              and any message you send through our enquiry or newsletter forms. We also collect limited technical
              data automatically, including your IP address, browser type, and the pages you visit, to keep the
              site secure and improve how it works.
            </p>

            <h2 className="legal-h2">How We Use Your Information</h2>
            <p>
              We use your information to respond to enquiries, arrange consultations and viewings, share property
              and market updates you have asked for, and meet our legal and regulatory obligations as a licensed
              Dubai brokerage. We do not sell your personal information.
            </p>

            <h2 className="legal-h2">Sharing Your Information</h2>
            <p>
              We may share your information with trusted service providers who help us operate the business (for
              example, email and hosting providers), and with developers or authorities where this is necessary to
              progress a transaction. We require everyone we share data with to protect it and to use it only for
              the agreed purpose.
            </p>

            <h2 className="legal-h2">Data Retention &amp; Security</h2>
            <p>
              We keep your information only for as long as needed for the purposes above or as required by law, and
              we apply appropriate safeguards to protect it against loss, misuse, and unauthorised access.
            </p>

            <h2 className="legal-h2">Your Rights</h2>
            <p>
              You may ask us to access, correct, or delete the personal information we hold about you, or to stop
              sending you marketing communications. To make a request, contact us using the details below.
            </p>

            <h2 className="legal-h2">Contact Us</h2>
            <p>
              If you have any questions about this policy, email us at{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> or call{' '}
              <a href={contact.phoneHref}>{contact.phone}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
