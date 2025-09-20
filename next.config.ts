import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'frontend-test-api.digitalcreative.cn',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
