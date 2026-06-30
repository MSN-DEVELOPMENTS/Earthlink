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
    text: 'Smart moves for buyers and sellers. We insist on clear pricing, clean paperwork, and strong deals from the first tour to the final handover.',
    icon: 'M3 21h18M5 21V7l8-4 8 4v14M9 21v-5a3 3 0 0 1 6 0v5',
  },
  {
    n: '02',
    title: 'Lease & Rent',
    text: 'Finding the exact right match for your property. We secure terms that protect your investment and ensure steady income.',
    icon: 'M3 11l9-8 9 8M5 10v10h14V10M9 20v-6h6v6',
  },
  {
    n: '03',
    title: 'Property Management',
    text: 'Complete daily control. Rent collection, active upkeep, and clear financial statements you can read in seconds.',
    icon: 'M9 4h6a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v13H5V7a1 1 0 0 1 1-1h2V5a1 1 0 0 1 1-1zM9 13l2 2 4-4',
  },
  {
    n: '04',
    title: 'Invest',
    text: 'Honest advice you can trust. We provide direct data on rental income, costs, and resale value so you can make confident choices.',
    icon: 'M3 17l6-6 4 4 8-8M21 7h-5M21 7v5',
  },
];

/* ----- Home / About: headline stats ------------------------------------- */
export const stats = [
  { big: '10+', lbl: 'Years of proven results' },
  { big: '4', lbl: 'Complete services under one roof' },
  { big: '7+', lbl: 'Prime Dubai areas fully mapped' },
];

/* ----- Home: Communities We Work With (7) ------------------------------- */
export const communities = [
  { name: 'Dubai Marina', note: 'Fast-moving waterfront homes with steady renter demand.', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80' },
  { name: 'Downtown Dubai', note: 'The city centre. Highly walkable properties with direct views of the Burj.', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' },
  { name: 'Business Bay', note: 'The core of business and living. Canal-side spaces with strong rental returns.', img: 'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=600&q=80' },
  { name: 'Palm Jumeirah', note: 'Prime beachfront living. Clean, modern coastal homes and private apartments.', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80' },
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
  { title: 'Off-Plan', text: 'Early access to new builds from Emaar, Sobha, Binghatti, and DAMAC.' },
  { title: 'Ready Homes', text: 'Finished, move-in ready properties in established areas.' },
  { title: 'Commercial', text: 'High-quality office and retail spaces in key business zones.' },
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
  gallery?: string[]; // extra photos for the detail-page gallery
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
  { n: '1', title: 'Discovery', text: 'We map out your budget, timeline, and exact income goals.' },
  { n: '2', title: 'Shortlist', text: 'We share a select few properties, backed up by real market data.' },
  { n: '3', title: 'Viewing', text: 'In-person or video tours focusing on space flow and build quality.' },
  { n: '4', title: 'Close', text: 'Smooth paperwork, legal checks, and quick handover.' },
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
    q: 'What services does Earthlink Real Estate offer?',
    a: 'We are a Dubai-based real estate brokerage helping buyers, sellers, investors, and tenants navigate the property market. Our services include property sales, rentals, investment advisory, and holiday home management.',
  },
  {
    q: 'Can foreigners buy property in Dubai?',
    a: 'Yes. Dubai allows non-UAE nationals to purchase freehold properties in designated areas such as Downtown Dubai, Dubai Marina, Palm Jumeirah, Business Bay, and many more. There are no restrictions on nationality.',
  },
  {
    q: 'What is the process for buying a property in Dubai?',
    a: 'Once you select a property, we guide you through signing the MOU (Memorandum of Understanding), paying the deposit (typically 10%), completing the NOC process, and transferring ownership at the Dubai Land Department (DLD).',
  },
  {
    q: 'How much do I need for a down payment?',
    a: 'For ready properties, UAE residents typically require a minimum 20% down payment, while non-residents require 25%. Off-plan properties often require as little as 5–10% upfront, depending on the developer’s payment plan.',
  },
  {
    q: 'What fees should I budget for beyond the property price?',
    a: 'Standard additional costs include a 4% DLD transfer fee, 2% agency commission, AED 4,000–5,000 for DLD admin and trustee fees, plus mortgage registration fees if applicable.',
  },
  {
    q: 'Is Dubai real estate a good investment?',
    a: 'Dubai consistently ranks among the top global cities for real estate ROI. With no property tax, high rental yields (typically 5–9%), strong capital appreciation, and a growing population, it remains one of the most attractive markets for investors.',
  },
  {
    q: 'What is the difference between freehold and leasehold property?',
    a: 'Freehold means you own the property and the land outright with no time limit. Leasehold means you own the property for a fixed period (usually 10–99 years) but not the land itself. Most prime areas in Dubai offer freehold ownership to all nationalities.',
  },
  {
    q: 'Can I get a mortgage as a non-resident?',
    a: 'Yes, several UAE banks offer mortgages to non-residents, though terms vary. Non-residents typically qualify for up to 75% LTV on properties under AED 5 million. We can connect you with trusted mortgage advisors.',
  },
  {
    q: 'What is an off-plan property and is it safe to buy?',
    a: 'Off-plan properties are sold before or during construction. In Dubai, off-plan purchases are regulated by RERA — developer funds are held in escrow accounts, protecting buyers. They often offer lower entry prices and flexible payment plans.',
  },
  {
    q: 'How do I get started with Earthlink Real Estate?',
    a: 'Simply reach out via our website, WhatsApp, or visit our office. One of our agents will understand your requirements and shortlist properties that match your budget, lifestyle, and investment goals — at no cost to you as a buyer.',
  },
];

/* ----- Form options ----------------------------------------------------- */
export const inquiryTypes = ['Buy', 'Sell', 'Lease', 'Manage', 'Invest', 'Book a consultation'];
export const serviceTypes = ['Buy & Sell', 'Lease & Rent', 'Property Management', 'Invest'];
export const consultants = ['No preference', 'Sales Consultant', 'Leasing Consultant', 'Investment Advisor'];
