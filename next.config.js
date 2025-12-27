/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'img.icons8.com',
      }
    ],
  }
};

export default nextConfig