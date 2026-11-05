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
