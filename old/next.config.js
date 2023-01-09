/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }
    return config
  },
  images: {
    domains: ['scontent-akl1-1.cdninstagram.com', 's3.us-west-2.amazonaws.com'],
  },
  ...withBundleAnalyzer({}),

}

module.exports = nextConfig
