import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  assetPrefix: '/regex-example/',
  basePath: '/regex-example',
};

export default nextConfig;
