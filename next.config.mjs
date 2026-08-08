/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.bayut.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/projects', destination: '/properties', permanent: true },
      { source: '/projects/:slug', destination: '/properties/:slug', permanent: true },
      // /properties?type=sale|rent is handled in middleware.ts, not here:
      // redirects() copies the incoming query onto the destination, which would
      // land visitors on /properties/for-sale?type=sale — the duplicate URL
      // this is meant to remove.
      // Legacy URLs from the old eregroup.ae build (still held in Google's index).
      // 301 them to the live equivalents so old link equity transfers and stale
      // results drop out. Extend as SEO confirms more mappings from Search Console.
      { source: '/contactus', destination: '/contact', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/home-with-map', destination: '/', permanent: true },
      // "All Blogs" is gone from the nav — Blogs is the listing itself now, so
      // anything still pointing at the plural/all- variants lands on /blog.
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/blogs/:slug', destination: '/blog/:slug', permanent: true },
      { source: '/all-blogs', destination: '/blog', permanent: true },
      // Three blog categories were renamed; their slugs moved with the titles.
      // 301 the old archive URLs so indexed pages and existing links survive.
      {
        source: '/category/buying-in-dubai-and-the-uae',
        destination: '/category/dubai-community',
        permanent: true,
      },
      {
        source: '/category/real-estate-investment-in-the-uae',
        destination: '/category/real-estate-investment',
        permanent: true,
      },
      {
        source: '/category/commercial-real-estate-renting-in-dubai',
        destination: '/category/selling-in-dubai',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Hero videos are versioned via ?v=N, so cache them hard for instant reloads.
        source: '/:all*(mp4)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Images and fonts: long cache with room to refresh.
        source: '/:all*(jpg|jpeg|png|webp|avif|svg|woff2|ttf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000' },
        ],
      },
    ];
  },
};

export default nextConfig;
