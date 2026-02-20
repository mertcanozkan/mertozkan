/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: 'next',
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
