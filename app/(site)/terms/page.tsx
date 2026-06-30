import type { Metadata } from 'next';
import { contact } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Terms of Use',
  alternates: { canonical: '/terms' },
  description:
    'The terms that govern your use of the Earthlink Real Estate website.',
};

export default function TermsPage() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 14 }}>Legal</span>
          <h1 className="reveal">Terms <span className="grad">of Use</span></h1>
          <p className="reveal">
            The terms that govern your use of the Earthlink Real Estate website.
          </p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="section-light">
        <div className="wrap">
          <div className="legal reveal">
            <p className="legal-meta">Last updated: 30 June 2026</p>

            <p>
              These Terms of Use govern your access to and use of the Earthlink Real Estate (&ldquo;ERE&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;) website. By using this site, you agree to these terms. If you do
              not agree, please do not use the site.
            </p>

            <h2 className="legal-h2">Use of the Site</h2>
            <p>
              You may use this site for lawful, personal, and informational purposes only. You agree not to misuse
              the site, attempt to gain unauthorised access, or interfere with its normal operation.
            </p>

            <h2 className="legal-h2">Property Information</h2>
            <p>
              Property listings, prices, availability, and market data are provided for general guidance and may
              change without notice. They do not constitute an offer or a contract. Always confirm details with our
              team before making any decision or commitment.
            </p>

            <h2 className="legal-h2">Intellectual Property</h2>
            <p>
              All content on this site &mdash; including text, images, logos, and branding &mdash; belongs to ERE or
              its licensors and is protected by applicable laws. You may not copy, reproduce, or distribute it
              without our prior written permission.
            </p>

            <h2 className="legal-h2">Third-Party Links</h2>
            <p>
              This site may link to third-party websites. We are not responsible for the content, accuracy, or
              practices of those sites and provide such links for convenience only.
            </p>

            <h2 className="legal-h2">Limitation of Liability</h2>
            <p>
              The site is provided on an &ldquo;as is&rdquo; basis. To the fullest extent permitted by law, ERE is
              not liable for any loss or damage arising from your use of, or reliance on, the site or its content.
            </p>

            <h2 className="legal-h2">Governing Law</h2>
            <p>
              These terms are governed by the laws of the United Arab Emirates, and any dispute will be subject to
              the exclusive jurisdiction of the courts of Dubai.
            </p>

            <h2 className="legal-h2">Contact Us</h2>
            <p>
              For questions about these terms, email us at{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a> or call{' '}
              <a href={contact.phoneHref}>{contact.phone}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
