import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  allowedDevOrigins: ['10.30.13.67', '192.168.0.129'],
  /* basePath: '/pressuredraper-website-v2',
  assetPrefix: '/pressuredraper-website-v2', */
};

export default nextConfig;
