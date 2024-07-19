/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  //output: 'export',
  //basePath: '/react-portfolio',
  //assetPrefix: '/react-portfolio/',
  images: {
    unoptimized: true,  // Disable image optimization
  },
  // Other Next.js configurations if needed
};

module.exports = nextConfig;
