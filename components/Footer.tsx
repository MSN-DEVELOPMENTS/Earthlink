import Link from 'next/link';
import { contact } from '@/lib/data';
import NewsletterForm from '@/components/NewsletterForm';

// Social links — replace the "#" placeholders with the real profile URLs.
const socials = [
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.51.01-4.75.07-.9.04-1.39.2-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.32-.28.81-.32 1.71-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.04.9.2 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.12.81.28 1.71.32 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.9-.04 1.39-.2 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.9-.2-1.39-.32-1.71a2.86 2.86 0 0 0-.69-1.06 2.86 2.86 0 0 0-1.06-.69c-.32-.12-.81-.28-1.71-.32-1.24-.06-1.61-.07-4.75-.07Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-.43a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z',
  },
  {
    label: 'X',
    href: '#',
    path: 'M17.5 3h2.9l-6.34 7.25L21.5 21h-5.86l-4.6-6-5.26 6H2.88l6.78-7.75L2.5 3h6l4.15 5.5L17.5 3Zm-1.03 16.2h1.6L7.6 4.7H5.9l10.57 14.5Z',
  },
  {
    label: 'Facebook',
    href: '#',
    path: 'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94Z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.76-1.95C20.6 8.69 22 11.36 22 15.1V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21H9V9Z',
  },
  {
    label: 'YouTube',
    href: '#',
    path: 'M23.5 7.2a3 3 0 0 0-2.12-2.12C19.5 4.57 12 4.57 12 4.57s-7.5 0-9.38.51A3 3 0 0 0 .5 7.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 4.8 3 3 0 0 0 2.12 2.12c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3 3 0 0 0 2.12-2.12A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-4.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z',
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          {/* Left — quick links + social */}
          <div className="foot-col">
            <h2>Quick Links</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/properties">Properties</Link></li>
              <li><Link href="/developers">Developers</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>

            <h2 className="foot-h2-mt">Social Media</h2>
            <div className="foot-social">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Middle — newsletter + contact */}
          <div className="foot-col foot-right">
            <h2>Subscribe to Newsletter</h2>
            <NewsletterForm />

            <h2 className="foot-h2-mt">Office</h2>
            <p className="foot-line">{contact.location}</p>

            <h2 className="foot-h2-mt">Contact</h2>
            <p className="foot-line"><a href={contact.phoneHref}>{contact.phone}</a></p>
            <p className="foot-line"><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          </div>

          {/* Right — brand mark, beside the text */}
          <div className="foot-brand">
            <Link href="/" aria-label="Earthlink Real Estate — home">
              <img src="/logo.png" alt="Earthlink Real Estate" className="foot-logo" />
            </Link>
          </div>
        </div>

        <div className="fbot">
          <span>
            <Link href="/terms">Terms of Use</Link> · <Link href="/privacy">Privacy</Link>
          </span>
          <span>Copyright © 2026 ERE - Earth link Real Estate</span>
        </div>
      </div>
    </footer>
  );
}
