/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
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
