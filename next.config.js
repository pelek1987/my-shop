/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fakestoreapi.com', 'picsum.photos'],
    formats: ['image/webp', 'image/avif']
  }
}

module.exports = nextConfig
