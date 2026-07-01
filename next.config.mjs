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
