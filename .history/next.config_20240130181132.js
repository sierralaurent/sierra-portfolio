/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
      unoptimized: true,
      domains: ['media.giphy.com'],
      priority: false
  }
};