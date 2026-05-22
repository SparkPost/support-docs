/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,

  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader',
    });

    // Important: return the modified config
    return config;
  },

  async redirects() {
    return [
      // The site does not have a home page
      // This redirects to support docs
      {
        source: '/',
        destination: '/docs/',
        permanent: true,
      },
    ];
  },
};
