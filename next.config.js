/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/sanad-website',
  assetPrefix: '/sanad-website/',
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
