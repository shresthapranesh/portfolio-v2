/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    locales: ['en-US'],
    defaultLocale: "en-US",
  },
  images: {
    domains: ['img.icons8.com'],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig