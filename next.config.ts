/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Autorise Sanity
      },
    ],
  },
  // On garde les redirections si on en avait besoin pour le SEO plus tard
  async redirects() {
    return []; 
  }
};

export default nextConfig;