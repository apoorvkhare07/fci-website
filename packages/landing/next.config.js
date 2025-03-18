const withPlugins = require('next-compose-plugins');

const nextConfig = {
  images: {
    domains: ['pbs.twimg.com'],
  },
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  distDir: 'dist',
};

module.exports = withPlugins([], nextConfig);
