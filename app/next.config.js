/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['scontent-akl1-1.cdninstagram.com', 's3.us-west-2.amazonaws.com'],
  },
  ...withBundleAnalyzer({
    ...withPWA({
      pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
      },
    })
  }),

}

module.exports = nextConfig
