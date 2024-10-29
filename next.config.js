/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    locales: ['en-US'],
    defaultLocale: "en-US",
  },
  images: {
    remotePatterns: [
      {
        hostname: 'img.icons8.com',
      }
    ],
  }
};

export default nextConfig