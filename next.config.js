/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  images: {
    domains: ['picsum.photos'],
    unoptimized: true,
  },
}

module.exports = nextConfig 