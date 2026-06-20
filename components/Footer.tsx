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
            <h5>Explore</h5>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5>Services</h5>
            <ul>
              <li><Link href="/#services">Buy &amp; Sell</Link></li>
              <li><Link href="/#services">Lease &amp; Rent</Link></li>
              <li><Link href="/#services">Management</Link></li>
              <li><Link href="/#services">Invest</Link></li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href={contact.phoneHref}>{contact.phone}</a></li>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li>Dubai, UAE</li>
            </ul>
          </div>
        </div>

        <div className="fbot">
          <span>© 2026 Earthlink Real Estate. Backed by ERE. Dubai, UAE.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
