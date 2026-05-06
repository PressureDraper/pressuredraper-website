import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  /* output: 'export', */
  allowedDevOrigins: ['10.30.13.67', '192.168.0.129'],
  // distDir: 'docs',
  /* basePath: '/pressuredraper-website-v2',
  assetPrefix: '/pressuredraper-website-v2', */
};

export default withNextIntl(nextConfig);
