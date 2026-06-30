/* ==========================================================================
   Earthlink Real Estate — developers & their projects
   Single source of truth for the Developers feature. Edit here to update the
   /developers listing and each /developers/[slug] page.
   ========================================================================== */

export type DeveloperProject = {
  /** URL slug for the on-site detail page: /developers/[dev]/[slug]. */
  slug: string;
  name: string;
  /** Community / location, e.g. "Dubai Hills Estate". */
  community: string;
  /** Starting price as shown, e.g. "From AED 1.3M" or "On request". */
  price: string;
  /** Project image for the card. Swap these for official renders when available. */
  image: string;
  /** Official project page (kept as an outbound reference link). */
  url: string;

  /* ----- Detail-page content (optional; fill from the developer site) ----- */
  /** One-line headline shown under the project name. */
  tagline?: string;
  /** Body paragraphs describing the project. */
  description?: string[];
  /** Location summary + nearby landmarks / commute times. */
  location?: { area: string; nearby: string[] };
  /** e.g. "Studios to 3-bed apartments". */
  unitTypes?: string;
  /** Size range, e.g. "815 – 2,400 sqft" or "On request". */
  sizes?: string;
  /** e.g. "Studio, 1, 2 & 3 bed". */
  bedrooms?: string;
  /** Amenities offered by the project / community. */
  amenities?: string[];
  /** Payment plan summary, e.g. "80/20 — 80% during construction". */
  paymentPlan?: string;
  /** Handover / completion, e.g. "Q4 2028" or "On request". */
  handover?: string;
  /** Extra photos for the detail-page gallery (the card `image` is used first). */
  gallery?: string[];
};

export type Developer = {
  slug: string;
  name: string;
  /** One-line tagline shown on the listing card. */
  tagline: string;
  /** Signature project / community image for the listing tile. */
  image: string;
  /** Developer's main brochures / launches page (opens in a new tab). */
  brochuresUrl: string;
  projects: DeveloperProject[];
};

/* ----- Developers listing page: hero copy -------------------------------
   Plain editable strings so the wording can be changed without touching the
   page component. */
export const developersPage = {
  eyebrow: 'Top Builders',
  headlineLead: 'Buy Where Dubai is',   // normal-weight part
  headlineAccent: 'Built',              // gradient part
  intro: 'We get early access to new projects from the city\'s best developers. We review the design quality and the builder\'s track record before we show you anything.',
};

export const developers: Developer[] = [
  {
    slug: 'emaar',
    name: 'Emaar Properties',
    tagline: 'The master builder behind Downtown and Dubai Hills.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    brochuresUrl: 'https://properties.emaar.com/en/latest-launches/',
    projects: [
      {
        slug: 'golf-vale',
        name: 'Golf Vale',
        community: 'Emaar South',
        price: 'From AED 1.1M',
        image: '/projects/golf-vale/hero.jpg',
        gallery: ['/projects/golf-vale/g1.jpg', '/projects/golf-vale/g2.jpg', '/projects/golf-vale/g3.jpg'],
        url: 'https://properties.emaar.com/en/properties/golf-vale-at-emaar-south/',
        tagline: 'Golf-front living beside Dubai\'s new aviation hub.',
        description: [
          'Golf Vale is an off-plan residential development by Emaar Properties in the master-planned community of Emaar South, within Dubai South (Dubai World Central). Set directly alongside an 18-hole championship golf course, it pairs contemporary architecture with landscaped greenery across roughly 262 homes — 1, 2 and 3-bedroom apartments plus a limited release of 3-bedroom townhouses — with floor-to-ceiling windows, warm wood finishes and textured stone surfaces.',
          'Residents enjoy resort-style amenities centred on wellness and outdoor living, with direct access to the golf course and clubhouse. Minutes from Al Maktoum International Airport (DWC) and Expo City Dubai, the freehold community offers strong connectivity to the rest of Dubai.',
        ],
        location: {
          area: 'Emaar South, Dubai South (Dubai World Central)',
          nearby: ['5–10 min to Al Maktoum International Airport (DWC)', '15 min to Expo City Dubai', '25 min to Mall of the Emirates', '25–30 min to Dubai Marina', '30 min to Downtown Dubai'],
        },
        unitTypes: '1, 2 & 3-bedroom apartments and 3-bedroom townhouses',
        sizes: '672 – 2,816 sqft',
        bedrooms: '1, 2 & 3 bed',
        amenities: ['18-hole championship golf course access', 'Golf clubhouse', 'Infinity-edge swimming pool', 'Children\'s pool', 'Indoor and outdoor gyms', 'Padel courts', 'Yoga and meditation spaces', 'Landscaped parks and gardens', 'Walking and jogging trails', 'BBQ and family recreation zones', 'Kids\' play areas', 'Retail, restaurants and cafes'],
        paymentPlan: '80/20 — 10% down, 70% during construction, 20% on handover',
        handover: 'Q1 2030',
      },
      {
        slug: 'greencrest',
        name: 'Greencrest',
        community: 'Dubai Hills Estate',
        price: 'From AED 1.57M',
        image: '/projects/greencrest/hero.jpg',
        gallery: ['/projects/greencrest/g1.jpg', '/projects/greencrest/g2.jpg', '/projects/greencrest/g3.jpg'],
        url: 'https://properties.emaar.com/en/our-communities/dubai-hills-estate/',
        tagline: 'Wellness-inspired, golf-course living in Dubai Hills Estate.',
        description: [
          'Greencrest is a wellness-focused, low-rise residential development by Emaar Properties set within Dubai Hills Estate, positioned between Downtown Dubai and Dubai Marina. The project offers a limited collection of 195 premium 1, 2 and 3-bedroom apartments with clean contemporary lines, generous balconies and open terraces framing views over the 18-hole championship golf course and surrounding greenery.',
          'Designed around natural harmony and everyday wellbeing, Greencrest places residents steps from Dubai Hills Park, the golf course and Dubai Hills Mall, with quick connections to the city via Al Khail Road and Umm Suqeim Street — all delivered to Emaar\'s established build quality.',
        ],
        location: {
          area: 'Dubai Hills Estate',
          nearby: ['5 min to Dubai Hills Mall', '10 min to Downtown Dubai', '10 min to Dubai Marina', '15 min to Mall of the Emirates', '20 min to Dubai International Airport'],
        },
        unitTypes: '1, 2 & 3-bedroom apartments',
        sizes: 'Approx. 774 – 1,928 sqft',
        bedrooms: '1, 2 & 3 bed',
        amenities: ['18-hole championship golf course access', 'Indoor and outdoor pools (adult & kids)', 'Indoor and outdoor gyms', 'Yoga deck / terrace', 'Landscaped walking and jogging trails', 'Running and cycling tracks', 'Children\'s play areas', 'Multi-use games courts', 'Barbecue areas', 'Multi-purpose halls', 'Direct access to Dubai Hills Park', '24/7 security with CCTV and covered parking'],
        paymentPlan: '80/20 — 10% booking, 70% during construction, 20% on handover',
        handover: 'Q2 2029',
      },
      {
        slug: 'fior-1',
        name: 'Fior 1',
        community: 'Rashid Yachts & Marina',
        price: 'From AED 2.21M',
        image: '/projects/fior-1/hero.jpg',
        gallery: ['/projects/fior-1/g1.jpg', '/projects/fior-1/g2.jpg', '/projects/fior-1/g3.jpg'],
        url: 'https://properties.emaar.com/en/properties/fior-1-at-rashid-yachts-and-marina/',
        tagline: 'Waterfront marina living by Emaar at Mina Rashid.',
        description: [
          'Fior 1 is a waterfront apartment development by Emaar Properties within Rashid Yachts & Marina (Mina Rashid) — Dubai\'s historic port reimagined as a Riviera-style marina destination. The release comprises 181 residences in 1, 2 and 3-bedroom layouts, oriented toward the marina, the canal pool and select views toward the Downtown skyline, with direct access to a vibrant promenade and a 430-berth superyacht marina.',
          'The development pairs private building amenities with the resort-style facilities of the wider community, including a 500m swimmable canal pool, Mina Beach access and landscaped gardens. It sits roughly 25 minutes from Downtown Dubai and 20 minutes from Dubai International Airport.',
        ],
        location: {
          area: 'Rashid Yachts & Marina (Mina Rashid)',
          nearby: ['~25 min to Downtown Dubai', '~20 min to Dubai International Airport (DXB)', 'Al Ghubaiba Metro approx. 4 km away', 'Direct access via Sheikh Zayed Road and Al Khail Road', 'Adjacent to Dubai Maritime City and the superyacht marina'],
        },
        unitTypes: '1, 2 & 3-bedroom apartments',
        sizes: 'Approx. 760 – 1,592 sqft',
        bedrooms: '1, 2 & 3 bed',
        amenities: ['Superyacht marina (430 berths)', '500m swimmable canal pool', 'Adult and kids\' swimming pools', 'Splash pad', 'Fully equipped gymnasium', 'Outdoor padel court', 'Yoga / wellness area', 'BBQ area', 'Event lawn', 'Children\'s play areas', 'Mina Beach access', 'Waterfront promenade with retail'],
        paymentPlan: '80/20 — 10% down, 70% during construction, 20% on handover',
        handover: 'Q3 2030',
      },
      {
        slug: 'montiva-by-vida',
        name: 'Montiva by Vida',
        community: 'Dubai Creek Harbour',
        price: 'From AED 1.91M',
        image: '/projects/montiva-by-vida/hero.jpg',
        gallery: ['/projects/montiva-by-vida/g1.jpg', '/projects/montiva-by-vida/g2.jpg', '/projects/montiva-by-vida/g3.jpg'],
        url: 'https://properties.emaar.com/en/our-communities/dubai-creek-harbour/',
        tagline: 'Vida-branded waterfront living in Dubai Creek Harbour.',
        description: [
          'Montiva by Vida is a Vida-branded residential development by Emaar Properties in the Green Gate district of Dubai Creek Harbour. A single residential tower holds a limited collection of 474 branded apartments — 1, 2 and 3-bedroom layouts with serene waterfront and creek views — set above a podium of landscaped decks, pedestrian walkways and green spaces, blending Vida\'s hospitality-led lifestyle with Emaar\'s master-planned living.',
          'Set within one of Dubai\'s most prominent waterfront masterplans, residents enjoy proximity to Dubai Creek Tower, the Ras Al Khor Wildlife Sanctuary and the Creek Harbour promenade, retail and dining. Apartments range from approximately 755 to 1,911 sqft, with handover scheduled for Q3 2029.',
        ],
        location: {
          area: 'Dubai Creek Harbour (Green Gate district)',
          nearby: ['10 min to Downtown Dubai', '15 min to Dubai International Airport (DXB)', '18 min to DIFC & Business Bay', '20 min to Dubai Festival City', 'Adjacent to Dubai Creek Tower & Ras Al Khor Wildlife Sanctuary'],
        },
        unitTypes: '1, 2 & 3-bedroom apartments',
        sizes: 'Approx. 755 – 1,911 sqft',
        bedrooms: '1, 2 & 3 bed',
        amenities: ['Infinity swimming pool', 'Kids\' pool & splash zone', 'Indoor & outdoor gyms', 'Padel / multi-sport courts', 'Jogging & cycling tracks', 'Zen gardens & yoga spaces', 'Kids\' play areas', 'Community rooms & social lounges', 'Landscaped podium decks & parks', 'Retail & dining town centre', 'Pedestrian-friendly walkways', 'Soundproof construction'],
        paymentPlan: '80/20 — 10% booking, 70% during construction, 20% on handover',
        handover: 'Q3 2029',
      },
      {
        slug: 'mareva',
        name: 'Marèva',
        community: 'The Oasis (Dubailand)',
        price: 'From AED 13.47M',
        image: '/projects/mareva/hero.jpg',
        gallery: ['/projects/mareva/g1.jpg', '/projects/mareva/g2.jpg', '/projects/mareva/g3.jpg'],
        url: 'https://properties.emaar.com/en/our-communities/the-oasis/',
        tagline: 'Lagoon-side luxury villa living in Emaar\'s The Oasis.',
        description: [
          'Marèva at The Oasis is an exclusive collection of standalone luxury villas by Emaar Properties, set within The Oasis — a 100-million-sq-ft master community in Dubailand defined by swimmable lagoons, water canals and abundant greenery. Marèva offers 4, 5 and 6-bedroom villas with expansive interiors, private outdoor spaces and refined contemporary finishes, positioned along the community\'s signature water features.',
          'Residents enjoy access to swimmable lagoons, beaches, multiple pools, parks and wellness facilities alongside retail centres, schools and a community hub. The community sits near Sheikh Mohammed Bin Zayed Road (E311) and Emirates Road (E611), placing Downtown Dubai and Al Maktoum International Airport within a 20–30 minute drive.',
        ],
        location: {
          area: 'The Oasis by Emaar, Dubailand',
          nearby: ['Al Maktoum International Airport ~18–20 min', 'Downtown Dubai under 30 min', 'Business Bay under 30 min', 'Direct access via Sheikh Mohammed Bin Zayed Road (E311)', 'Direct access via Emirates Road (E611)'],
        },
        unitTypes: '4, 5 & 6-bedroom standalone villas',
        sizes: 'Approx. 7,257 – 12,986 sqft',
        bedrooms: '4, 5 & 6 bed',
        amenities: ['Swimmable lagoons', 'Beaches', 'Multiple swimming pools', 'Parks and pocket parks', 'Jogging and cycling tracks', 'Sports courts and fitness areas', 'Clubhouse', 'Wellness and spa facilities', 'Community playgrounds', 'Retail centres', 'Community hub', 'Schools and mosques'],
        paymentPlan: '80/20 — 10% down, 70% during construction, 20% on handover',
        handover: 'Q1 2030',
      },
    ],
  },
  {
    slug: 'damac',
    name: 'DAMAC Properties',
    tagline: 'Known for signature branded homes and resort-style living.',
    image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1200&q=80',
    brochuresUrl: 'https://www.damacproperties.com/en/projects/',
    projects: [
      {
        slug: 'chelsea-residences',
        name: 'Chelsea Residences by DAMAC',
        community: 'Dubai Maritime City',
        price: 'From AED 2.16M',
        image: '/projects/chelsea-residences/hero.jpg',
        gallery: ['/projects/chelsea-residences/g1.jpg', '/projects/chelsea-residences/g2.jpg', '/projects/chelsea-residences/g3.jpg'],
        url: 'https://www.damacproperties.com/en/projects/chelsea-residences/',
        tagline: 'The world\'s first Chelsea FC-branded waterfront residences.',
        description: [
          'Chelsea Residences by DAMAC is the world\'s first football-club-branded residential community, developed under DAMAC\'s partnership as Official Property Development Partner of Chelsea Football Club. On a man-made peninsula in Dubai Maritime City between Port Rashid and Dubai Dry Docks, it comprises over 1,400 waterfront units with coral-reef-inspired architecture and 270-degree sea and skyline views over the Arabian Gulf.',
          'The towers offer 1, 2 and 3-bedroom apartments with open-plan layouts, full-height glazing and private balconies. Signature Chelsea FC-themed features include a rooftop football pitch (The Stamford Summit), athletic recovery and simulation zones, cryotherapy and an aerial yoga studio.',
        ],
        location: {
          area: 'Dubai Maritime City',
          nearby: ['J1 Beach — approx. 14 min', 'City Walk — approx. 15 min', 'Downtown Dubai — approx. 22 min', 'Dubai International Airport — approx. 23 min', 'Waterfront between Port Rashid and Dubai Dry Docks'],
        },
        unitTypes: 'Waterfront apartments',
        sizes: 'Approx. 780 – 2,040 sqft',
        bedrooms: '1, 2 & 3 bed',
        amenities: ['Rooftop football pitch (The Stamford Summit)', 'Chelsea-themed sports and training facilities', 'Athletic recovery zones', 'Cryotherapy centre', 'Wellness spa', 'Aerial yoga studio', 'Forest relaxation pods', 'Swimming pools', 'Fitness centre / gym', 'Fine dining outlets', '270-degree sea and skyline views', 'Direct waterfront access'],
        paymentPlan: '20% down, 1% monthly during construction, 40% on handover',
        handover: 'Q4 2029',
      },
      {
        slug: 'damac-islands-2',
        name: 'DAMAC Islands 2',
        community: 'Dubailand',
        price: 'From AED 2.75M',
        image: '/projects/damac-islands-2/hero.jpg',
        gallery: ['/projects/damac-islands-2/g1.jpg', '/projects/damac-islands-2/g2.jpg', '/projects/damac-islands-2/g3.jpg'],
        url: 'https://www.damacproperties.com/en/communities/damac-islands-2-community/projects/damac-islands-2/',
        tagline: 'Tropical island-inspired villas and townhouses in Dubailand.',
        description: [
          'DAMAC Islands 2 is the second phase of DAMAC\'s island-themed master community in Dubailand, inspired by idyllic destinations such as the Bahamas, Bermuda, Tahiti, Barbados, Cuba, Maui, Antigua and Mauritius. Each cluster carries a distinct architectural identity set within lush tropical landscaping and resort-style surroundings.',
          'The development delivers 4 and 5-bedroom townhouses, 5-bedroom twin villas, and 4 to 6-bedroom luxury villas, all with maid\'s rooms and spacious, cross-ventilated layouts. Residents enjoy more than 45 wellness, eco-conscious and adventure-driven amenities including crystal lagoons, private beaches, wave pools and a world-class clubhouse.',
        ],
        location: {
          area: 'Dubailand, Dubai',
          nearby: ['Adjacent to the original DAMAC Islands community', 'Connected via Sheikh Zayed Bin Hamdan Al Nahyan Street', 'Close to Dubailand leisure and retail', 'Accessible to Al Maktoum International Airport', 'Surrounded by crystal lagoons and private beaches'],
        },
        unitTypes: 'Townhouses and villas',
        sizes: 'Approx. 2,200 – 6,400+ sqft',
        bedrooms: '4, 5 & 6 bed',
        amenities: ['Crystal lagoons', 'Private beaches', 'Aqua dome', 'Wave pools', 'Wellness spa', 'World-class clubhouse', 'Tropical landscaped gardens', 'Swimming pools', 'Kids play areas', 'Adventure and recreation zones', 'Fitness facilities', 'Eco-conscious community parks'],
        paymentPlan: '75/25 — 20% down, milestone payments during construction, 25% on handover',
        handover: 'Q2 2030',
      },
      {
        slug: 'damac-bay-by-cavalli',
        name: 'DAMAC Bay by Cavalli',
        community: 'Dubai Harbour',
        price: 'From AED 2.9M',
        image: '/projects/damac-bay-by-cavalli/hero.jpg',
        gallery: ['/projects/damac-bay-by-cavalli/g1.jpg', '/projects/damac-bay-by-cavalli/g2.jpg', '/projects/damac-bay-by-cavalli/g3.jpg'],
        url: 'https://www.damacproperties.com/en/projects/damac-bay-by-cavalli/',
        tagline: 'Cavalli-branded beachfront luxury towers in Dubai Harbour.',
        description: [
          'DAMAC Bay by Cavalli is an elite three-tower beachfront development by DAMAC Properties in partnership with the Italian fashion house Roberto Cavalli, located in the prestigious Dubai Harbour district. It blends Cavalli\'s signature design language with panoramic views of the Arabian Gulf, Palm Jumeirah and the Dubai skyline.',
          'The towers offer 1 to 3-bedroom luxury apartments alongside a limited collection of 3 to 5-bedroom super-luxury duplexes and full-floor residences. Residents enjoy direct beach access and an extensive amenity programme, plus the cruise terminal, retail and public beaches of the wider Dubai Harbour waterfront.',
        ],
        location: {
          area: 'Dubai Harbour',
          nearby: ['Direct beachfront within Dubai Harbour', 'Dubai Marina — short drive', 'Palm Jumeirah — nearby', 'Dubai Harbour Cruise Terminal', 'Bluewaters Island and Ain Dubai — close by'],
        },
        unitTypes: 'Apartments, duplexes and full-floor units',
        sizes: 'Approx. 660 – 2,130+ sqft (apartments)',
        bedrooms: '1 to 5 bed',
        amenities: ['Private beach access', 'Swimming pools', 'Gym and fitness centre', 'Spa and sauna', 'Kids play area', 'Indoor games rooms', 'Dining outlets and retail', 'Leisure and entertainment facilities', 'Cruise terminal access', 'Landscaped recreation decks', 'Panoramic sea and skyline views', 'Cavalli-branded interiors'],
        paymentPlan: '80/20 — 20% down payment',
        handover: 'Q3 2027',
      },
      {
        slug: 'canal-heights-2',
        name: 'Canal Heights 2 (de GRISOGONO)',
        community: 'Business Bay',
        price: 'From AED 1.25M',
        image: '/projects/canal-heights-2/hero.jpg',
        gallery: ['/projects/canal-heights-2/g1.jpg', '/projects/canal-heights-2/g2.jpg', '/projects/canal-heights-2/g3.jpg'],
        url: 'https://www.damacproperties.com/en/projects/canal-heights-2-de-grisogono/',
        tagline: 'Diamond-inspired waterfront living branded by de GRISOGONO.',
        description: [
          'Canal Heights 2 is a luxury residential tower in Business Bay by DAMAC Properties in collaboration with the Swiss luxury jeweller de GRISOGONO. The design draws inspiration from precious gemstones, with jewel-toned interiors and frontage onto the Dubai Water Canal in the heart of the city\'s financial district.',
          'The development offers designer studios, 1 and 2-bedroom apartments, and 3 and 4-bedroom super-luxury duplexes — the larger duplexes featuring private pools and staff quarters. Signature amenities include an underwater pearl museum and seashell-styled swimming pools, alongside a full suite of wellness and leisure facilities.',
        ],
        location: {
          area: 'Business Bay',
          nearby: ['Dubai Water Canal frontage', 'Dubai Mall and Burj Khalifa — approx. 10 min', 'City Walk and Dubai Opera — approx. 10 min', 'Adjacent to Safa Two and AYKON City', 'Dubai International Airport — within approx. 20 min'],
        },
        unitTypes: 'Apartments and duplexes',
        sizes: 'Approx. 427 – 2,180 sqft',
        bedrooms: 'Studio, 1, 2, 3 & 4 bed',
        amenities: ['Underwater pearl museum', 'Seashell-styled swimming pools', 'State-of-the-art gym', 'Wellness spa', 'Children\'s play areas', 'Dubai Water Canal views', 'Landscaped leisure decks', 'Retail and dining outlets', 'Private pools in duplexes', '24-hour security and concierge', 'Covered parking', 'de GRISOGONO-branded interiors'],
        paymentPlan: '80/20 — 20% on booking, 60% during construction, 20% on handover',
        handover: 'Q4 2027',
      },
      {
        slug: 'safa-gate',
        name: 'Safa Gate (de GRISOGONO)',
        community: 'Safa Park / Sheikh Zayed Rd',
        price: 'From AED 1.99M',
        image: '/projects/safa-gate/hero.jpg',
        gallery: ['/projects/safa-gate/g1.jpg', '/projects/safa-gate/g2.jpg', '/projects/safa-gate/g3.jpg'],
        url: 'https://www.damacproperties.com/en/projects/safa-gate/',
        tagline: 'Twin-tower luxury living on Sheikh Zayed Road by de GRISOGONO.',
        description: [
          'Safa Gate is a luxury residential development by DAMAC Properties designed with the Swiss jeweller de GRISOGONO, rising on Sheikh Zayed Road beside Safa Park. Positioned in Dubai\'s "Golden Triangle" between Sheikh Zayed Road, the Dubai Canal and Safa Park, the iconic tower combines a prime central address with green and waterfront surroundings.',
          'The tower offers 1 and 2-bedroom apartments along with 3 to 5-bedroom super-luxury units and penthouses, featuring stylish interiors and smart home systems. Premium amenities include a rooftop with two swimming pools and a sunset bar, a wellness spa with light- and hydrotherapy, a gravity gym and a cinema.',
        ],
        location: {
          area: 'Al Safa / Sheikh Zayed Road',
          nearby: ['Overlooking Safa Park', 'Direct Sheikh Zayed Road access', 'Dubai Canal — moments away', 'Downtown Dubai and Burj Khalifa — short drive', 'Within Dubai\'s "Golden Triangle"'],
        },
        unitTypes: 'Apartments and penthouses',
        sizes: 'Approx. 807 – 5,196 sqft',
        bedrooms: '1, 2, 3 & 5 bed',
        amenities: ['Rooftop with two swimming pools', 'Sunset Bar and Cigar Lounge', 'Rooftop observation deck', 'Zen plunge pool', 'Wellness spa with light and hydrotherapy', 'Gravity Gym', 'Private cinema', 'Co-working area', 'Smart home systems', 'Landscaped leisure areas', 'Safa Park and canal views', 'de GRISOGONO-branded design'],
        paymentPlan: 'Launch plan 70/30 (incl. 20% deposit); regular plan 80/20',
        handover: 'Q4 2029',
      },
    ],
  },
  {
    slug: 'sobha',
    name: 'Sobha Realty',
    tagline: 'Unmatched focus on detail and lasting waterfront communities.',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
    brochuresUrl: 'https://sobharealty.com/sobha-communities',
    projects: [
      {
        slug: 'sobha-siniya-island',
        name: 'Sobha Siniya Island',
        community: 'Umm Al Quwain',
        price: 'From AED 1.33M',
        image: '/projects/sobha-siniya-island/hero.jpg',
        gallery: ['/projects/sobha-siniya-island/g1.webp', '/projects/sobha-siniya-island/g2.webp', '/projects/sobha-siniya-island/g3.webp'],
        url: 'https://sobharealty.com/sobha-communities/sobha-siniya-island',
        tagline: 'Pristine island living where luxury meets untouched nature.',
        description: [
          'Sobha Siniya Island is an 8-million-sq-ft master-planned island community in Umm Al Quwain, accessible via a 1.7 km bridge. It harmonises modern luxury with untouched natural beauty — pristine mangroves, white-sand beaches and protected wildlife including turtles, gazelles and flamingos — with 46% of the island dedicated to open green spaces.',
          'The community offers beachfront and marina-facing apartments alongside villa collections (Siniya Island Villas, Palm Grove and Coral Beach Villas). Resort-inspired living is anchored by an 18-hole golf course, a private marina and yacht club, and a retail boardwalk.',
        ],
        location: {
          area: 'Siniya Island, Umm Al Quwain',
          nearby: ['50 minutes from Dubai', '30 minutes from Sharjah', '10 minutes from Al Marjan Island', 'Accessed via a 1.7 km bridge to the mainland'],
        },
        unitTypes: 'Beach & marina apartments and villas',
        sizes: 'Apartments approx. 514 – 2,159 sqft; villas from approx. 4,815 sqft',
        bedrooms: '1–3 bed apartments; 4–6 bed villas',
        amenities: ['18-hole golf course', 'Private marina with yacht club', 'Private beaches', 'Clubhouse and fine-dining restaurants', 'Retail boardwalk and boulevard', 'Water sports facilities', 'Resort-style amenities', 'Protected mangroves and wildlife reserve', 'Extensive open green spaces (46% of island)'],
        paymentPlan: '60/40 — 20% down, 40% during construction, 40% on handover',
        handover: 'Q4 2027',
      },
      {
        slug: 'sobha-central',
        name: 'Sobha Central',
        community: 'JLT-adjacent, Dubai',
        price: 'From AED 1.52M',
        image: '/projects/sobha-central/hero.webp',
        gallery: ['/projects/sobha-central/g1.webp', '/projects/sobha-central/g2.webp', '/projects/sobha-central/g3.webp'],
        url: 'https://sobharealty.com/sobha-communities/sobha-central',
        tagline: 'Central living, redefined on Sheikh Zayed Road.',
        description: [
          'Sobha Central is a mixed-use development of six premium residential towers on Sheikh Zayed Road, adjacent to Jumeirah Lake Towers (JLT). The masterplan combines luxury apartments with a tech-powered retail mall, premium office space, elevated parks and curated lifestyle amenities along Dubai\'s most iconic corridor.',
          'A standout feature is a 360-metre, 95-floor tower described as the tallest residential tower in the JLT area, offering panoramic views and seamless connectivity. Residences are offered as 1- and 2-bedroom luxury apartments.',
        ],
        location: {
          area: 'Sheikh Zayed Road (JLT-adjacent), Dubai',
          nearby: ['Directly on Sheikh Zayed Road', 'Adjacent to Jumeirah Lake Towers (JLT)', 'Close to Dubai Marina and DMCC metro corridor', 'Panoramic city and lake views'],
        },
        unitTypes: 'Apartments across six towers, plus retail and offices',
        sizes: 'Approx. 568 – 1,554 sqft',
        bedrooms: '1–2 bed',
        amenities: ['Tech-powered retail mall', 'Elevated parks and shaded green zones', 'Premium offices and co-working areas', 'Business centre', 'Fitness centres and gym', 'Prayer hall', 'Boutique retail and supermarket', 'Restaurants, cafes and artisanal markets'],
        paymentPlan: '60/40 — 20% on booking, 40% during construction, 40% on handover',
        handover: 'Q4 2029',
      },
      {
        slug: 'sobha-solis',
        name: 'Sobha Solis',
        community: 'Motor City',
        price: 'From AED 1.01M',
        image: '/projects/sobha-solis/hero.webp',
        gallery: ['/projects/sobha-solis/g1.webp', '/projects/sobha-solis/g2.webp', '/projects/sobha-solis/g3.webp'],
        url: 'https://sobharealty.com/sobha-communities/sobha-solis',
        tagline: 'Where every corner pulses with life in Motor City.',
        description: [
          'Sobha Solis is a residential community in Dubai\'s Motor City, comprising four towers connected by an exclusive shared podium. It blends refined living with an active lifestyle, offering 1- to 3-bedroom apartments with views over Dubai Miracle Garden and the Dubai Autodrome.',
          'The project is distinguished by the UAE\'s first Arsenal FC-branded fitness zone, alongside an extensive suite of sports and wellness facilities. Residents enjoy seamless access to Motor City\'s malls, schools, healthcare and entertainment hubs.',
        ],
        location: {
          area: 'Motor City, Dubai',
          nearby: ['Overlooks Dubai Miracle Garden', 'Adjacent to Dubai Autodrome', 'Close to Motor City malls and schools', 'Connectivity to Sheikh Mohammed Bin Zayed Road'],
        },
        unitTypes: 'Apartments across four towers on a shared podium',
        sizes: 'Approx. 536 – 1,889 sqft',
        bedrooms: '1–3 bed',
        amenities: ['Arsenal FC-branded fitness zone (UAE\'s first)', 'Jogging tracks', 'Outdoor sports courts', 'Rock-climbing and parkour zones', 'Yoga and meditation spaces', 'Zen gardens', 'Outdoor cinema', 'Dog park', 'Kids\' play areas', 'Co-working spaces', 'BBQ areas', 'Clubhouse dining and retail'],
        paymentPlan: '60/40 — 20% on booking, 40% during construction, 40% on handover',
        handover: 'Q4 2027',
      },
      {
        slug: 'sobha-orbis',
        name: 'Sobha Orbis',
        community: 'Motor City',
        price: 'From AED 975K',
        image: '/projects/sobha-orbis/hero.jpg',
        gallery: ['/projects/sobha-orbis/g1.jpg', '/projects/sobha-orbis/g2.webp', '/projects/sobha-orbis/g3.webp'],
        url: 'https://sobharealty.com/sobha-communities/sobha-orbis',
        tagline: 'A world in its own, in the heart of Motor City.',
        description: [
          'Sobha Orbis is a luxury residential development of seven towers in Dubai\'s Motor City. Residences feature modern aesthetics, high-quality finishes and thoughtful layouts designed to maximise natural light and deliver panoramic city views.',
          'The community offers 1, 1.5 and 2-bedroom apartments supported by 40+ amenities, including resort-style pools, a lazy river and a landscaped clubhouse. Its location provides quick access to Al Khail Road and the wider Dubai network.',
        ],
        location: {
          area: 'Motor City, Dubai',
          nearby: ['Near Al Khail Road', 'Close to Dubai Autodrome', 'Adjacent to First Avenue Mall', 'Direct connectivity via D63'],
        },
        unitTypes: 'Apartments across seven towers',
        sizes: 'Approx. 530 – 984 sqft',
        bedrooms: '1, 1.5 & 2 bed',
        amenities: ['Resort-style pool', 'Lazy river and jacuzzis', 'Beach-edge pools with cabana shades', 'Yoga areas', 'State-of-the-art fitness centre', 'Clubhouse', 'Children\'s play areas', 'Landscaped gardens', 'Food and beverage street', 'Retail and dining zone'],
        paymentPlan: '60/40 — 20% on booking, 40% during construction, 40% on handover',
        handover: 'Q4 2027',
      },
      {
        slug: 'sobha-elwood',
        name: 'Sobha Elwood',
        community: 'Al Ain Road',
        price: 'From AED 9.93M',
        image: '/projects/sobha-elwood/hero.jpg',
        gallery: ['/projects/sobha-elwood/g1.jpg', '/projects/sobha-elwood/g2.webp', '/projects/sobha-elwood/g3.jpg'],
        url: 'https://sobharealty.com/sobha-communities/sobha-elwood',
        tagline: 'The canvas of nature — a forest-inspired villa community.',
        description: [
          'Sobha Elwood is a 10-million-sq-ft luxury villa community on Al Ain Road, featuring 4-, 5- and 6-bedroom villas set within a serene, sustainable environment. The landscaping is inspired by the world\'s seven largest forests, from the Baobab to the Amazon, with over 10,000 trees across 26% of the site and 47% dedicated to open spaces and parks.',
          'Designed as a family-focused gated community, Elwood combines spacious, light-filled villa layouts with eco-friendly living. Amenities include an on-site school, sports facilities, a sports cafe, and extensive walking and cycling trails.',
        ],
        location: {
          area: 'Al Ain Road (Dubailand), Dubai',
          nearby: ['Direct access to Al Ain Road (E66)', 'Within the Dubailand area', 'Connectivity to Dubai\'s major road network', 'Access to public transport options'],
        },
        unitTypes: 'Independent villas and mansions',
        sizes: 'Approx. 4,968 – 7,193 sqft built-up',
        bedrooms: '4–6 bed',
        amenities: ['Over 10,000 trees and forest-inspired landscaping', 'On-site school', 'Walking trails and cycling paths', 'Sports facilities', 'Sports cafe', 'Recreational parks', 'Extensive open green spaces (47% of site)', 'Family-friendly community facilities'],
        paymentPlan: '60/40 — 20% on booking, 40% during construction, 40% on handover',
        handover: 'On request',
      },
    ],
  },
  {
    slug: 'binghatti',
    name: 'Binghatti',
    tagline: 'Fast-moving, standout modern buildings.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    brochuresUrl: 'https://www.binghatti.com/en/projects',
    projects: [
      {
        slug: 'binghatti-wraith',
        name: 'Binghatti Wraith',
        community: 'Al Jaddaf',
        price: 'From AED 800K',
        image: '/projects/binghatti-wraith/hero.webp',
        gallery: ['/projects/binghatti-wraith/g1.webp', '/projects/binghatti-wraith/g2.webp', '/projects/binghatti-wraith/g3.webp'],
        url: 'https://www.binghatti.com/en/projects/binghatti-wraith',
        tagline: 'Crystalline glass living minutes from Downtown Dubai.',
        description: [
          'Binghatti Wraith is a residential tower in Al Jaddaf, Dubai, by Binghatti Developers, distinguished by striking crystalline glass facades and panoramic views toward landmarks such as the Burj Khalifa and the Dubai Frame. The building rises across a ground floor, four podium levels and fourteen residential floors, with ground-floor retail.',
          'The development offers studios, 1, 2 and 3-bedroom apartments in a well-connected location — roughly 6 minutes from Downtown Dubai and 8 minutes from Dubai International Airport. It launched in 2026 with starting prices from AED 799,999.',
        ],
        location: {
          area: 'Al Jaddaf, Dubai',
          nearby: ['Downtown Dubai — 6 minutes', 'Dubai International Airport — 8 minutes', 'DIFC — 10 minutes', 'Dubai Healthcare City and Sheikh Zayed Road access', 'Dubai Design District (D3) nearby'],
        },
        unitTypes: 'Studios, 1, 2 & 3-bedroom apartments; ground-floor retail',
        sizes: 'On request',
        bedrooms: 'Studio to 3 bed',
        amenities: ['Infinity pool, jacuzzi & private cabanas', 'Spa & wellness area', 'Gym & fitness centre', 'Yoga deck', 'Padel court', 'Half basketball court', 'Palm promenade & landscaped gardens', 'Family BBQ area', 'Children\'s play areas', 'EV charging stations'],
        paymentPlan: 'On request',
        handover: 'On request',
      },
      {
        slug: 'burj-binghatti-jacob-and-co',
        name: 'Burj Binghatti Jacob & Co',
        community: 'Business Bay',
        price: 'From AED 8.4M',
        image: '/projects/burj-binghatti-jacob-and-co/hero.webp',
        gallery: ['/projects/burj-binghatti-jacob-and-co/g1.webp', '/projects/burj-binghatti-jacob-and-co/g2.webp', '/projects/burj-binghatti-jacob-and-co/g3.webp'],
        url: 'https://www.binghatti.com/en/branded-projects/burj-binghatti-jacob-co-residences',
        tagline: 'The world\'s tallest residential tower, by Jacob & Co.',
        description: [
          'Burj Binghatti Jacob & Co Residences is a hyper-tower branded residence in Business Bay, Dubai, developed by Binghatti in partnership with luxury watchmaker Jacob & Co. Billed as the world\'s tallest residential tower, its architecture draws on haute horology craftsmanship and Jacob-cut gemstone aesthetics, crowned by an apex built with high-strength alloys and composites.',
          'The tower houses ultra-luxury two- to seven-bedroom residences, mansions and penthouses — including signature units such as the Sapphire, Emerald and Ruby Villas and the Astronomia and Fleur de Jardin Sky Mansions. Many residences feature private pools and bespoke branded interiors.',
        ],
        location: {
          area: 'Business Bay, Dubai',
          nearby: ['Dubai Water Canal frontage', 'Downtown Dubai & Burj Khalifa nearby', 'Dubai Mall a short drive away', 'DIFC nearby', 'Sheikh Zayed Road access'],
        },
        unitTypes: 'Branded apartments, villas, sky mansions & penthouses',
        sizes: 'Approx. 3,300 – 22,000+ sqft',
        bedrooms: '2 to 7 bed',
        amenities: ['Private pools in select residences', 'Branded luxury interiors and finishes', 'Concierge services', 'Wellness and spa facilities', 'Fitness centre', 'Valet parking', 'Fine-dining and lounge spaces', 'Sky-high panoramic city and canal views'],
        paymentPlan: 'On request',
        handover: 'On request',
      },
      {
        slug: 'mercedes-benz-places-binghatti',
        name: 'Mercedes-Benz Places · Binghatti City',
        community: 'Nad Al Sheba',
        price: 'From AED 1.6M',
        image: '/projects/mercedes-benz-places-binghatti/hero.webp',
        gallery: ['/projects/mercedes-benz-places-binghatti/g1.webp', '/projects/mercedes-benz-places-binghatti/g2.webp', '/projects/mercedes-benz-places-binghatti/g3.webp'],
        url: 'https://www.binghatti.com/en/branded-projects/mercedes-benz-places-binghatti-city',
        tagline: 'The world\'s first Mercedes-Benz branded residential city.',
        description: [
          'Mercedes-Benz Places Binghatti City is the world\'s first Mercedes-Benz branded residential city, located in Nad Al Sheba (Meydan), Dubai. Developed by Binghatti with Mercedes-Benz, the master-planned community is anchored by a signature iconic tower and a central park offering 12 distinct experiences, with architecture inspired by Mercedes-Benz design DNA.',
          'The community offers studios through five-bedroom apartments, with prices starting from AED 1,599,999. Set in Meydan, it sits about 10 minutes from Dubai Mall and Business Bay and 15 minutes from Dubai International Airport, and is delivered across phases.',
        ],
        location: {
          area: 'Nad Al Sheba (Meydan), Dubai',
          nearby: ['Ras Al Khor Wildlife Sanctuary — 5 minutes', 'Dubai Design District — 8 minutes', 'Dubai Mall — 10 minutes', 'Business Bay — 10 minutes', 'Dubai International Airport — 15 minutes'],
        },
        unitTypes: 'Studios, 1, 2, 3, 4 & 5-bedroom apartments',
        sizes: 'From approx. 362 sqft (studio) to 1,321+ sqft (3-bed)',
        bedrooms: 'Studio to 5 bed',
        amenities: ['Central park with 12 themed experiences', 'Signature iconic tower', 'Swimming pools', 'Fitness and wellness centres', 'Landscaped gardens and green spaces', 'Retail and dining outlets', 'Children\'s play areas', 'Jogging and walking trails', 'Premium concierge facilities', 'EV charging infrastructure'],
        paymentPlan: '20% down, 50% during construction, 30% on completion',
        handover: 'On request',
      },
      {
        slug: 'binghatti-skyrise',
        name: 'Binghatti Skyrise',
        community: 'Business Bay',
        price: 'From AED 1.05M',
        image: '/projects/binghatti-skyrise/hero.webp',
        gallery: ['/projects/binghatti-skyrise/g1.webp', '/projects/binghatti-skyrise/g2.webp', '/projects/binghatti-skyrise/g3.webp'],
        url: 'https://www.binghatti.com/en/projects/binghatti-skyrise',
        tagline: 'Three diamond-crowned towers in the heart of Business Bay.',
        description: [
          'Binghatti Skyrise is a landmark Business Bay development by Binghatti Developers, comprising three 48-storey towers topped with distinctive diamond-shaped crowns. The towers sit on a shared podium with four basement levels, ground floor, five podium levels and rooftop, near the Dubai Canal.',
          'The project offers studios and 1, 2 and 3-bedroom apartments, most delivered unfurnished, with prices starting from AED 1,050,000. Its central position places residents minutes from the Burj Khalifa, Dubai Mall, Dubai Opera and DIFC.',
        ],
        location: {
          area: 'Business Bay, Dubai',
          nearby: ['Burj Khalifa & Dubai Mall — minutes away', 'Downtown Dubai', 'Dubai Opera', 'Dubai Canal', 'DIFC and Dubai Design District'],
        },
        unitTypes: 'Studios, 1, 2 & 3-bedroom apartments',
        sizes: 'From approx. 831 sqft (1-bedroom)',
        bedrooms: 'Studio to 3 bed',
        amenities: ['Infinity pool', 'Outdoor seating areas', 'Grand lobby spaces', 'Fitness centre', 'Landscaped podium deck', 'Children\'s play area', 'Retail spaces', 'Panoramic Downtown and Canal views'],
        paymentPlan: '20% on booking, 50% during construction, 30% on completion',
        handover: 'Q4 2026',
      },
      {
        slug: 'binghatti-skyterraces',
        name: 'Binghatti Skyterraces',
        community: 'Motor City',
        price: 'From AED 775K',
        image: '/projects/binghatti-skyterraces/hero.webp',
        gallery: ['/projects/binghatti-skyterraces/g1.webp', '/projects/binghatti-skyterraces/g2.webp', '/projects/binghatti-skyterraces/g3.webp'],
        url: 'https://www.binghatti.com/en/projects/binghatti-skyterraces',
        tagline: 'Green-terraced skyline living in Dubai Motor City.',
        description: [
          'Binghatti Skyterraces is a 40-storey residential tower in Motor City, Dubai — among the tallest in the area — built across two basement levels, ground floor, six podium levels, two mechanical floors and a rooftop. The "Architectural Intelligence" design delivers green terraces and panoramic skyline views, with around 1,840 apartments plus retail.',
          'The development offers studios and 1, 2 and 3-bedroom apartments from AED 774,999, with a marketed ROI of up to 8%. Positioned off Sheikh Zayed Road, it is roughly 12 minutes from Dubai Hills Mall and 17 minutes from Dubai Marina.',
        ],
        location: {
          area: 'Motor City, Dubai',
          nearby: ['Dubai Hills Mall — 12 minutes', 'Mall of the Emirates — 15 minutes', 'Dubai Marina — 17 minutes', 'Dubai International Airport — 25 minutes', 'Emirates Road & Sheikh Mohammed Bin Zayed Road access'],
        },
        unitTypes: 'Studios, 1, 2 & 3-bedroom apartments; retail spaces',
        sizes: 'Approx. 570 sqft (1-bed) to 2,521 sqft (3-bed)',
        bedrooms: 'Studio to 3 bed',
        amenities: ['Adult, shallow and kids swimming pools', 'Kids play area', 'Jogging track', 'Family sitting zone', 'Padel court', 'Green terraces', 'Yoga area', 'Indoor gym', 'Landscaped walkways and benches', 'Retail and commercial spaces'],
        paymentPlan: 'On request',
        handover: 'On request',
      },
    ],
  },
  {
    slug: 'nakheel',
    name: 'Nakheel',
    tagline: 'The master developer behind Palm Jumeirah and Dubai\'s iconic waterfronts.',
    image: '/developers/nakheel.jpg',
    brochuresUrl: 'https://www.nakheel.com/en/new-launches',
    projects: [
      {
        slug: 'palm-jebel-ali',
        name: 'Palm Jebel Ali',
        community: 'Palm Jebel Ali',
        price: 'From AED 18.6M',
        image: '/projects/palm-jebel-ali/hero.jpg',
        gallery: ['/projects/palm-jebel-ali/g1.jpg', '/projects/palm-jebel-ali/g2.jpg', '/projects/palm-jebel-ali/g3.jpg'],
        url: 'https://www.nakheel.com/en/developments/nakheel-collections/palmjebelali',
        tagline: 'A palm-shaped island of waterfront villas and resort living.',
        description: [
          'Palm Jebel Ali is Nakheel\'s second palm-shaped island off Dubai\'s coast, master-planned as a global lifestyle destination that harmonises sand, water and nature. The development centres on low-density waterfront villas with floor-to-ceiling windows, soft neutral interior palettes and luxury finishes, set along wide walkable streets with pocket parks and shaded landscaping.',
          'The island is designed as a resort-style community combining residential fronds with hotels, beach clubs, a yacht club and lifestyle retail. Current offerings include luxury beachfront and waterfront villa collections, alongside Palm Central Private Residences — contemporary resort-style apartments across three buildings within the island.',
        ],
        location: {
          area: 'Palm Jebel Ali, Dubai',
          nearby: ['16 min from Life Pharmacy Metro Station', '19 min from Ibn Battuta Mall', '24 min from Al Maktoum International Airport (DWC)', '24 min from Expo City', '27 min from Palm Jumeirah'],
        },
        unitTypes: 'Villas and apartments',
        sizes: 'On request',
        bedrooms: '5 to 7 bed villas; apartments available',
        amenities: ['Private beach access', 'Beach clubs', 'Yacht club', 'Waterfront promenade', 'Hotels & resorts', 'Lifestyle malls', 'Leisure parks', 'Sports & wellness facilities', 'Landscaped pocket parks', 'Wide tree-shaded streets'],
        paymentPlan: '80/20 — 20% down, 60% during construction, 20% on handover',
        handover: 'Q1 2027',
      },
      {
        slug: 'dubai-islands',
        name: 'Dubai Islands',
        community: 'Dubai Islands',
        price: 'From AED 4M',
        image: '/projects/dubai-islands/hero.jpg',
        gallery: ['/projects/dubai-islands/g1.jpg', '/projects/dubai-islands/g2.jpg', '/projects/dubai-islands/g3.jpg'],
        url: 'https://www.nakheel.com/en/developments/nakheel-collections/dubaiislands',
        tagline: 'Five connected islands blending waterfront living with Arabian splendour.',
        description: [
          'Dubai Islands is a Nakheel waterfront master community off the coast of Deira, made up of five islands: Central, Marina, Shore, Golf and Elite. It offers over 60 kilometres of waterfront, more than 20 kilometres of beaches including a Blue Flag-certified beach, and nearly two kilometres of parks and open spaces.',
          'The islands combine residential and resort communities with retail, cultural, leisure and wellness experiences, plus golf courses overlooking the Arabian Gulf. Connected to the mainland via the Infinity Bridge and linked internally by bridges and water transport, the destination stays close to the city yet keeps an island character. Flagship projects include Bay Villas, Bay Grove Residences and Rixos Hotel & Residences.',
        ],
        location: {
          area: 'Dubai Islands (off Deira), Dubai',
          nearby: ['10 min from Gold Souq Metro Station', '20 min from Dubai International Airport', '22 min from The Dubai Frame', '24 min from Downtown Dubai', '24 min from Dubai World Trade Centre'],
        },
        unitTypes: 'Apartments, townhouses, villas and penthouses',
        sizes: 'From approx. 317 sqm (3-bed townhouse) to 622 sqm (5-bed villa)',
        bedrooms: 'Studios to 5+ bed',
        amenities: ['Blue Flag-certified beaches', 'Golf courses', 'Hotels & resorts', 'Parks and open spaces', 'Souk Al Marfa', 'Shopping centres', 'Restaurants & cafés', 'Entertainment hubs', 'Wellness facilities', 'Marina and water transport'],
        paymentPlan: '80/20 — 20% down, 60% during construction, 20% on handover',
        handover: 'Q2 2027',
      },
      {
        slug: 'palm-jumeirah',
        name: 'Palm Jumeirah',
        community: 'Palm Jumeirah',
        price: 'On request',
        image: '/projects/palm-jumeirah/hero.jpg',
        gallery: ['/projects/palm-jumeirah/g1.jpg', '/projects/palm-jumeirah/g2.jpg', '/projects/palm-jumeirah/g3.jpg'],
        url: 'https://www.nakheel.com/en/communities/palm-jumeirah',
        tagline: 'Dubai\'s iconic palm-shaped island of beachfront homes and resorts.',
        description: [
          'Palm Jumeirah is Nakheel\'s pioneering man-made island, stretching five kilometres into the Arabian Gulf and covering 560 hectares. Launched in 2001, it is one of the world\'s largest man-made islands and home to roughly 25,000 residents across three areas: the Trunk, the Fronds and the Crescent.',
          'The island is an award-winning destination offering apartments, penthouses, villas and townhouses alongside luxury hotels, beach clubs, marinas and retail. Landmarks include Nakheel Mall, The View at The Palm observation deck, Al Ittihad Park and the Palm Monorail — the Middle East\'s first monorail system.',
        ],
        location: {
          area: 'Palm Jumeirah, Dubai',
          nearby: ['Nakheel Mall and The View at The Palm on the island', 'Al Ittihad Park and the Palm Monorail', 'Close to Dubai Marina and JBR', 'Direct access to Sheikh Zayed Road via the trunk', 'Atlantis and Crescent luxury resorts'],
        },
        unitTypes: 'Apartments, penthouses, villas and townhouses',
        sizes: 'On request',
        bedrooms: 'Studios to 5+ bed and penthouses',
        amenities: ['Private beaches', 'Beach clubs', 'Nakheel Marinas', 'Palm Monorail', 'The View at The Palm', 'Nakheel Mall', 'Al Ittihad Park', 'Hotels & resorts', 'Restaurants & cafés', 'Sub-sea tunnel access'],
        paymentPlan: 'On request',
        handover: 'Completed',
      },
      {
        slug: 'jebel-ali-village',
        name: 'Jebel Ali Village',
        community: 'Jebel Ali Village',
        price: 'From AED 4.25M',
        image: '/projects/jebel-ali-village/hero.jpg',
        gallery: ['/projects/jebel-ali-village/g1.jpg', '/projects/jebel-ali-village/g2.jpg', '/projects/jebel-ali-village/g3.jpg'],
        url: 'https://www.nakheel.com/en/construction-progress/jebel-ali-village',
        tagline: 'Family-oriented gated community of villas and townhouses amid green spaces.',
        description: [
          'Jebel Ali Village is a Nakheel townhouse and villa community in the established Jebel Ali district, designed around 80 hectares of green spaces, large open parks and water features. The 3 and 4-bedroom townhouses range from approximately 267 to 314 sqm and feature a ground-floor guest suite, en-suite bathrooms, built-in wardrobes, a maid\'s room, a laundry room and a two-car garage.',
          'The family-focused master plan offers urban community amenities including jogging and biking trails, a community vegetable farm, swimming pools, kids\' play areas, and sports facilities such as a five-a-side football pitch, padel and basketball courts.',
        ],
        location: {
          area: 'Jebel Ali Village, Jebel Ali, Dubai',
          nearby: ['5 min from Discovery Gardens Metro Station', '9 min from Ibn Battuta Mall', '16 min from Palm Jumeirah', '28 min from Downtown Dubai', '1 min to the nearest mosque'],
        },
        unitTypes: 'Villas and townhouses',
        sizes: 'Townhouses approx. 267–314 sqm (≈ 2,870–3,380 sqft)',
        bedrooms: '3 and 4 bed',
        amenities: ['Children\'s play areas', 'Sports courts (padel, basketball, five-a-side football)', 'Cycling track', 'Off-road mountain bike trails', 'Green trails and jogging tracks', 'Community vegetable farm', 'Swimming pools', 'Duck pond', 'Parks and green spaces', 'Jebel Ali Recreation Club'],
        paymentPlan: 'On request',
        handover: 'Completed',
      },
    ],
  },
  {
    slug: 'ellington',
    name: 'Ellington Properties',
    tagline: 'Dubai\'s design-led developer of art-inspired luxury homes.',
    image: '/developers/ellington.jpg',
    brochuresUrl: 'https://ellingtonproperties.ae/en',
    projects: [
      {
        slug: 'everly-place',
        name: 'Everly Place',
        community: 'Mohammed Bin Rashid City',
        price: 'From AED 1.9M',
        image: '/projects/everly-place/hero.jpg',
        gallery: ['/projects/everly-place/g1.jpg', '/projects/everly-place/g2.jpg'],
        url: 'https://ellingtonproperties.ae/en/property-for-sale/everly-place-mohammed-bin-rashid-city',
        tagline: 'Life composed around the crystal lagoon in MBR City.',
        description: [
          'Everly Place is a boutique residential development by Ellington Properties in Meydan Horizon, Mohammed Bin Rashid City, set directly alongside the area\'s crystal lagoon. The U-shaped, 13-storey tower curves around the water to capture light and lagoon views from every angle, delivering 209 design-led residences plus ground-floor retail. Homes feature open layouts, floor-to-ceiling windows and generous outdoor living spaces that draw the surrounding views indoors, reflecting Ellington\'s signature design-first approach.',
          'The collection spans 1 and 2-bedroom apartments, 1 and 2-bedroom residences with study, and 3-bedroom homes with study, all freehold. Amenities include an infinity pool overlooking the lagoon, a club lounge with bowling alley, cafe bar, coworking and gaming spaces, fitness and yoga studios, spa-inspired changing rooms, an outdoor cinema, BBQ and entertainment areas, kids\' play areas and landscaped podium gardens. Curated art installations by local artists are woven throughout the development.',
        ],
        location: {
          area: 'Meydan Horizon, Mohammed Bin Rashid City',
          nearby: ['Meydan Grandstand — 11 min', 'Dubai Design District — 13 min', 'Dubai Festival City Mall — 14 min', 'Dubai International Airport — 15 min', 'Burj Khalifa / Dubai Mall — 16 min', 'DIFC — 18 min'],
        },
        unitTypes: '1, 2 & 3-bedroom apartments (with study options)',
        sizes: 'From approx. 850 sqft',
        bedrooms: '1 to 3 bed',
        amenities: ['Infinity pool overlooking the lagoon', 'Shaded kids\' pool', 'Club lounge with bowling alley', 'Cafe bar and coworking spaces', 'Fitness studio and yoga studio', 'Spa-inspired changing rooms with sauna and chromotherapy showers', 'Outdoor cinema', 'BBQ and entertainment areas', 'Cabanas and shaded lounge seating', 'Indoor and outdoor kids\' play areas', 'Landscaped podium gardens', 'Concierge services'],
        paymentPlan: '70/30 — 20% on booking, 50% during construction, 30% on handover',
        handover: 'Q2 2030',
      },
      {
        slug: 'the-meriva',
        name: 'The Meriva',
        community: 'Dubai Islands',
        price: 'From AED 2.7M',
        image: '/projects/the-meriva/hero.jpg',
        gallery: ['/projects/the-meriva/g1.jpg', '/projects/the-meriva/g2.jpg', '/projects/the-meriva/g3.jpg'],
        url: 'https://ellingtonproperties.ae/en/property-for-sale/the-meriva-collection-dubai-islands',
        tagline: 'An elite beachfront community on Dubai Islands.',
        description: [
          'The Meriva Collection by Ellington Properties is a hospitality-led beachfront destination on Island B of Dubai Islands. Comprising five premium residential buildings, a signature beachfront residence, and a dedicated hotel, the development offers direct beach access and low-density waterfront living. Designed by Dubai\'s leading design-led developer, it delivers a refined coastal lifestyle framed by sweeping ocean horizons, resort-style amenities, and elegant interiors crafted for tranquil seaside living.',
          'Residences range from premium one- and two-bedroom apartments to two-bedroom layouts with studies, three-bedroom homes, and a limited collection of three- and four-bedroom penthouses. Built-up areas span 832 to 4,617 sqft. Residents enjoy indoor and outdoor pools, fitness, yoga and Pilates studios, a 2km jogging track, wellness zones, a jazz club, coworking spaces, F&B areas, mini golf, and paddle tennis, all set within a serene beachfront enclave.',
        ],
        location: {
          area: 'Dubai Islands (Island B)',
          nearby: ['Dubai Islands Mall — 5 min', 'Dubai International Airport — 18 min', 'Dubai Festival City — 18 min', 'Port Rashid — 20 min', 'Museum of the Future — 25 min', 'DIFC — 30 min', 'Burj Khalifa / Dubai Mall — 35 min', 'Palm Jumeirah — 45 min'],
        },
        unitTypes: '1, 2, 3 & 4-bedroom apartments and penthouses',
        sizes: '832 – 4,617 sqft',
        bedrooms: '1 to 4 bed',
        amenities: ['Indoor and outdoor swimming pools', 'Adult and kids\' pools', 'Fitness, yoga and Pilates studios', '2km jogging track', 'Paddle tennis and table tennis', 'Mini golf', 'Lagoon water features', 'Jazz club', 'Coworking and F&B areas', 'Juice bar', 'Kids\' play areas', 'BBQ facilities and outdoor seating', 'Pet park', 'Guest parking with EV chargers'],
        paymentPlan: '70/30 — 10% down payment',
        handover: 'Q2 2030',
      },
      {
        slug: 'portside-square',
        name: 'Portside Square',
        community: 'Mina Rashid',
        price: 'From AED 1.1M',
        image: '/projects/portside-square/hero.jpg',
        gallery: ['/projects/portside-square/g1.jpg', '/projects/portside-square/g2.jpg', '/projects/portside-square/g3.jpg'],
        url: 'https://ellingtonproperties.ae/en/property-for-sale/portside-square-mina-rashid',
        tagline: 'A waterfront landmark at Rashid Yachts & Marina.',
        description: [
          'Portside Square is Ellington Properties\' waterfront landmark in Mina Rashid (Rashid Yachts & Marina), reimagining Dubai\'s historic harbour into a contemporary residential destination. The development comprises three sculptural towers housing 408 freehold homes, ranging from studios and 1, 2 and 3-bedroom apartments to four-bedroom penthouses and duplexes. Select two-bedroom and all three-bedroom layouts include an additional study, blending maritime heritage with refined modern design.',
          'At its heart sits a four-storey glass Pavilion offering a cafe, library, co-working areas, cinema, gaming and arcade lounges, and family zones, alongside leisure and kids\' pools and a dedicated wellness spa with steam room, sauna and aromatherapy. Positioned beside the marina, residents are minutes from Sheikh Zayed Road, Downtown Dubai, DIFC and Dubai International Airport, with every home allocated at least one parking space.',
        ],
        location: {
          area: 'Mina Rashid (Rashid Yachts & Marina), Dubai',
          nearby: ['Mina Rashid Marina — 2 min', 'Queen Elizabeth 2 — 1 min', 'Sheikh Zayed Road — 6 min', 'Downtown Dubai & Burj Khalifa — 10 min', 'Dubai International Airport (DXB) — 10 min', 'DIFC — 14 min', 'Palm Jumeirah — 20 min', 'Dubai Marina — 25 min'],
        },
        unitTypes: 'Studios, 1, 2 & 3-bedroom apartments (with study) and 4-bedroom penthouses',
        sizes: '396 – 3,441 sqft',
        bedrooms: 'Studio to 4 bed',
        amenities: ['Four-storey glass Pavilion', 'Leisure pool & kids pool', 'Wellness spa, steam room & sauna', 'Fitness studio', 'Yoga & pilates studio', 'Cinema', 'Co-working spaces', 'Library & cafe', 'Indoor & outdoor kids play areas', 'Gaming, arcade & billiards lounges', 'Clubhouse & lobby lounge', 'Green terraces', 'EV charging stations', 'Bicycle parking'],
        paymentPlan: '70/30 — 20% on booking, 50% during construction, 30% on handover',
        handover: 'Q4 2029',
      },
      {
        slug: 'belgravia-gardens',
        name: 'Belgravia Gardens',
        community: 'Dubailand',
        price: 'From AED 1.9M',
        image: '/projects/belgravia-gardens/hero.jpg',
        url: 'https://ellingtonproperties.ae/en/property-for-sale/belgravia-gardens-dubailand',
        tagline: 'A community crafted for every lifestyle in Dubailand.',
        description: [
          'Belgravia Gardens is a premium residential development by Ellington Properties set in the heart of Dubailand. Spread across a sprawling masterplan of low-rise towers, it comprises thoughtfully designed studio to three-bedroom apartments arranged in four clusters, each centred on its own pool overlooking a vibrant communal hub. The architecture reflects Ellington\'s signature design-led approach, blending refined interiors with abundant green spaces and resort-style living.',
          'Residents enjoy a curated collection of lifestyle amenities including a clubhouse, lazy river, urban beach club, mini-golf and landscaped gardens. The location offers quick connectivity via Sheikh Mohammed Bin Zayed Road and Al Ain Road, placing IMG Worlds of Adventure, Global Village and Silicon Central Mall within minutes. With a flexible 70/30 payment plan and handover scheduled for Q3 2028, it appeals to both end-users and investors.',
        ],
        location: {
          area: 'Dubailand, Dubai',
          nearby: ['IMG Worlds of Adventure — 5 min', 'Global Village — 10 min', 'Silicon Central Mall — 10 min', 'Cityland Mall — 11 min', 'Al Habtoor Polo Club — 11 min', 'Dubai Miracle Garden — 16 min', 'Dubai International Airport — 30 min'],
        },
        unitTypes: 'Studio, 1, 2 & 3-bedroom apartments',
        sizes: 'Approx. 427 – 2,561 sqft',
        bedrooms: 'Studio to 3 bed',
        amenities: ['Clubhouse', 'Lap pools', 'Lazy river', 'Urban beach club', 'Outdoor fitness & yoga/pilates studio', 'Mini-golf', 'Half-basketball court', 'Jogging tracks', 'Kids\' play areas', 'Dog park', 'Cinema room', 'Sauna', 'Barbeque deck & outdoor dining', 'Retail outlets'],
        paymentPlan: '70/30 — 20% down, 50% during construction, 30% on handover',
        handover: 'Q3 2028',
      },
      {
        slug: 'one-river-point',
        name: 'One River Point',
        community: 'Business Bay',
        price: 'From AED 1.4M',
        image: '/projects/one-river-point/hero.jpg',
        gallery: ['/projects/one-river-point/g1.jpg', '/projects/one-river-point/g2.jpg', '/projects/one-river-point/g3.jpg'],
        url: 'https://ellingtonproperties.ae/en/property-for-sale/one-river-point-business-bay',
        tagline: 'Waterfront Business Bay living overlooking the Dubai Canal.',
        description: [
          'One River Point is Ellington Properties\' design-led residential tower in Business Bay, rising along the Dubai Water Canal. Developed in collaboration with the Dutco Group, the landmark offers around 450 homes positioned to capture views of the canal, the waterfront promenade and the iconic Burj Khalifa, blending refined contemporary architecture with Ellington\'s signature interiors and curated lifestyle amenities.',
          'The collection spans studios through four-bedroom apartments, plus a limited run of penthouses and duplexes with private pools. Residents enjoy a beach-club style pool, fitness and yoga studios, an immersive room, a river clubhouse with co-working spaces, landscaped terraces, kids\' play areas and direct access to the canal boardwalk. Its central Business Bay address places Downtown Dubai, DIFC and major road links within easy reach.',
        ],
        location: {
          area: 'Business Bay, Dubai',
          nearby: ['The Dubai Mall — 5 min', 'Burj Khalifa / Downtown Dubai — 5 min', 'DIFC — 15 min', 'Burj Al Arab — 15 min', 'Dubai International Airport — 20 min', 'Dubai Marina — 25 min'],
        },
        unitTypes: 'Studios, 1, 2, 3 & 4-bedroom apartments, penthouses and duplexes',
        sizes: 'On request',
        bedrooms: 'Studio to 4 bed',
        amenities: ['Beach-club style swimming pool', 'Fitness studio and gymnasium', 'Yoga studio', 'Immersive room and visual media room', 'River clubhouse with co-working spaces', 'Coffee shop and dining lounge', 'Dubai Water Canal boardwalk access', 'Kids\' play area and children\'s arena', 'Climbing net and multi-sports room', 'Landscaped gardens and terraces'],
        paymentPlan: '70/30 — 20% down, 50% during construction, 30% on handover',
        handover: 'Q2 2027',
      },
    ],
  },
  {
    slug: 'meraas',
    name: 'Meraas',
    tagline: 'The master developer behind City Walk, Bluewaters and La Mer.',
    image: '/developers/meraas.jpg',
    brochuresUrl: 'https://meraas.com/en',
    projects: [
      {
        slug: 'city-walk-crestlane',
        name: 'City Walk Crestlane',
        community: 'City Walk',
        price: 'From AED 2.6M',
        image: '/projects/city-walk-crestlane/hero.jpg',
        gallery: ['/projects/city-walk-crestlane/g1.jpg', '/projects/city-walk-crestlane/g2.jpg', '/projects/city-walk-crestlane/g3.jpg'],
        url: 'https://meraas.com/en/project/city-walk-crestlane',
        tagline: 'Waterfront-inspired luxury apartments and duplexes in vibrant City Walk.',
        description: [
          'City Walk Crestlane is a premium waterfront-inspired residential community by Meraas, the developer behind Dubai\'s most iconic destinations. Set within the lively City Walk district, it blends the energy of urban living with the calm of water features and lush landscaping. The collection offers thoughtfully designed apartments and duplexes with panoramic views, contemporary architecture, and an exclusive lifestyle just minutes from Downtown Dubai and Jumeirah Beach.',
          'Residents enjoy resort-style amenities including swimming pools, a state-of-the-art fitness centre, sports courts, jogging tracks, kids\' play areas, yoga and event lawns, and serene community hubs. Its walkable setting places retail, dining, and entertainment at the doorstep, while Sheikh Zayed Road ensures easy connectivity across the city. Crestlane delivers an elevated urban retreat combining wellness, leisure, and refined modern design in one of Dubai\'s most sought-after central locations.',
        ],
        location: {
          area: 'City Walk, Al Wasl',
          nearby: ['City Walk Mall — 2 min', 'Sheikh Zayed Road — 3 min', 'Jumeirah Beach — 7 min', 'Dubai Mall — 7 min', 'DIFC — 11 min', 'Dubai International Airport — 15 min'],
        },
        unitTypes: '1, 2, 3 & 4-bedroom apartments and duplexes',
        sizes: '787 – 4,986 sqft',
        bedrooms: '1 to 4 bed',
        amenities: ['Swimming pools', 'State-of-the-art fitness centre', 'Sports courts', 'Jogging tracks', 'Kids\' play areas', 'Yoga and exercise lawns', 'Event lawns', 'Water features', 'Outdoor fitness stations', 'Community hubs'],
        paymentPlan: '75/25 — 20% on booking, 55% during construction, 25% on handover',
        handover: 'Q4 2028',
      },
      {
        slug: 'the-acres',
        name: 'The Acres',
        community: 'Dubailand',
        price: 'From AED 5.09M',
        image: '/projects/the-acres/hero.jpg',
        gallery: ['/projects/the-acres/g1.jpg', '/projects/the-acres/g2.jpg', '/projects/the-acres/g3.jpg'],
        url: 'https://meraas.com/en/project/the-acres-villas',
        tagline: 'Standalone villas wrapped in swimmable lagoons and green gardens.',
        description: [
          'The Acres is Meraas\' standalone villa community in the heart of Dubailand, offering contemporary 3, 4 and 5-bedroom homes set amid swimmable lagoons, natural parks and themed gardens. Designed with open-plan layouts, double-height living spaces, floor-to-ceiling windows and signature outdoor rooms, the villas blend modern architecture with nature. The masterplan holds LEED Gold for Communities pre-certification, targeting major reductions in emissions and water use.',
          'Centrally positioned with direct access to Sheikh Zayed Bin Hamdan Al Nahyan Street and Emirates Road, the community connects easily to Dubai\'s key destinations. Residents enjoy a clubhouse, retail promenade, primary school, mosque, jogging and cycling tracks, edible and lost gardens, and floating decks over the lagoons. Flexible payment terms and a tranquil, family-focused environment make The Acres a distinctive low-rise alternative to apartment living in Dubai.',
        ],
        location: {
          area: 'Dubailand',
          nearby: ['Sheikh Mohammed Bin Zayed Road — 5 min', 'Dubai Polo & Equestrian Club — 5 min', 'Hamdan Sports Complex — 5 min', 'Global Village — 10 min', 'Dubai Hills Estate Mall — 15 min', 'Downtown Dubai — 25 min', 'Dubai International Airport — 25 min'],
        },
        unitTypes: '3, 4 & 5-bedroom standalone villas',
        sizes: 'Approx. 3,050 – 7,400 sqft',
        bedrooms: '3 to 5 bed',
        amenities: ['Swimmable lagoons & floating decks', 'Community parks & green network', 'Clubhouse & lagoon clubhouse', 'Retail promenade (Ripe Market)', 'Primary school & kindergarten', 'Mosque', 'Jogging & cycling tracks', 'Outdoor fitness areas', 'Edible Garden & al fresco dining', 'Lost Garden trails & treehouses'],
        paymentPlan: '10% down, 55% during construction, 35% on handover',
        handover: 'Q1 2028',
      },
      {
        slug: 'nad-al-sheba-gardens',
        name: 'Nad Al Sheba Gardens',
        community: 'Nad Al Sheba',
        price: 'From AED 5M',
        image: '/projects/nad-al-sheba-gardens/hero.jpg',
        gallery: ['/projects/nad-al-sheba-gardens/g1.jpg', '/projects/nad-al-sheba-gardens/g2.jpg', '/projects/nad-al-sheba-gardens/g3.jpg'],
        url: 'https://meraas.com/en/master-development/nad-al-sheba-gardens',
        tagline: 'Private gated villa community minutes from Downtown Dubai.',
        description: [
          'Nad Al Sheba Gardens is a private gated community by Meraas in the heart of Nad Al Sheba, Dubai, offering ultra-exclusive villas and townhouses set among lush, landscaped grounds. The homes feature open-plan layouts with hardwood floors, porcelain countertops and refined aluminium finishes, blending distinct contemporary architecture with abundant greenery for an elevated, nature-connected lifestyle just minutes from Downtown Dubai.',
          'Released across multiple phases, the development ranges from 3-bedroom townhouses to spacious 4 to 7-bedroom villas, catering to growing families and investors. Residents enjoy resort-style amenities including swimmable lagoons, wave pools, a 3-kilometre jogging track, sports courts, yoga lawns, an amphitheatre, dog park, kids\' play areas, schools and community parks, all within a walkable, cycle-friendly master plan.',
        ],
        location: {
          area: 'Nad Al Sheba 1, Dubai',
          nearby: ['Meydan Racecourse — 5 min', 'Mohammed Bin Rashid City — 5 min', 'Downtown Dubai / Burj Khalifa — 10 min', 'City Walk — 15 min', 'Dubai International Airport — 15 min'],
        },
        unitTypes: '3-bedroom townhouses and 4 to 7-bedroom villas',
        sizes: 'Approx. 2,618 – 7,522 sqft',
        bedrooms: '3 to 7 bed',
        amenities: ['Swimmable lagoon', 'Wave pools', '3km jogging track', 'Cycling tracks', 'Sports courts and facilities', 'Yoga lawns', 'Amphitheatre and events lawn', 'Kids\' play areas', 'Dog park', 'Community parks', 'Schools', 'Gymnasium'],
        paymentPlan: '80/20 (varies by phase)',
        handover: 'On request',
      },
      {
        slug: 'design-quarter',
        name: 'Design Quarter at d3',
        community: 'Dubai Design District (d3)',
        price: 'From AED 1.75M',
        image: '/projects/design-quarter/hero.png',
        gallery: ['/projects/design-quarter/g1.png', '/projects/design-quarter/g2.png', '/projects/design-quarter/g3.png'],
        url: 'https://meraas.com/en/project/designquarter-at-d3',
        tagline: 'A vibrant creative residence in the heart of Dubai Design District.',
        description: [
          'Design Quarter at d3 is Meraas\' flagship residential community set in the heart of Dubai Design District, the Middle East\'s capital of art, design and fashion. The development comprises three towers offering modern 1, 2 and 3-bedroom apartments, plus duplexes and penthouses, crafted for creative spirits. Residents enjoy spectacular Burj Khalifa and Dubai Water Canal views, contemporary interiors, large terraces and balconies, and a vibrant community where home meets hustle.',
          'Designed for connoisseurs of style, homes feature walk-in closets, en-suite bathrooms and refined finishes. The podium level hosts a resort-style infinity pool, BBQ areas, lush landscaped gardens, a children\'s pool and outdoor exercise zones. With direct Dubai Water Canal access, sports fields, a state-of-the-art gym, retail outlets and 24/7 security, the project blends lifestyle, connectivity and creativity just minutes from Downtown Dubai and Business Bay.',
        ],
        location: {
          area: 'Dubai Design District (d3)',
          nearby: ['Downtown Dubai — 10 min', 'Dubai Marina — 10 min', 'The Dubai Mall — 10 min', 'Business Bay — 15 min', 'DIFC — 15 min', 'City Walk — 15 min', 'Dubai International Airport — 15 min'],
        },
        unitTypes: '1, 2 & 3-bedroom apartments, duplexes and penthouses',
        sizes: '794 – 3,324 sqft',
        bedrooms: '1 to 3 bed',
        amenities: ['Resort-style infinity pool', 'Children\'s pool', 'State-of-the-art gymnasium', 'BBQ areas', 'Outdoor exercise zones', 'Landscaped green areas', 'Sports fields', 'Bicycle & running tracks', 'Retail outlets', 'Day care centre', 'Dubai Water Canal access', '24/7 security'],
        paymentPlan: '10/50/40 — 10% down, 50% during construction, 40% on handover',
        handover: 'Q1 2027',
      },
      {
        slug: 'mjl-nourelle',
        name: 'Nourelle at Madinat Jumeirah Living',
        community: 'Madinat Jumeirah Living',
        price: 'From AED 3.68M',
        image: '/projects/mjl-nourelle/hero.jpg',
        gallery: ['/projects/mjl-nourelle/g1.jpg', '/projects/mjl-nourelle/g2.jpg', '/projects/mjl-nourelle/g3.jpg'],
        url: 'https://meraas.com/en/project/mjl-nourelle',
        tagline: 'Three towers linked by a skybridge, facing the Burj Al Arab.',
        description: [
          'Nourelle by Meraas is a trio of contemporary residential buildings seamlessly connected by a dramatic skybridge within the prestigious Madinat Jumeirah Living community in Umm Suqeim, directly facing the iconic Burj Al Arab. The architecture features clean lines, bold geometry and elegant cut-outs softened with greenery, while interiors combine bespoke materials, refined aesthetics and modern layouts that maximise natural light and space throughout each residence.',
          'The development offers 1 to 4-bedroom apartments, some with separate staff quarters, framing views of the Burj Al Arab or the Dubai skyline. Residents enjoy a lifestyle that flows effortlessly between calm retreat and vibrant connection, with curated amenities including a skybridge infinity pool, sky gardens, fitness and wellness spaces, landscaped courtyards and walking promenades, all moments from Sheikh Zayed Road and Dubai\'s beaches.',
        ],
        location: {
          area: 'Umm Suqeim, Dubai',
          nearby: ['Burj Al Arab — adjacent', 'Sheikh Zayed Road — 2 min', 'Dubai Media City — 5 min', 'Dubai Internet City — 8 min', 'Dubai International Airport — 25 min'],
        },
        unitTypes: '1, 2, 3 & 4-bedroom apartments',
        sizes: 'Approx. 837 – 5,623 sqft',
        bedrooms: '1 to 4 bed',
        amenities: ['Skybridge infinity pool', 'Sky gardens', 'Gym and yoga studio', 'Kids\' play zones', 'Day care centres', 'Pocket parks', 'Community stores', 'Landscaped courtyards and walking promenades'],
        paymentPlan: '75/25 — 20% on booking, 55% during construction, 25% on handover',
        handover: 'Q2 2029',
      },
    ],
  },
];

export function getDevelopers(): Developer[] {
  return developers;
}

/** Lowest published "From AED …" across a developer's projects, formatted
    without the leading "From" (e.g. "AED 775K"). Null if all are on request. */
export function developerStartingFrom(d: Developer): string | null {
  const toNumber = (price: string): number | null => {
    const m = price.match(/AED\s+([\d.]+)\s*([MK])/i);
    if (!m) return null;
    const value = parseFloat(m[1]);
    return m[2].toUpperCase() === 'M' ? value * 1_000_000 : value * 1_000;
  };
  let lowest: { value: number; label: string } | null = null;
  for (const p of d.projects) {
    const value = toNumber(p.price);
    if (value === null) continue;
    if (!lowest || value < lowest.value) {
      lowest = { value, label: p.price.replace(/^From\s+/i, '') };
    }
  }
  return lowest ? lowest.label : null;
}

export function getDeveloperBySlug(slug: string): Developer | undefined {
  return developers.find((d) => d.slug === slug);
}

export function getDeveloperSlugs(): string[] {
  return developers.map((d) => d.slug);
}

/** A project paired with the developer it belongs to. */
export type ProjectWithDeveloper = {
  project: DeveloperProject;
  developer: Developer;
};

/** Find a single project by its developer slug + project slug. */
export function getProject(
  devSlug: string,
  projectSlug: string
): ProjectWithDeveloper | undefined {
  const developer = getDeveloperBySlug(devSlug);
  if (!developer) return undefined;
  const project = developer.projects.find((p) => p.slug === projectSlug);
  return project ? { project, developer } : undefined;
}

/** All { dev, project } slug pairs — used to statically generate detail pages. */
export function getProjectParams(): { dev: string; project: string }[] {
  return developers.flatMap((d) =>
    d.projects.map((p) => ({ dev: d.slug, project: p.slug }))
  );
}
