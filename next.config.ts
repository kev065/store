/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'oenqmnnczfppofsblbkk.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true, // Suppresses TypeScript build errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Suppresses ESLint build errors
  },
};

export default nextConfig;
