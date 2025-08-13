/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
