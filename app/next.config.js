/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['scontent-akl1-1.cdninstagram.com', 's3.us-west-2.amazonaws.com', ],
  },
}

module.exports = nextConfig
