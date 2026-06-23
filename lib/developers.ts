/* ==========================================================================
   Earthlink Real Estate — developers & their projects
   Single source of truth for the Developers feature. Edit here to update the
   /developers listing and each /developers/[slug] page.
   ========================================================================== */

export type DeveloperProject = {
  name: string;
  /** Community / location, e.g. "Dubai Hills Estate". */
  community: string;
  /** Starting price as shown, e.g. "From AED 1.3M" or "On request". */
  price: string;
  /** Official project page (opens in a new tab). */
  url: string;
};

export type Developer = {
  slug: string;
  name: string;
  /** One-line tagline shown on the listing card. */
  tagline: string;
  /** Developer's main brochures / launches page (opens in a new tab). */
  brochuresUrl: string;
  projects: DeveloperProject[];
};

/* ----- Developers listing page: hero copy -------------------------------
   Plain editable strings so the wording can be changed without touching the
   page component. */
export const developersPage = {
  eyebrow: 'Developers — Dubai\'s master builders',
  headlineLead: 'Buy where Dubai is',   // normal-weight part
  headlineAccent: 'built',              // gradient part
  intro: 'Early access to launches from the city\'s most trusted developers. Pick a developer to see their current projects, starting prices, and official brochures.',
};

export const developers: Developer[] = [
  {
    slug: 'emaar',
    name: 'Emaar Properties',
    tagline: 'Dubai’s master-developer behind Downtown, Dubai Hills and the city’s landmark communities.',
    brochuresUrl: 'https://properties.emaar.com/en/latest-launches/',
    projects: [
      {
        name: 'Golf Vale',
        community: 'Emaar South',
        price: 'From AED 1.3M',
        url: 'https://properties.emaar.com/en/properties/golf-vale-at-emaar-south/',
      },
      {
        name: 'Greencrest',
        community: 'Dubai Hills Estate',
        price: 'From AED 1.8M',
        url: 'https://properties.emaar.com/en/our-communities/dubai-hills-estate/',
      },
      {
        name: 'Fior 1',
        community: 'Rashid Yachts & Marina',
        price: 'On request',
        url: 'https://properties.emaar.com/en/properties/fior-1-at-rashid-yachts-and-marina/',
      },
      {
        name: 'Montiva by Vida',
        community: 'Dubai Creek Harbour',
        price: 'From AED 1.9M',
        url: 'https://properties.emaar.com/en/our-communities/dubai-creek-harbour/',
      },
      {
        name: 'Mareva',
        community: 'The Oasis (Dubailand)',
        price: 'From AED 13.8M',
        url: 'https://properties.emaar.com/en/our-communities/the-oasis/',
      },
    ],
  },
  {
    slug: 'damac',
    name: 'DAMAC Properties',
    tagline: 'Luxury living through signature branded residences and resort-style communities.',
    brochuresUrl: 'https://www.damacproperties.com/en/projects/',
    projects: [
      {
        name: 'Chelsea Residences by DAMAC',
        community: 'Dubai Maritime City',
        price: 'From AED 2.2M',
        url: 'https://www.damacproperties.com/en/projects/chelsea-residences/',
      },
      {
        name: 'DAMAC Islands 2',
        community: 'Dubailand',
        price: 'From AED 2.85M',
        url: 'https://www.damacproperties.com/en/communities/damac-islands-2-community/projects/damac-islands-2/',
      },
      {
        name: 'DAMAC Bay by Cavalli',
        community: 'Dubai Harbour',
        price: 'From AED 2.9M',
        url: 'https://www.damacproperties.com/en/projects/damac-bay-by-cavalli/',
      },
      {
        name: 'Canal Heights 2 (de GRISOGONO)',
        community: 'Business Bay',
        price: 'From AED 1.23M',
        url: 'https://www.damacproperties.com/en/projects/canal-heights-2-de-grisogono/',
      },
      {
        name: 'Safa Gate (de GRISOGONO)',
        community: 'Safa Park / Sheikh Zayed Rd',
        price: 'On request',
        url: 'https://www.damacproperties.com/en/projects/safa-gate/',
      },
    ],
  },
  {
    slug: 'sobha',
    name: 'Sobha Realty',
    tagline: 'Backward-integrated craftsmanship and waterfront communities built to last.',
    brochuresUrl: 'https://sobharealty.com/sobha-communities',
    projects: [
      {
        name: 'Sobha Siniya Island',
        community: 'Umm Al Quwain',
        price: 'From AED 1.33M',
        url: 'https://sobharealty.com/sobha-communities/sobha-siniya-island',
      },
      {
        name: 'Sobha Central',
        community: 'JLT-adjacent, Dubai',
        price: 'On request',
        url: 'https://sobharealty.com/sobha-communities/sobha-central',
      },
      {
        name: 'Sobha Solis',
        community: 'Motor City',
        price: 'From AED 1.2M',
        url: 'https://sobharealty.com/sobha-communities/sobha-solis',
      },
      {
        name: 'Sobha Orbis',
        community: 'Motor City',
        price: 'From AED 985K',
        url: 'https://sobharealty.com/sobha-communities/sobha-orbis',
      },
      {
        name: 'Sobha Elwood',
        community: 'Al Ain Road',
        price: 'From AED 7.93M',
        url: 'https://sobharealty.com/sobha-communities/sobha-elwood',
      },
    ],
  },
  {
    slug: 'binghatti',
    name: 'Binghatti',
    tagline: 'Distinctive architecture and fast-moving branded launches across Dubai.',
    brochuresUrl: 'https://www.binghatti.com/en/projects',
    projects: [
      {
        name: 'Binghatti Wraith',
        community: 'Al Jaddaf',
        price: 'From AED 800K',
        url: 'https://www.binghatti.com/en/projects/binghatti-wraith',
      },
      {
        name: 'Burj Binghatti Jacob & Co',
        community: 'Business Bay',
        price: 'From AED 8.4M',
        url: 'https://www.binghatti.com/en/branded-projects/burj-binghatti-jacob-co-residences',
      },
      {
        name: 'Mercedes-Benz Places · Binghatti City',
        community: 'Nad Al Sheba',
        price: 'From AED 1.6M',
        url: 'https://www.binghatti.com/en/branded-projects/mercedes-benz-places-binghatti-city',
      },
      {
        name: 'Binghatti Skyrise',
        community: 'Business Bay',
        price: 'On request',
        url: 'https://www.binghatti.com/en/projects/binghatti-skyrise',
      },
      {
        name: 'Binghatti Skyterraces',
        community: 'Motor City',
        price: 'From AED 775K',
        url: 'https://www.binghatti.com/en/projects/binghatti-skyterraces',
      },
    ],
  },
];

export function getDevelopers(): Developer[] {
  return developers;
}

export function getDeveloperBySlug(slug: string): Developer | undefined {
  return developers.find((d) => d.slug === slug);
}

export function getDeveloperSlugs(): string[] {
  return developers.map((d) => d.slug);
}
