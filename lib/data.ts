/* ==========================================================================
   Earth Link Real Estate — site content
   All page copy lives here so it is easy to edit (and later move to a CMS).
   ========================================================================== */

import { p, h2, li, liLead, pLink, type Block } from '@/lib/portable';

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

/* ----- Hero search bar options ------------------------------------------ */
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
/* `pos` is an optional object-position for the card image crop (defaults to center). */
export const communities: { name: string; note: string; img: string; pos?: string }[] = [
  { name: 'Dubai Islands', note: 'Fast-moving waterfront homes with steady renter demand.', img: '/home/dubai-islands.jpg', pos: 'center top' },
  { name: 'Palm Jebel Ali', note: 'The city centre. Highly walkable properties with direct views of the Burj.', img: '/home/downtown-dubai.jpg', pos: 'center top' },
  { name: 'The Oasis', note: 'The core of business and living. Canal-side spaces with strong rental returns.', img: '/home/business-bay.jpg', pos: 'center top' },
  { name: 'Rashid Yachts & Marina', note: 'Prime beachfront living. Clean, modern coastal homes and private apartments.', img: '/home/rashid-yachts-marina.jpg', pos: 'center top' },
  { name: 'Business Bay', note: 'The core of business and living. Canal-side spaces with strong rental returns.', img: '/home/business-bay-skyline.jpg', pos: 'center top' },
  { name: 'Dubai South', note: 'Villas, schools, family living', img: '/home/dubai-south.jpg', pos: 'center top' },
  { name: 'Dubai Creek Harbour', note: 'The finance address, tight supply', img: '/home/dubai-creek-harbour.jpg', pos: 'center top' },
  { name: 'Jumeirah Village Circle (JVC)', note: 'Strong value and yield', img: '/home/jvc.jpg', pos: 'center top' },
];

/* ----- Properties: What We Offer (3) ------------------------------------ */
export const offers = [
  { title: 'Off-Plan', text: 'Early access to new builds from Emaar, Sobha, Binghatti, and DAMAC.' },
  { title: 'Ready Homes', text: 'Finished, move-in ready properties in established areas.' },
  { title: 'Commercial', text: 'High-quality office and retail spaces in key business zones.' },
];

/* ----- Properties: Current Selection (property cards) -------------------
   ref / permit numbers below are illustrative PLACEHOLDERS — replace with
   real Earth Link listing references and DLD Trakheesi permit numbers. */
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
  permitUrl?: string; // DLD Trakheesi permit validation URL (encoded in the property QR)
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
    price: 'AED 85,000 / yr',
    ref: 'Bayut 100146-8CgvWb',
    permit: '71236848097',
    img: 'https://images.bayut.com/thumbnails/846246546-800x600.jpeg',
    description: [
      'A fully furnished, upgraded one-bedroom apartment of 815 sqft at Belgravia Square, JVC District 14, Jumeirah Village Circle.',
      'Leased at AED 85,000 yearly and listed exclusively by Earth Link Real Estate. Contact us for the floor plan, amenities, and a viewing.',
    ],
    url: 'https://www.bayut.com/property/details-15541164.html',
    permitUrl: 'https://trakheesi.dubailand.gov.ae/rev/madmoun/listing/validation?khevJujtDig=vmhohzzpk3yj74imx8o31tf2k6fsb0c6eeefxrkehatfzjvcv',
  },
  {
    slug: 'expo-golf-villas-parkside-2',
    name: 'Expo Golf Villas 2 — Parkside 2',
    tag: 'For Rent',
    location: 'Emaar South, Dubai South',
    type: 'Villa',
    beds: '4 Bed · 4 Bath',
    area: '2,552 sqft',
    price: 'AED 155,000 / yr',
    ref: 'Bayut #15646436',
    permit: '69234394963',
    img: 'https://images.bayut.com/thumbnails/848441706-800x600.jpeg',
    description: [
      'A bright and spacious four-bedroom villa of 2,552 sqft built-up on a 2,736 sqft plot at Expo Golf Villas 2 (Parkside 2), Emaar South.',
      'Available at AED 155,000 yearly and listed by Earth Link Real Estate. Contact us for the floor plan, community amenities, and a viewing.',
    ],
    url: 'https://www.bayut.com/property/details-15646436.html',
    permitUrl: 'https://trakheesi.dubailand.gov.ae/rev/madmoun/listing/validation?khevJujtDig=oz3nnvof7wumtp4chmxzzp2q7a45ti6b3msmoltjtjzbcgvia',
  },
  {
    slug: 'd1-tower-culture-village',
    name: 'D1 Tower — Culture Village',
    tag: 'For Sale',
    location: 'Culture Village (Jaddaf Waterfront)',
    type: 'Apartment',
    beds: '1 Bed · 1 Bath',
    area: '1,038 sqft',
    price: 'AED 1,800,000',
    ref: 'Bayut #15626304',
    permit: '7117527736',
    img: 'https://images.bayut.com/thumbnails/848040673-800x600.jpeg',
    description: [
      'A luxury one-bedroom apartment of 1,038 sqft on the highest floor of D1 Tower, Culture Village (Jaddaf Waterfront), with a full Dubai Creek view.',
      'For sale at AED 1,800,000 and listed by Earth Link Real Estate. Contact us for the floor plan, amenities, and a viewing.',
    ],
    url: 'https://www.bayut.com/property/details-15626304.html',
    permitUrl: 'https://trakheesi.dubailand.gov.ae/rev/madmoun/listing/validation?khevJujtDig=cxkeypyn191gatqjujljkfmmjz65nn1aq18jxrcvnadflrrkk',
  },
  {
    slug: 'azizi-plaza-al-furjan',
    name: 'Azizi Plaza — Al Furjan',
    tag: 'For Rent',
    location: 'Al Furjan',
    type: 'Apartment',
    beds: '2 Bed · 3 Bath',
    area: '1,070 sqft',
    price: 'AED 85,000 / yr',
    ref: 'Bayut #15623358',
    permit: '7136350948',
    img: 'https://images.bayut.com/thumbnails/848040728-800x600.jpeg',
    description: [
      'A spacious two-bedroom, ready-to-move apartment of 1,070 sqft on a high floor at Azizi Plaza, Al Furjan, with an open city view.',
      'Available at AED 85,000 yearly and listed by Earth Link Real Estate. Contact us for the floor plan, amenities, and a viewing.',
    ],
    url: 'https://www.bayut.com/property/details-15623358.html',
    permitUrl: 'https://trakheesi.dubailand.gov.ae/rev/madmoun/listing/validation?khevJujtDig=sptcdfh4yi2t9ooz3rscx21wcigw664wfjzefqrmwitkbwxae',
  },
  {
    slug: 'rosehill-dubai-hills-estate',
    name: 'Rosehill — Dubai Hills Estate',
    tag: 'For Sale',
    location: 'Dubai Hills Estate',
    type: 'Apartment',
    beds: '1 Bed · 1 Bath',
    area: '767 sqft',
    price: 'AED 1,707,888',
    ref: 'Bayut #15632517',
    permit: '71774343387',
    img: 'https://images.bayut.com/thumbnails/848128323-800x600.jpeg',
    description: [
      'A luxury one-bedroom apartment of 767 sqft with a spacious layout at Rosehill, Dubai Hills Estate — a premium, family-focused community.',
      'For sale at AED 1,707,888 and listed by Earth Link Real Estate. Contact us for the floor plan, amenities, and a viewing.',
    ],
    url: 'https://www.bayut.com/property/details-15632517.html',
    permitUrl: 'https://trakheesi.dubailand.gov.ae/rev/madmoun/listing/validation?khevJujtDig=n4m2owwuo1urbg35acarn6cr7q6077yfqq35mzefhjlhbyklt',
  },
  {
    slug: 'creek-views-2-azizi',
    name: 'Creek Views II by Azizi',
    tag: 'For Rent',
    location: 'Dubai Healthcare City',
    type: 'Apartment',
    beds: '1 Bed · 2 Bath',
    area: '618 sqft',
    price: 'AED 75,000 / yr',
    ref: 'Bayut 100146-M5DAWa',
    permit: '71227265981',
    img: 'https://images.bayut.com/thumbnails/846678357-800x600.jpeg',
    description: [
      'An upgraded, fully furnished one-bedroom apartment of 618 sqft at Creek Views II by Azizi (Azizi Fawad Residence), Dubai Healthcare City Phase 2, Al Jaddaf.',
      'Available at AED 75,000 yearly and listed exclusively by Earth Link Real Estate. Ask us for the floor plan, amenities, and a viewing.',
    ],
    url: 'https://www.bayut.com/property/details-15564104.html',
    permitUrl: 'https://trakheesi.dubailand.gov.ae/rev/madmoun/listing/validation?khevJujtDig=yojyzguwwle6vi0q4hwwqdlnsk57zjjjb5cibbbfbcwnolisr',
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
    permit: '7180684414',
    img: 'https://images.bayut.com/thumbnails/846846129-800x600.jpeg',
    description: [
      'A fully furnished one-bedroom apartment of 774 sqft in Downtown Views II, Tower 3 (Za’abeel) — moments from the Burj Khalifa, Dubai Mall, and the fountain.',
      'Move-in ready and leased at AED 130,000 yearly. Listed exclusively by Earth Link Real Estate — contact us to arrange a viewing.',
    ],
    url: 'https://www.bayut.com/property/details-15568554.html',
    permitUrl: 'https://trakheesi.dubailand.gov.ae/rev/madmoun/listing/validation?khevJujtDig=f15e8fje68k9wmmz1cz1h1i0et6zlqv81lmjbbejvzcpksstf',
  },
  {
    slug: 'azizi-riviera-29-meydan',
    name: 'Azizi Riviera 29 — Meydan One',
    tag: 'For Rent',
    location: 'Meydan One, Meydan',
    type: 'Studio',
    beds: 'Studio · 1 Bath',
    area: '362 sqft',
    price: 'AED 48,000 / yr',
    ref: 'Bayut #15596003',
    permit: '71228955245',
    img: 'https://images.bayut.com/thumbnails/848040714-800x600.jpeg',
    description: [
      'A fully furnished, ready-to-move studio of 362 sqft with a pool view at Azizi Riviera 29, Meydan One, Meydan.',
      'Available at AED 48,000 yearly and listed by Earth Link Real Estate. Contact us for the floor plan, amenities, and a viewing.',
    ],
    url: 'https://www.bayut.com/property/details-15596003.html',
    permitUrl: 'https://trakheesi.dubailand.gov.ae/rev/madmoun/listing/validation?khevJujtDig=qp8zcdze07qibo1ej7dxdnmpimnn74og7bhzpxnpouzvassyp',
  },
  {
    slug: 'azizi-riviera-26-meydan',
    name: 'Azizi Riviera 26 — Meydan One',
    tag: 'For Sale',
    location: 'Meydan One, Meydan',
    type: 'Studio',
    beds: 'Studio · 1 Bath',
    area: '322 sqft',
    price: 'AED 600,000',
    ref: 'Bayut 100146-sFs5NZ',
    permit: '71235280749',
    img: 'https://images.bayut.com/thumbnails/848964430-800x600.jpeg',
    description: [
      'A premium furnished studio of 322 sqft with a balcony at Azizi Riviera 26, Meydan One, Meydan.',
      'For sale at AED 600,000 and listed by Earth Link Real Estate. Contact us for the floor plan, amenities, and a viewing.',
    ],
    url: 'https://www.bayut.com/property/details-15671768.html',
    permitUrl: 'https://trakheesi.dubailand.gov.ae/rev/madmoun/listing/validation?khevJujtDig=8wfx85s4h34mz70iwp8yt3wdpyvgflkmpqihyqtkbozcdmwjk',
  },
  {
    slug: 'the-autograph-i-series-jvc',
    name: 'The Autograph I Series — JVC',
    tag: 'For Sale',
    location: 'Jumeirah Village Circle',
    type: 'Penthouse',
    beds: '1 Bed · 2 Bath',
    area: '824 sqft',
    price: 'AED 1,500,000',
    ref: 'Bayut 100146-S0DUt1',
    permit: '71680438129',
    img: 'https://images.bayut.com/thumbnails/850500091-800x600.jpeg',
    description: [
      'A furnished luxury penthouse of 824 sqft at The Autograph I Series, JVC District 13, Jumeirah Village Circle — contemporary architecture with premium finishes, an open-plan living space, and a private terrace.',
      'For sale at AED 1,500,000 and listed by Earth Link Real Estate. Contact us for the floor plan, amenities, and a viewing.',
    ],
    url: 'https://www.bayut.com/property/details-15746544.html',
    permitUrl: 'https://trakheesi.dubailand.gov.ae/rev/madmoun/listing/validation?khevJujtDig=afdstjshtgat30jpzjbzuamey36qsrbfoqwtjwrevzwfjulbt',
  },
  {
    slug: 'damac-riverside-sage',
    name: 'DAMAC Riverside — SAGE',
    tag: 'For Sale',
    location: 'Dubai Investments Park (DIP)',
    type: 'Villa',
    beds: '4 Bed · 5 Bath',
    area: '1,566 sqft',
    price: 'AED 2,950,000',
    ref: 'Bayut 100146-mj0kG0',
    permit: '69631397685',
    img: 'https://images.bayut.com/thumbnails/850500012-800x600.jpeg',
    description: [
      'A modern four-bedroom family villa of 1,566 sqft at SAGE, DAMAC Riverside, Dubai Investments Park 2 (DIP) — spacious interiors, high-quality finishes, and a private garden within a resort-style community.',
      'For sale at AED 2,950,000 and listed by Earth Link Real Estate. Contact us for the floor plan, community amenities, and a viewing.',
    ],
    url: 'https://www.bayut.com/property/details-15744724.html',
    permitUrl: 'https://trakheesi.dubailand.gov.ae/rev/madmoun/listing/validation?khevJujtDig=btp64aivgien24txisbytsvf1txlp5jkrip6bpsezxinohmrl',
  },
  {
    slug: 'damac-riverside-ivy',
    name: 'DAMAC Riverside — IVY',
    tag: 'For Sale',
    location: 'Dubai Investments Park (DIP)',
    type: 'Villa',
    beds: '4 Bed · 5 Bath',
    area: '1,550 sqft',
    price: 'AED 2,742,000',
    ref: 'Bayut 100146-9BRIrD',
    permit: '69631245553',
    img: 'https://images.bayut.com/thumbnails/850191416-800x600.jpeg',
    description: [
      'An elegant four-bedroom villa of 1,550 sqft at Ivy, DAMAC Riverside, Dubai Investments Park (DIP) — contemporary architecture with an open-plan kitchen, floor-to-ceiling windows, and a private garden in a waterfront community.',
      'For sale at AED 2,742,000 and listed by Earth Link Real Estate. Contact us for the floor plan, amenities, and a viewing.',
    ],
    url: 'https://www.bayut.com/property/details-15736977.html',
    permitUrl: 'https://trakheesi.dubailand.gov.ae/rev/madmoun/listing/validation?khevJujtDig=1brjz59hpk98pdn3d3su4nd4slgv4so5891vnwgawtsmhvzkv',
  },
  {
    slug: 'damac-islands-tahiti-2',
    name: 'DAMAC Islands — Tahiti 2',
    tag: 'For Sale',
    location: 'DAMAC Islands',
    type: 'Residential Plot',
    beds: '—',
    area: '1,550 sqft',
    price: 'AED 2,800,000',
    ref: 'Bayut 100146-IFD4eA',
    permit: '65697006990',
    img: 'https://images.bayut.com/thumbnails/850500060-800x600.jpeg',
    description: [
      'A premium residential villa plot of 1,550 sqft at Tahiti 2, DAMAC Islands Phase 2 — a gated waterfront community with crystal lagoons, resort-style landscaping, and freehold ownership.',
      'For sale at AED 2,800,000 and listed by Earth Link Real Estate. Contact us for the master plan, amenities, and full documentation.',
    ],
    url: 'https://www.bayut.com/property/details-15746998.html',
    permitUrl: 'https://trakheesi.dubailand.gov.ae/rev/madmoun/listing/validation?khevJujtDig=035uum30xwwclukn0k59p6mobru9hef484u5ibtmyhdnypzbb',
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
export type Faq = { question: string; answer: string };

export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  seoTitle?: string;
  metaDescription?: string;
  img: string;            // cover image URL
  imageAlt?: string;
  publishedAt?: string;   // ISO date
  body: Block[];          // Portable Text (same shape Sanity produces)
  faqs?: Faq[];
};

/* Built-in articles. These render whenever Sanity is not connected; once it is,
   posts written in the Studio take over (see lib/blog.ts). */
export const posts: Post[] = [
  {
    slug: 'dubai-real-estate-market-report-2026',
    title: 'Dubai Real Estate Market Report 2026: Outlook, Trends and Forecast',
    category: 'Market Intelligence',
    excerpt:
      'Dubai real estate hit AED 252 billion in Q1 2026, up 31%. The latest market trends, price data, rental outlook, and 2026–2027 forecast from DLD, ValuStrat, and Knight Frank.',
    seoTitle: 'Dubai Real Estate Market Report 2026: Outlook, Trends, Forecast',
    metaDescription:
      'Dubai real estate hit AED 252 billion in Q1 2026, up 31%. Get the latest market trends, price data, rental outlook, and 2026 to 2027 forecast from DLD, ValuStrat, and Knight Frank.',
    img: '/blog/dubai-market-report-2026.jpg',
    imageAlt: 'Dubai Marina skyline at sunset with a vivid pink sky reflected on the water',
    publishedAt: '2026-06-30T10:00:00Z',
    body: [
      p("Dubai's real estate market entered the second half of 2026 from a position of strength. First-quarter transactions reached AED 252 billion, up 31% year-on-year, according to the Dubai Land Department. Price growth is now moderating from its 2025 peak, and most research firms expect single-digit gains for the full year."),
      p('This report reflects data available as of mid-2026. It covers transaction activity, price trends, rents, supply, and what the leading research houses forecast for the rest of the year and into 2027.'),

      h2('Dubai Real Estate Market at a Glance: H1 2026'),
      p('The headline numbers from the first quarter set the tone for the year. The Dubai Land Department reported the following for Q1 2026:'),
      li('Total transaction value of AED 252 billion, a 31% year-on-year increase and the highest first-quarter figure on record.'),
      li('60,303 transactions, up 6% year-on-year by volume.'),
      li("January 2026 alone hit AED 72.4 billion, the single most valuable month in Dubai's property history."),
      li('Foreign investment of AED 148.35 billion, up 26%, across 48,445 deals.'),
      li('Luxury real estate investment of AED 87.71 billion, up 26%.'),
      li('29,312 new investors, a 14% increase, pointing to a widening buyer base rather than a small pool of repeat capital.'),
      p('The story underneath those figures is a market that is maturing, not slowing. Volume eased from the record pace of late 2025, but value held firm. Buyers are spending more per transaction.'),

      h2('Sales Trends: Off-Plan Still Leads'),
      p('Off-plan property remains the engine of the market. In Q1 2026, off-plan accounted for around 72% of all residential transactions, according to Savills. By value, off-plan made up roughly 75% of the residential total, with AED 103.4 billion across 32,608 deals.'),
      p('This is a structural shift, not a one-quarter spike. Off-plan transaction volumes have grown around 80% over three years, rising from 18,071 deals in Q1 2023 to 32,608 in Q1 2026. Flexible payment plans, developer incentives, and investor demand for new launches continue to drive that preference.'),
      p('The ready, or secondary, market has stayed steadier and smaller, running at around 11,000 to 15,000 transactions per quarter since 2023. This is the part of the market most exposed to price sensitivity and financing conditions.'),
      p('One number deserves context. Residential transaction volume fell around 17% from the fourth quarter of 2025 to the first quarter of 2026. That looks alarming in isolation. It is not. The comparison base was the strongest three quarters in Dubai’s history, each clearing 50,000 transactions. A market running slightly below its own record is still outperforming almost every other major property market globally.'),

      h2('Price Trends: The Villa and Apartment Gap Is Widening'),
      p('Prices are still rising, but the pace has cooled and performance now varies sharply by property type.'),
      p("Using ValuStrat's index, which marks a consistent sample to market, the citywide average for off-plan homes reached AED 2,030 per square foot in Q1 2026, up around 12% year-on-year. Ready homes averaged AED 1,691 per square foot, up around 6%. Other indices place the citywide average between AED 1,750 and AED 1,980 per square foot depending on methodology, so treat any single figure as directional rather than absolute."),
      p('The clearer signal is the gap between segments. ValuStrat forecasts villa and townhouse values to rise around 17.7% across 2026, against around 7.4% for apartments. The reason is supply composition. Villas and townhouses make up less than 20% of Dubai’s housing stock, yet demand from families relocating to the city remains strong. The development pipeline, by contrast, is heavily weighted toward apartments.'),
      p('Well-connected, low-density communities have shown the most price resilience. CBRE and ValuStrat both point to areas such as Dubai Hills Estate, Palm Jumeirah, Emirates Living, Arabian Ranches, and Tilal Al Ghaf as outperformers, where constrained supply and end-user demand support values.'),

      h2('Rental Market Trends'),
      p('The rental market is stabilising after several years of steep increases. Dubai registered AED 32.2 billion in rental contracts in Q1 2026, covering 118,385 new leases and 135,607 renewals, according to the Dubai Land Department. Cancelled contracts fell 25%, which points to steadier landlord and tenant relationships.'),
      p("The forecast for the rest of the year is flat. ValuStrat's base case puts residential rental growth at around 0% for 2026, as rents in many communities approach affordability ceilings and new supply gradually reaches the market. Average asking rents in Dubai stood at around AED 146,000 per year in Q1 2026."),
      p('For landlords and investors, the takeaway is that the era of automatic double-digit rent rises is ending. Yield now depends more on location and asset quality than on a rising tide.'),

      h2('What Is Driving the Market'),
      p("Dubai's demand drivers are structural, which is why most analysts describe the market as resilient rather than speculative. The main supports are:"),
      liLead('Population growth.', " Dubai's resident base has grown from around 3.4 million in 2020 to an estimated 4.1 million in 2026, roughly 700,000 new residents in six years. More people means more housing demand."),
      liLead('Wealth migration.', " Dubai ranks among the world's leading destinations for high-net-worth individuals. More than 500 residential transactions above 10 million US dollars were recorded in 2025, according to Knight Frank."),
      liLead('The Golden Visa.', ' Tying long-term residency to property ownership creates sticky capital. Owners have a reason to hold through softer patches, which tends to make corrections gentler.'),
      liLead('Economic diversification.', ' Tourism, logistics, technology, finance, and trade all contribute to GDP under the Dubai Economic Agenda D33, reducing dependence on any single sector.'),
      liLead('Financing conditions.', ' Three-month EIBOR sat at 3.75% in May 2026, with fixed mortgage rates around 3.8%. Mortgage activity grew around 16% year-on-year in the first quarter.'),

      h2('Supply Pipeline: The Number That Matters Most'),
      p('Supply is the single most important variable for the years ahead, and it is widely misunderstood.'),
      p('Headline pipeline figures look large. ValuStrat forecasts around 131,000 new units for 2026, roughly 81% of them apartments. Other estimates put 2026 handovers closer to 120,000 units.'),
      p('The catch is that forecast pipelines and actual completions are very different things in Dubai. Historically, only around 40% to 50% of scheduled units complete on time. Developers launched more than 154,000 units in 2024 but completed around 34,000 that year. Realistic 2026 completions land closer to 40,000 to 55,000 units.'),
      p("The regional conflict added a further delay. Reports indicate that around half of 2026's planned handovers have slipped by 6 to 12 months, with construction costs rising during the disruption. That eases near-term oversupply risk, but it pushes more inventory into 2027, already forecast as one of the heaviest delivery years in over a decade. The real test of the market's ability to absorb new stock is a 2027 question, not a 2026 one."),

      h2('The Regional Factor'),
      p('No honest 2026 outlook can ignore the regional security situation, because it is the variable every analyst names first.'),
      p('The US and Israeli conflict with Iran began on 28 February 2026 and triggered a brief but real shock to buyer confidence across the UAE. The effect showed up in volume, not prices. Transaction activity softened in March, while physical property values dipped only around 4% to 7% from their February peak at the worst point.'),
      p('The market then rebounded. April transaction value reached AED 68.56 billion, up around 20% month-on-month, with mortgage activity hitting the year’s highest monthly figure. The Islamabad Memorandum, signed on 17 June 2026, extended the ceasefire by 60 days, reopened the Strait of Hormuz to commercial shipping, and waived several sanctions.'),
      p("The situation remains fragile. The framework is an interim step toward a final deal, key nuclear questions are unresolved, and violations have continued. The practical point for property is straightforward. Dubai's structural demand held through the worst of the disruption, but the pace of the market in the second half of 2026 depends heavily on whether the ceasefire holds. That is a geopolitical question, not one that property data can answer."),

      h2('Dubai Real Estate Market Forecast 2026 and 2027'),
      p('Forecasts for full-year 2026 are unusually spread out, which reflects the uncertainty above. The range across major research houses runs from a decline to solid growth:'),
      liLead('ValuStrat:', ' capital values up around 10%, with villas up around 17.7% and apartments up around 7.4%.'),
      liLead('Cushman and Wakefield:', ' growth of around 5% to 8%.'),
      liLead('CBRE:', ' growth of around 3% to 6%.'),
      liLead('Knight Frank:', ' growth of around 1% in the mainstream market and around 3% in prime.'),
      liLead('S&P Global Ratings:', ' a possible correction of up to 7%.'),
      p('Strip away the spread and a consensus emerges. Growth is moderating from the roughly 20% recorded in 2025 toward a more normal single-digit pace. Villas and prime stock are expected to hold up better than mid-market apartments, because the heaviest incoming supply sits in the apartment segment.'),
      p("Looking to 2027, the picture is more delivery-sensitive. Knight Frank's best case assumes around 66,000 completions per year between 2026 and 2030, still well above the long-term average. If a large share of delayed 2026 units lands in 2027 alongside already-scheduled stock, apartment-heavy communities with the largest pipelines carry the most downside risk."),

      h2('Is Dubai Real Estate in a Bubble?'),
      pLink(
        "The short answer from the data is no, though the market is late in its cycle. The current upswing began in late 2020, making 2026 its sixth year, historically the stage where caution is warranted. No credible research firm is forecasting a crash. Today's growth rests on genuine demand drivers, population, wealth migration, and infrastructure, rather than the speculative leverage that defined the 2008 cycle. A gradual correction in specific oversupplied segments is more plausible than a broad collapse. We cover this in detail in our analysis of whether ",
        'Dubai real estate is in a bubble',
        '/blog/is-dubai-real-estate-in-a-bubble',
        '.'
      ),

      h2('What This Means for Buyers and Investors'),
      p('The market in mid-2026 rewards selectivity over momentum. A few practical points:'),
      liLead('Favour constrained-supply segments.', ' Villas and townhouses in established communities have the firmest pricing support. Apartment-heavy districts with large pipelines carry more risk.'),
      liLead('Read yields, not just price growth.', ' With rents forecast to stay flat, rental return now depends on buying well in the right location.'),
      liLead('Stress-test against the downside.', ' Run the numbers against a correction scenario, not only the optimistic case, particularly if using leverage.'),
      liLead('Watch the 2027 supply wave.', ' If you are buying off-plan, factor in handover timing and the communities where completions cluster.'),
      p('For most buyers, the structural case for Dubai remains intact. The discipline now is choosing the right asset, in the right community, at the right entry point.'),

      h2('The Bottom Line'),
      p('Dubai’s real estate market is moving from a momentum-driven cycle to a quality-driven one. Activity remains strong, foreign capital keeps flowing, and the structural demand story is intact. Growth is cooling to a healthier single-digit pace, villas are leading apartments, and the real supply test sits in 2027. The near-term wildcard is regional stability. For buyers and investors, the winning approach is no longer to buy anything and wait. It is to buy the right asset, in the right place, with the downside in mind.'),
    ],
    faqs: [
      {
        question: 'Is the Dubai property market going to crash in 2026?',
        answer:
          'No major research firm is forecasting a crash. Forecasts range from a possible correction of up to 7% to growth of around 10%, with most expecting moderate single-digit movement. The market is late in its cycle but supported by genuine demand.',
      },
      {
        question: 'Are Dubai property prices still rising in 2026?',
        answer:
          'Yes, but more slowly than in 2025. Citywide values are up year-on-year, though the pace has cooled from around 20% in 2025 to a forecast single-digit range. Villas are outperforming apartments by a wide margin.',
      },
      {
        question: 'Is 2026 a good time to buy property in Dubai?',
        answer:
          'It can be, if you buy selectively. Constrained-supply communities and villa stock show the most resilience, while heavily supplied apartment districts carry more risk. Buyers who can absorb a downside scenario are best positioned.',
      },
      {
        question: 'Will rents rise in Dubai in 2026?',
        answer:
          'Most likely not by much. ValuStrat forecasts residential rents to stay broadly flat in 2026 as rates approach affordability ceilings and new supply reaches the market.',
      },
      {
        question: 'Which Dubai areas are most resilient?',
        answer:
          'Well-connected, low-density communities with limited supply, including Dubai Hills Estate, Palm Jumeirah, Emirates Living, Arabian Ranches, and Tilal Al Ghaf, have shown the strongest price support.',
      },
    ],
  },

  {
    slug: 'is-dubai-real-estate-in-a-bubble',
    title: 'Is Dubai Real Estate in a Bubble?',
    category: 'Market Intelligence',
    excerpt:
      'Is Dubai real estate in a bubble in 2026? UBS rates it elevated risk, not bubble territory. What the data shows, why it is not 2008, and the risks worth watching.',
    seoTitle: 'Is Dubai Real Estate in a Bubble? 2026 Data & Analysis',
    metaDescription:
      'Is Dubai real estate in a bubble? UBS rates it elevated risk, not bubble territory. The data, why it is not a repeat of 2008, and the real risks for buyers in 2026.',
    img: '/blog/is-dubai-real-estate-in-a-bubble.jpg',
    imageAlt: 'Dubai Marina skyline and waterfront at sunrise with the sun reflecting on the sea',
    publishedAt: '2026-06-29T10:00:00Z',
    body: [
      p('Dubai real estate is not in a 2008-style bubble, but it does carry elevated risk. The UBS Global Real Estate Bubble Index rates Dubai as “elevated risk,” not full bubble territory. Prices have run well ahead of incomes, yet the speculative leverage that drove past crashes is largely absent. A moderate correction is possible. A collapse is not the base case.'),
      p('This piece breaks down what the data actually shows, why this market looks different from 2008, the risks worth watching, and what it all means if you are buying or holding in Dubai.'),

      h2('What a Property Bubble Actually Means'),
      p('A bubble is not just rising prices. It is prices rising faster than the fundamentals that support them, such as incomes, rents, and real demand, usually fuelled by cheap debt and speculation. When sentiment turns, those prices fall hard because nothing real was holding them up.'),
      p('The most respected neutral gauge of this is the UBS Global Real Estate Bubble Index, which measures how far home prices in major cities have moved from underlying fundamentals using price-to-income ratios, price-to-rent ratios, mortgage lending, and construction activity.'),
      p('Here is where Dubai sits. In the 2025 edition, UBS placed Dubai in the elevated risk category with a score of 1.09. That is below the bubble-risk threshold of 1.5. The cities actually in bubble territory are Miami at 1.73, Tokyo at 1.59, and Zurich at 1.55. Dubai sits alongside Los Angeles, Amsterdam, and Geneva in the tier below.'),
      p('UBS was direct about what this means. The elevated rating does not point to an imminent crash. It reflects prices climbing faster than affordability and rental yields can support. That distinction is the whole story.'),

      h2('How Dubai Got Here: The Case for Concern'),
      p('The numbers behind the warning are real, and they deserve to be taken seriously.'),
      p('According to UBS, real Dubai home prices have risen around 50% over five years, the strongest growth of any of the 21 cities analysed. Real prices were up around 11% in the most recent 12 months. Dubai jumped from 14th to 5th place in the index, recording the largest single-year increase in bubble risk of any major city.'),
      p('The drivers UBS flags are worth listing plainly:'),
      liLead('Incomes are not keeping pace with prices.', " Dubai's population has grown nearly 15% since 2020 and crossed 4 million residents in 2025, which has tightened supply and pushed values up faster than salaries."),
      liLead('Construction is accelerating.', ' Building permit data points to new construction approaching levels last seen in 2017, a year that amplified the previous downturn.'),
      liLead('Competition is intensifying.', ' Abu Dhabi and Riyadh are competing harder for the same offshore capital, with Saudi Arabia opening designated zones to foreign buyers from 2026.'),
      p('These are genuine pressure points. Anyone telling you Dubai has no bubble risk at all is ignoring the data.'),

      h2('Why This Is Not 2008'),
      p('Here is the other side, and it is just as grounded in data. The 2008 crash, when Dubai prices fell 50% to 60%, was built on a specific and fragile model: leveraged speculation, short-term flipping, and off-plan buying by investors who relied entirely on prices rising further to make a profit. When global credit froze, the whole structure collapsed within months.'),
      p("Today's market is structurally different in ways that matter:"),
      liLead('It runs on cash, not debt.', ' Mortgage-backed deals made up only around a quarter of total transaction value in 2025, according to Dubai Land Department data analysed by AGBI. Cash accounted for more than half of all transactions in the second half of the year. A market powered by cash and equity does not unravel the way a leveraged one does.'),
      liLead('Leverage is falling, not rising.', ' The average loan-to-value ratio dropped to just under 73% in 2025, down more than five percentage points year-on-year. Buyers are putting more of their own money in, even when they borrow. The minimum down payment is 20%, and the Central Bank tightened rules so registration and broker fees can no longer be financed.'),
      liLead('End users now drive demand.', ' End-user buyers account for more than 70% of transactions. The era of flipping a 10% deposit for a fast 50% profit is largely over. Off-plan assignment premiums that produced 20% to 30% returns in 2022 and 2023 have compressed to around 5% to 10%, which pushes pure speculators out.'),
      liLead('Golden Visa capital is sticky.', ' Tying long-term residency to property ownership gives owners a reason to hold through a downturn instead of panic selling, which softens corrections.'),
      liLead('Yields are still high.', ' Rental yields of around 5% to 6% in prime areas, and higher in some segments, remain among the strongest of any major global city. Dubai is nowhere near the stretched price-to-rent levels of Zurich, where it takes over 40 years of rent to pay for a flat.'),
      liLead('Bank underwriting adds another brake.', " When a buyer agrees a price above what the bank's valuer supports, the bank lends only against its valuation and the buyer must cover the gap in cash. Most will not. That mechanism quietly stops the market from overheating the way it did before."),

      h2('The Real Risks Worth Watching'),
      p('A balanced answer has to name the risks that are real, not just the ones that are comforting.'),
      liLead('Supply is the big one, and it is a 2027 story.', ' The headline pipeline is large, but Dubai historically completes only around 40% to 50% of scheduled units on time. The bigger concern is that delayed 2026 handovers are being pushed into 2027, already one of the heaviest delivery years in over a decade. If too much stock lands at once, mid-market and apartment-heavy communities face the most absorption risk. Prime, supply-constrained areas are better insulated.'),
      liLead('Off-plan concentration is a genuine late-cycle marker.', ' Off-plan made up roughly 70% or more of transaction value recently. When off-plan runs above 60% to 65% of the market, it can signal speculative activity, and it means a meaningful share of buyers are betting on delivery two to four years out.'),
      liLead('Affordability is stretched.', " This is UBS's core concern. If incomes do not rise fast enough to support current prices, demand from resident buyers eventually thins."),
      liLead('Credible firms are forecasting a correction.', ' This matters and should not be brushed aside. Fitch projected a price correction of around 10% to 15% for late 2025 into 2026 based on supply and demand. S&P Global Ratings has warned of a correction of up to 7%. Moody’s has flagged price correction risk from 2026. These are not crash calls, but they are real downside forecasts from serious institutions.'),

      h2('What History Tells Us'),
      p("Dubai's market moves in cycles of roughly five to seven years from peak to peak. The current upswing began in late 2020, which makes 2026 the sixth year, historically the stage where caution is warranted. Transaction volumes typically peak 6 to 12 months before prices, and volume growth has already decelerated."),
      p('The encouraging pattern is that each Dubai downturn has been milder than the last. The 2008 crash was sharp at 50% to 60%. The 2015 to 2019 correction was gentler at 25% to 35%. The market has matured, regulation has tightened, and leverage in the system is lower.'),
      p('If a correction does come, the structural picture argues it is far more likely to resemble 2015 to 2019, a gradual decline of around 20% to 30% over three to four years concentrated in weaker segments, than a sudden 2008-style collapse across the board.'),

      h2('So, Is Dubai Real Estate in a Bubble?'),
      p('The honest answer is no, not in the way most people mean the word, but the market is late in its cycle and valuations are stretched.'),
      p('The speculative leverage that defines a classic bubble is largely missing. The market is cash-dominated, end-user-led, less leveraged than before, and supported by genuine population and wealth migration. No credible research firm is forecasting a crash.'),
      p('At the same time, prices have outpaced incomes, UBS rates the market elevated risk, and respected institutions expect a moderate correction. Both things are true at once. The likely path is cooling and selective softening, not collapse. The risk is concentrated in oversupplied, apartment-heavy, off-plan-driven segments, not in the market as a whole.'),

      h2('What This Means for Buyers and Investors'),
      p('The takeaway is not to avoid Dubai. It is to stop treating it like 2022, when almost anything you bought went up.'),
      liLead('Buy for value, not momentum.', ' The rising tide has receded. Price growth now has to be earned through location and quality, not assumed.'),
      liLead('Favour constrained-supply segments.', ' Villas and prime communities with limited land have the firmest pricing support. Heavily supplied apartment districts carry more downside.'),
      liLead('Avoid late-cycle speculation.', ' Flipping that worked in 2022 carries elevated risk now. Never hold a position that only breaks even if prices keep rising.'),
      liLead('Stress-test the downside.', ' Run your numbers against a correction of 20% to 30%, not just the optimistic case, especially if you are using leverage.'),
      liLead('Think in years, not months.', ' A three to five year horizon rides out the cyclical softness that worries short-term buyers.'),
      pLink(
        'For a full breakdown of current transaction data, prices, and forecasts, see our ',
        'Dubai Real Estate Market Report 2026',
        '/blog/dubai-real-estate-market-report-2026',
        '.'
      ),

      h2('The Bottom Line'),
      p('Dubai real estate is not a bubble waiting to burst, but it is no longer a market where anything goes up. It is elevated, late in its cycle, and carrying real but manageable risk. The 2008 comparison does not hold, because the leverage and speculation that powered that crash are largely gone. The smart approach now is the same one the data keeps pointing to: buy quality, in the right location, with the downside priced in, and hold for the long term.'),
    ],
    faqs: [
      {
        question: "Is Dubai's property market going to crash in 2026?",
        answer:
          'No major research firm is forecasting a crash. The bear case from firms like Fitch and S&P points to a moderate correction of up to around 10% to 15% in a downside scenario, not a collapse. The structural conditions that caused the 2008 crash are largely absent.',
      },
      {
        question: 'Is Dubai real estate overvalued?',
        answer:
          "By UBS's measure, yes, it is elevated. Dubai scored 1.09 on the 2025 Global Real Estate Bubble Index, in the elevated risk band but below bubble territory. Prices have risen faster than incomes and rents, which is what overvaluation means.",
      },
      {
        question: 'Why is this not like the 2008 Dubai crash?',
        answer:
          'In 2008, the market ran on leveraged speculation and flipping that collapsed when credit froze. Today around three-quarters of transaction value is cash, end users drive over 70% of demand, leverage is lower, and Golden Visa capital tends to stay put.',
      },
      {
        question: 'Will Dubai property prices fall in 2026?',
        answer:
          'They may soften. Prices already saw their first quarterly dip since 2020 in early 2026 before rebounding. Most analysts expect single-digit movement for the year, with weaker apartment-heavy segments more exposed than villas and prime stock.',
      },
      {
        question: 'Is it a good time to buy property in Dubai?',
        answer:
          'It can be, if you buy selectively and for the long term. Constrained-supply communities and quality assets offer the most protection. Buyers who can absorb a correction scenario and hold for three to five years are best positioned.',
      },
    ],
  },
];

/* ----- Media Center: news ----------------------------------------------- */
/* News shares the same shape as a blog Post, so the article rendering and
   data layer can be reused. Categories differ (see newsCategories). */
export type News = Post;

export const newsCategories = [
  { title: 'Press Release', text: 'Official announcements from Earth Link.' },
  { title: 'Company News', text: 'Milestones, hires, and growth.' },
  { title: 'Market Update', text: 'Fast takes on what is moving the market.' },
  { title: 'Events', text: 'Where to find us, and what we are hosting.' },
];

/* Built-in news items. These render whenever Sanity is not connected; once it
   is, articles written in the Studio take over (see lib/news.ts). */
export const news: News[] = [
  {
    slug: 'earthlink-real-estate-launches-media-center',
    title: 'Earth Link Real Estate Launches Its Media Center',
    category: 'Company News',
    excerpt:
      'A new home for our press releases, company milestones, and fast market updates — all in one place.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80',
    imageAlt: 'Modern Dubai office tower against a clear sky',
    publishedAt: '2026-06-30T09:00:00Z',
    body: [
      p('Earth Link Real Estate has launched a dedicated Media Center, bringing our blog and news together in one place. It is where you will find our official announcements, company milestones, and quick reads on what is moving the Dubai market.'),
      p('Our blog remains the home for longer-form market intelligence and guides. The news feed is for timely updates — press releases, events, and company news — so you can keep up at a glance.'),
    ],
    faqs: [],
  },
];

/* ----- FAQ -------------------------------------------------------------- */
export const faqs = [
  {
    q: 'What services does Earth Link Real Estate offer?',
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
    q: 'How do I get started with Earth Link Real Estate?',
    a: 'Simply reach out via our website, WhatsApp, or visit our office. One of our agents will understand your requirements and shortlist properties that match your budget, lifestyle, and investment goals — at no cost to you as a buyer.',
  },
];

/* ----- Form options ----------------------------------------------------- */
export const inquiryTypes = ['Buy', 'Sell', 'Lease', 'Manage', 'Invest', 'Book a consultation'];
export const consultants = ['No preference', 'Sales Consultant', 'Leasing Consultant', 'Investment Advisor'];
