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

/* ----- Projects: What We Offer (3) -------------------------------------- */
export const offers = [
  { title: 'Off-Plan', text: 'Early access from Emaar, Sobha, Binghatti, and DAMAC.' },
  { title: 'Ready Homes', text: 'Completed apartments and villas in settled communities.' },
  { title: 'Commercial', text: 'Offices and retail in the right districts.' },
];

/* ----- Projects: Current Selection (property cards) ---------------------
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
};

export const properties: Property[] = [
  {
    slug: 'the-autograph',
    name: 'The Autograph',
    tag: 'Off-Plan',
    location: 'Jumeirah Village Circle',
    type: 'Apartments',
    beds: '1–3',
    area: '640–1,900 sqft',
    price: 'AED 950K',
    ref: 'ERE-1042',
    permit: '7116548',
    img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=80',
    description: [
      'A boutique off-plan address in the heart of Jumeirah Village Circle, built for owners who want a strong entry price without giving up finish or community.',
      'One- to three-bedroom layouts open onto landscaped courtyards, with a pool deck, gym, and retail at podium level. Handover is scheduled with a flexible payment plan across construction.',
    ],
  },
  {
    slug: 'seacrest-by-damac',
    name: 'SeaCrest by DAMAC',
    tag: 'Resort',
    location: 'Dubai Maritime City',
    type: 'Residences',
    beds: 'Studio–3',
    area: '410–1,850 sqft',
    price: 'AED 1.4M',
    ref: 'ERE-1067',
    permit: '6620913',
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1100&q=80',
    description: [
      'Resort-style living on the water at Dubai Maritime City, a short drive from both Downtown and the beach.',
      'Studios through three-bedroom residences come with sea-facing balconies, a beach club, and concierge service — a strong fit for both end-users and short-let investors.',
    ],
  },
  {
    slug: 'marina-waterfront',
    name: 'Marina Waterfront',
    tag: 'Apt & Villas',
    location: 'Dubai Marina',
    type: 'Waterfront',
    beds: '1–4',
    area: '720–2,600 sqft',
    price: 'AED 1.8M',
    ref: 'ERE-1088',
    permit: '7104382',
    img: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=1100&q=80',
    description: [
      'Promenade-front apartments and duplexes in one of Dubai’s most rented postcodes, with steady tenant demand year-round.',
      'Floor-to-ceiling glass frames the marina, and residents share a pool, gym, and direct walkway access to the Walk and the beach.',
    ],
  },
  {
    slug: 'sky-residences',
    name: 'Sky Residences',
    tag: 'Penthouse',
    location: 'Downtown Dubai',
    type: 'Penthouse',
    beds: '2–4',
    area: '1,300–3,400 sqft',
    price: 'AED 3.2M',
    ref: 'ERE-1101',
    permit: '7129640',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=80',
    description: [
      'Upper-floor residences and penthouses with Burj Khalifa and fountain views, in the centre of Downtown Dubai.',
      'Generous two- to four-bedroom layouts, private lift lobbies on select floors, and a five-star amenity deck — a trophy address that holds its value.',
    ],
  },
  {
    slug: 'the-address-villas',
    name: 'The Address Villas',
    tag: 'Villa',
    location: 'Arabian Ranches',
    type: 'Villa',
    beds: '3–5',
    area: '2,900–5,100 sqft',
    price: 'AED 4.5M',
    ref: 'ERE-1123',
    permit: '6655471',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1100&q=80',
    description: [
      'Family villas in the established, green community of Arabian Ranches, with schools, parks, and golf within the gates.',
      'Three- to five-bedroom homes sit on private plots with gardens and maids’ rooms — turnkey ready, ideal for owner-occupiers.',
    ],
  },
  {
    slug: 'palm-signature',
    name: 'Palm Signature',
    tag: 'Beachfront',
    location: 'Palm Jumeirah',
    type: 'Beachfront',
    beds: '2–5',
    area: '1,800–6,200 sqft',
    price: 'AED 6.9M',
    ref: 'ERE-1150',
    permit: '7142208',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1100&q=80',
    description: [
      'Beachfront signature residences on Palm Jumeirah, with private beach access and uninterrupted sea views.',
      'Two- to five-bedroom homes feature wraparound terraces, a residents’ beach club, and direct access to the Palm’s dining and marina scene.',
    ],
  },
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
