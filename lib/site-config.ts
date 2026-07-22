/* ==========================================================================
   Earth Link Real Estate — small shared constants
   Split out of lib/data.ts on purpose. Client components (Header, ChatWidget,
   InquiryForm, WhatsApp buttons) need these few values, and importing them from
   lib/data.ts dragged that whole 50KB module — every blog and news article body
   included — into the client bundle of every page. Article bodies are built by
   calling helpers from lib/portable, so the bundler cannot prove they are
   side-effect free and cannot tree-shake them away.

   Keep this file free of imports so it stays cheap to pull into the browser.
   lib/data.ts re-exports everything here, so server-side importers are
   unaffected.
   ========================================================================== */

/* ----- Navigation ------------------------------------------------------- */
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/properties', label: 'Properties' },
  { href: '/developers', label: 'Developers' },
  { href: '/media-center', label: 'Media Center' },
  { href: '/contact', label: 'Contact' },
];

/* ----- Contact details -------------------------------------------------- */
export const contact = {
  phone: '+971 52 870 1177',
  phoneHref: 'tel:+971528701177',
  whatsapp: 'https://wa.me/971528701177',
  email: 'info@eregroup.ae',
  location: '403 - 17 Voco Hotel, Sheikh Zayed Road, Dubai, UAE',
  socials: ['LinkedIn', 'Facebook', 'YouTube', 'Instagram'],
  // Regulatory credentials — replace the placeholder numbers with the real ones.
  licence: {
    regulator: 'Licensed by the Dubai Land Department · RERA',
    orn: 'RERA ORN 00000', // ← real Office Registration Number
    ded: 'DED Licence 000000', // ← real DED trade licence
  },
};

/* ----- Form options ----------------------------------------------------- */
export const inquiryTypes = ['Buy', 'Sell', 'Lease', 'Manage', 'Invest', 'Book a consultation'];
