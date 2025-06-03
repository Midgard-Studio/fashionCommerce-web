/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Isso indica que você quer exportar um site estático (sem backend)
  images: { unoptimized: true },  // Para evitar erro com imagens no modo estático
  // Se você for publicar no GitHub Pages e seu repo for usado como subpath, descomente e ajuste:  
  // basePath: '/fashionCommerce-web',
  // assetPrefix: '/fashionCommerce-web/',
}

module.exports = nextConfig;