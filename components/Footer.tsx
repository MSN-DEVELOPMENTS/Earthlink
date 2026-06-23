import Link from 'next/link';
import { contact } from '@/lib/data';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <Link href="/" className="logo">
              <span className="mark">E</span>Earthlink
            </Link>
            <p className="muted" style={{ fontSize: '.9rem', marginTop: 14, maxWidth: 260 }}>
              A Dubai brokerage backed by ERE.
            </p>
          </div>

          <div>
            <h2>Explore</h2>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/properties">Properties</Link></li>
              <li><Link href="/developers">Developers</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2>Services</h2>
            <ul>
              <li><Link href="/#services">Buy &amp; Sell</Link></li>
              <li><Link href="/#services">Lease &amp; Rent</Link></li>
              <li><Link href="/#services">Management</Link></li>
              <li><Link href="/#services">Invest</Link></li>
            </ul>
          </div>

          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href={contact.phoneHref}>{contact.phone}</a></li>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li>Dubai, UAE</li>
            </ul>
          </div>
        </div>

        <div className="fbot">
          <span>© 2026 Earthlink Real Estate. Backed by ERE. Dubai, UAE.</span>
          <span>{contact.licence.regulator} · {contact.licence.orn} · {contact.licence.ded}</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
