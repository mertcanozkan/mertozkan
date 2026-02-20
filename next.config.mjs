/** @type {import('next').NextConfig} */
const isManualHostingerBundle = process.env.HOSTINGER_BUNDLE === '1';

const nextConfig = {
  output: 'standalone',
  distDir: isManualHostingerBundle ? 'next' : '.next',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      }
    ]
  }
};

export default nextConfig;
