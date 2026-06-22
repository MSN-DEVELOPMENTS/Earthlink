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
};

export default nextConfig;
