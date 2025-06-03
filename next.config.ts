/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  // basePath: '/fashionCommerce-web',    // descomente se publicar em subpasta
  // assetPrefix: '/fashionCommerce-web/',
}

module.exports = nextConfig;
