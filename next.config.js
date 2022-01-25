/** @type {import('next').NextConfig} */
const SentryPlugin = require('@sentry/webpack-plugin');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,

  // Sourcemaps are enabled to be uploaded to Sentry
  // Warning: Can significantly increase build times
  // and memory usage while being generated.
  productionBrowserSourceMaps: true,

  webpack: (config, { dev, isServer }) => {
    // This uploads sourcemaps to Sentry
    if (!dev && !isServer && !process.env.NODE_ENV === 'test') {
      config.plugins.push(
        new SentryPlugin({
          release: process.env.RELEASE,
          include: './out',
        }),
      );
    }

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
