/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig