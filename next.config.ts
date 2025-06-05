import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'via.placeholder.com',
      'images.unsplash.com',
      'plus.unsplash.com'
    ],
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config) {
    // Hỗ trợ import SVG như React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  // Tối ưu hóa build
  swcMinify: true,
  // Hỗ trợ CORS cho API routes
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE' },
        ],
      },
    ]
  },
  // Cấu hình redirects nếu cần
  async redirects() {
    return []
  },
  // Cấu hình rewrites nếu cần
  async rewrites() {
    return []
  }
};

export default nextConfig;
