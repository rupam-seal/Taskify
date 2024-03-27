/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp3|woff|woff2)$/i,
      type: 'asset/resource',
    });

    // Return the modified configuration object
    return config;
  },
};

module.exports = nextConfig;
