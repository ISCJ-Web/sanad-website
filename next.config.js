/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/sanad-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sanad-website/' : '',
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
