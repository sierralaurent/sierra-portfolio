/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'giphy.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
}
