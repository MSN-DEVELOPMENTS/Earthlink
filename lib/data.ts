/* ==========================================================================
   Earthlink Real Estate — site content
   All page copy lives here so it is easy to edit (and later move to a CMS).
   ========================================================================== */

/* ----- Navigation ------------------------------------------------------- */
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

/* ----- Contact details -------------------------------------------------- */
export const contact = {
  phone: '+971 52 870 1177',
  phoneHref: 'tel:+971528701177',
  whatsapp: 'https://wa.me/971528701177',
  email: 'info@earthlink.ae',
  location: 'Dubai, United Arab Emirates',
  socials: ['LinkedIn', 'Facebook', 'YouTube', 'Instagram'],
};

/* ----- Home: What We Do (4 services) ------------------------------------ */
export const services = [
  {
    n: '01',
    title: 'Buy & Sell',
    text: 'Clear pricing, clean paperwork, and steady negotiation from the first viewing to handover.',
  },
  {
    n: '02',
    title: 'Lease & Rent',
    text: 'The right home for tenants, the right tenant for landlords, on terms that hold.',
  },
  {
    n: '03',
    title: 'Property Management',
    text: 'Rent collected, maintenance handled, and statements you can read at a glance.',
  },
  {
    n: '04',
    title: 'Invest',
    text: 'Honest numbers on yield, charges, and returns, so the decision stays yours to make with confidence.',
  },
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

/* ----- Projects: What We Offer (3) -------------------------------------- */
export const offers = [
  { title: 'Off-Plan', text: 'Early access from Emaar, Sobha, Binghatti, and DAMAC.' },
  { title: 'Ready Homes', text: 'Completed apartments and villas in settled communities.' },
  { title: 'Commercial', text: 'Offices and retail in the right districts.' },
];

/* ----- Projects: Current Selection (table) ------------------------------ */
export const projects = [
  { name: 'The Autograph', type: '1 to 3 Bed', community: 'Jumeirah Village Circle', from: 'On request' },
  { name: 'SeaCrest by DAMAC', type: 'Resort Residences', community: 'Dubai Maritime City', from: 'On request' },
  { name: 'Marina Waterfront', type: 'Apartments & Villas', community: 'Dubai Marina', from: 'On request' },
];

/* ----- Projects: How We Match You (4 steps) ----------------------------- */
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

export const posts: Post[] = [
  {
    slug: 'dubai-prices-and-yields',
    title: 'Prices and yields: where the numbers are heading',
    category: 'Market Intelligence',
    excerpt: 'A clear read on pricing, supply, and rental yield across Dubai’s main communities.',
    img: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=900&q=80',
    body: [
      'The Dubai market moves quickly, and the headline numbers rarely tell the full story. What matters is how pricing, supply, and rental yield line up community by community.',
      'In established waterfront areas demand stays steady, which supports both resale values and rents. In newer districts, value and yield can be stronger, but supply needs watching.',
      'Our approach is simple: real figures, kept current, with the trade-offs laid out so the decision stays yours to make.',
    ],
  },
  {
    slug: 'neighbourhood-guide-schools-and-lifestyle',
    title: 'Schools and lifestyle: what each area feels like',
    category: 'Neighbourhood Guides',
    excerpt: 'Schools, commutes, and daily life across the communities we know best.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    body: [
      'Choosing a community is about more than price. Schools, commutes, and the rhythm of daily life shape how a home actually feels to live in.',
      'Family buyers often weigh villa communities with strong schools, while professionals lean toward walkable, central districts close to work.',
      'We map each area honestly, so you know what to expect before you commit.',
    ],
  },
  {
    slug: 'investor-notes-yield-and-strategy',
    title: 'Yield and strategy: the costs that matter',
    category: 'Investor Notes',
    excerpt: 'The charges and assumptions that decide whether an investment really performs.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
    body: [
      'Gross yield is an easy number to quote, but net return is the one that matters. Service charges, vacancy, and management costs all shape the result.',
      'We share honest numbers on yield, charges, and returns, so the decision stays yours to make with confidence.',
      'A good investment is one you understand fully before you sign.',
    ],
  },
  {
    slug: 'buyer-guide-step-by-step',
    title: 'Step by step: first viewing to keys',
    category: 'Buyer & Tenant Guides',
    excerpt: 'The buying journey in plain order, from discovery to handover.',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
    body: [
      'Buying property in Dubai follows a clear path: discovery, shortlist, viewing, and close. Knowing each step removes most of the stress.',
      'We learn your budget and goals first, bring a few strong options backed by numbers, arrange viewings in person or on video, and handle the paperwork and handover.',
      'The market can feel complicated, so we keep your part of it clear at every step.',
    ],
  },
];

/* ----- Form options ----------------------------------------------------- */
export const inquiryTypes = ['Buy', 'Sell', 'Lease', 'Manage', 'Invest'];
export const serviceTypes = ['Buy & Sell', 'Lease & Rent', 'Property Management', 'Invest'];
export const consultants = ['No preference', 'Sales Consultant', 'Leasing Consultant', 'Investment Advisor'];
