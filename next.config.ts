/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // <-- On autorise Sanity ici
      },
    ],
    
  },
};

export default nextConfig;
module.exports = {
  async redirects() {
    return [
      {
        source: '/ancienne-page-contact', // Exemple
        destination: '/contact',
        permanent: true,
      },
    ]
  },
};
