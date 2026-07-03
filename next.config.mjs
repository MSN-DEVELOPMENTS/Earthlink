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
      // Legacy URLs from the old eregroup.ae build (still held in Google's index).
      // 301 them to the live equivalents so old link equity transfers and stale
      // results drop out. Extend as SEO confirms more mappings from Search Console.
      { source: '/contactus', destination: '/contact', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/home-with-map', destination: '/', permanent: true },
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
