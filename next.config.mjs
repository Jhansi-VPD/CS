import path from 'path';
import { fileURLToPath } from 'url';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: projectRoot,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://coralswift-backend.onrender.com';
    return [
      {
        source: '/api/v1/:path*',
        destination: `${backendUrl}/api/v1/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      { source: '/solutions', destination: '/services', permanent: false },
      { source: '/solutions/it-solutions', destination: '/services/it-solutions', permanent: false },
      { source: '/solutions/non-it-solutions', destination: '/services/non-it-solutions', permanent: false },
      { source: '/schedule', destination: '/contact', permanent: false },
    ];
  },
};

export default nextConfig;
