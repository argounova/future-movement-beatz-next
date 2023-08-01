/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'future-movement-beatz.s3.amazonaws.com'
      }
    ]
  }
}

module.exports = nextConfig
