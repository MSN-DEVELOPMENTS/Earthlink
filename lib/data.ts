/* ==========================================================================
   Earthlink Real Estate — site content
   All page copy lives here so it is easy to edit (and later move to a CMS).
   ========================================================================== */

/* ----- Navigation ------------------------------------------------------- */
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/properties', label: 'Properties' },
  { href: '/developers', label: 'Developers' },
  { href: '/contact', label: 'Contact' },
];

/* ----- Contact details -------------------------------------------------- */
export const contact = {
  phone: '+971 52 870 1177',
  phoneHref: 'tel:+971528701177',
  whatsapp: 'https://wa.me/971528701177',
  email: 'info@eregroup.ae',
  location: 'Dubai, United Arab Emirates',
  socials: ['LinkedIn', 'Facebook', 'YouTube', 'Instagram'],
  // Regulatory credentials — replace the placeholder numbers with the real ones.
  licence: {
    regulator: 'Licensed by the Dubai Land Department · RERA',
    orn: 'RERA ORN 00000', // ← real Office Registration Number
    ded: 'DED Licence 000000', // ← real DED trade licence
  },
};

/* ----- Hero search bar options ------------------------------------------ */
export const searchOptions = {
  areas: ['All Areas', 'Dubai Marina', 'Downtown Dubai', 'Business Bay', 'Palm Jumeirah'],
  types: ['Any Type', 'Apartment', 'Villa', 'Off-Plan'],
  beds: ['Any', 'Studio', '1', '2', '3+'],
  prices: ['Any Price', 'Up to 1M', '1M–3M', '3M+'],
};

/* ----- Home: What We Do (4 services) ------------------------------------ */
/* `icon` holds the SVG path data drawn inside each service card. */
export const services = [
  {
    n: '01',
    title: 'Buy & Sell',
    text: 'Clear pricing, clean paperwork, and steady negotiation from the first viewing to handover.',
    icon: 'M3 21h18M5 21V7l8-4 8 4v14M9 21v-5a3 3 0 0 1 6 0v5',
  },
  {
    n: '02',
    title: 'Lease & Rent',
    text: 'The right home for tenants, the right tenant for landlords, on terms that hold.',
    icon: 'M3 11l9-8 9 8M5 10v10h14V10M9 20v-6h6v6',
  },
  {
    n: '03',
    title: 'Property Management',
    text: 'Rent collected, maintenance handled, and statements you can read at a glance.',
    icon: 'M9 4h6a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v13H5V7a1 1 0 0 1 1-1h2V5a1 1 0 0 1 1-1zM9 13l2 2 4-4',
  },
  {
    n: '04',
    title: 'Invest',
    text: 'Honest numbers on yield, charges, and returns, so the decision stays yours to make with confidence.',
    icon: 'M3 17l6-6 4 4 8-8M21 7h-5M21 7v5',
  },
];

/* ----- Home / About: headline stats ------------------------------------- */
export const stats = [
  { big: '10+', lbl: 'Years in market' },
  { big: '4', lbl: 'Services, one roof' },
  { big: '7+', lbl: 'Communities' },
];

/* ----- Home: Communities We Work With (7) ------------------------------- */
export const communities = [
  { name: 'Dubai Marina', note: 'Waterfront living, steady demand', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80' },
  { name: 'Downtown Dubai', note: 'Burj views, walkable, central', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' },
  { name: 'Business Bay', note: 'Canal-side and well connected', img: 'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=600&q=80' },
  { name: 'Palm Jumeirah', note: 'Beachfront homes and apartments', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80' },
  { name: 'Jumeirah Village Circle', note: 'Strong value and yield', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80' },
  { name: 'DIFC', note: 'The finance address, tight supply', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
  { name: 'Arabian Ranches', note: 'Villas, schools, family living', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80' },
];

/* ----- Home: Why Earthlink (checklist) ---------------------------------- */
export const whyEarthlink = [
  'Ten years in the Dubai market',
  'Sales, leasing, and management in one place',
  'Direct access to developer launches',
  'Honest advice at every step',
];

/* ----- Properties: What We Offer (3) ------------------------------------ */
export const offers = [
  { title: 'Off-Plan', text: 'Early access from Emaar, Sobha, Binghatti, and DAMAC.' },
  { title: 'Ready Homes', text: 'Completed apartments and villas in settled communities.' },
  { title: 'Commercial', text: 'Offices and retail in the right districts.' },
];

/* ----- Properties: Current Selection (property cards) -------------------
   ref / permit numbers below are illustrative PLACEHOLDERS — replace with
   real Earthlink listing references and DLD Trakheesi permit numbers. */
export type Property = {
  slug: string;
  name: string;
  tag: string;
  location: string;
  type: string;
  beds: string;
  area: string;
  price: string;
  ref: string;
  permit: string;
  img: string;
  description: string[];
  url?: string; // external listing (e.g. Bayut)
};

export const properties: Property[] = [
  {
    slug: 'belgravia-square-a',
    name: 'Belgravia Square A',
    tag: 'For Rent',
    location: 'Jumeirah Village Circle',
    type: 'Apartment',
    beds: '1 Bed · 2 Bath',
    area: '815 sqft',
    price: 'AED 95,000 / yr',
    ref: 'Bayut 100146-8CgvWb',
    permit: 'On request',
    img: 'https://images.bayut.com/thumbnails/846246546-800x600.jpeg',
    description: [
      'A fully furnished, upgraded one-bedroom, two-bathroom apartment of 815 sqft at Belgravia Square, JVC District 14.',
      'Leased at AED 95,000 yearly and listed exclusively by Earth Link Real Estate. Contact us for the floor plan, amenities, and a viewing.',
    ],
    url: 'https://www.bayut.com/l/IbfFqjQk',
  },
  {
    slug: 'creek-views-2-azizi',
    name: 'Creek Views II by Azizi',
    tag: 'For Rent',
    location: 'Dubai Healthcare City',
    type: 'Apartment',
    beds: '1 Bed · 2 Bath',
    area: '618 sqft',
    price: 'AED 85,000 / yr',
    ref: 'Bayut 100146-M5DAWa',
    permit: 'On request',
    img: 'https://images.bayut.com/thumbnails/846678357-800x600.jpeg',
    description: [
      'An upgraded, fully furnished one-bedroom, two-bathroom apartment of 618 sqft at Creek Views II by Azizi (Azizi Fawad Residence), Dubai Healthcare City Phase 2, Al Jaddaf.',
      'Available at AED 85,000 yearly and listed exclusively by Earth Link Real Estate. Ask us for the floor plan, amenities, and a viewing.',
    ],
    url: 'https://www.bayut.com/property/details-15564104.html',
  },
  {
    slug: 'downtown-views-2-tower-3',
    name: 'Downtown Views II, Tower 3',
    tag: 'For Rent',
    location: 'Downtown Dubai',
    type: 'Apartment',
    beds: '1 Bed · 2 Bath',
    area: '774 sqft',
    price: 'AED 130,000 / yr',
    ref: 'Bayut 100146-QgzRsP',
    permit: 'On request',
    img: 'https://images.bayut.com/thumbnails/846846129-800x600.jpeg',
    description: [
      'A fully furnished one-bedroom, two-bathroom apartment of 774 sqft in Downtown Views II, Tower 3 (Za’abeel) — moments from the Burj Khalifa, Dubai Mall, and the fountain.',
      'Move-in ready and leased at AED 130,000 yearly. Listed exclusively by Earth Link Real Estate — contact us to arrange a viewing.',
    ],
    url: 'https://www.bayut.com/property/details-15568554.html',
  },
];

/* ----- Properties: How We Match You (4 steps) --------------------------- */
export const matchSteps = [
  { n: '1', title: 'Discovery', text: 'We learn your budget and goals.' },
  { n: '2', title: 'Shortlist', text: 'A few strong options, backed by numbers.' },
  { n: '3', title: 'Viewing', text: 'Tours in person or on video.' },
  { n: '4', title: 'Close', text: 'Paperwork and handover, handled.' },
];

/* ----- Blog: categories (What You Will Find) ---------------------------- */
export const blogCategories = [
  { title: 'Market Intelligence', text: 'Prices, yields, and demand, explained.' },
  { title: 'Neighbourhood Guides', text: 'Schools, commutes, and lifestyle by area.' },
  { title: 'Investor Notes', text: 'Yield, strategy, and the costs that matter.' },
  { title: 'Buyer & Tenant Guides', text: 'Each step, in plain order.' },
];

/* ----- Blog: posts ------------------------------------------------------ */
export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  img: string;
  body: string[];
};

// No posts published yet — add real articles here when ready.
export const posts: Post[] = [];

/* ----- Testimonials ----------------------------------------------------- */
export const testimonials = [
  {
    quote:
      'Straight answers from the first call. They showed us the trade-offs on every option and never pushed. We bought with total confidence.',
    initials: 'AR',
    name: 'Aisha R.',
    role: 'Bought in Downtown Dubai',
  },
  {
    quote:
      'My rental is fully managed — rent collected, maintenance handled, clear statements every month. I barely have to think about it.',
    initials: 'JM',
    name: 'James M.',
    role: 'Landlord, Dubai Marina',
  },
  {
    quote:
      'As an overseas investor the honest numbers mattered most. Real yields, real charges, no surprises. Exactly what I needed.',
    initials: 'SK',
    name: 'Sara K.',
    role: 'Investor, Business Bay',
  },
];

/* ----- FAQ -------------------------------------------------------------- */
export const faqs = [
  {
    q: 'Can foreigners buy property in Dubai?',
    a: 'Yes. Non-residents can buy freehold property in designated areas across Dubai, including most of the communities we cover. We guide you through eligibility, paperwork and the full purchase process.',
  },
  {
    q: 'What fees should I budget beyond the price?',
    a: 'Typically a 4% Dubai Land Department transfer fee, agency commission, and any developer or service charges. We lay out every figure for your specific deal before you commit — no surprises.',
  },
  {
    q: 'Do you handle off-plan and ready properties?',
    a: 'Both. We offer early off-plan access from Emaar, Sobha, Binghatti and DAMAC, alongside completed apartments and villas in settled communities.',
  },
  {
    q: 'Can you manage my property after I buy?',
    a: 'Yes. Our property management covers rent collection, maintenance and clear monthly statements, so your asset keeps performing well past handover.',
  },
  {
    q: 'How quickly will someone get back to me?',
    a: 'Within one business day. Send us your goal through the form and a consultant who fits it will take it from the first message.',
  },
];

/* ----- Form options ----------------------------------------------------- */
export const inquiryTypes = ['Buy', 'Sell', 'Lease', 'Manage', 'Invest', 'Book a consultation'];
export const serviceTypes = ['Buy & Sell', 'Lease & Rent', 'Property Management', 'Invest'];
export const consultants = ['No preference', 'Sales Consultant', 'Leasing Consultant', 'Investment Advisor'];
