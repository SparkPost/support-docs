/** @type {import('next').NextConfig} */
const SentryPlugin = require('@sentry/webpack-plugin');

module.exports = {
  reactStrictMode: true,
  target: 'serverless',

  // Sourcemaps are enabled to be uploaded to Sentry
  // Warning: Can significantly increase build times
  // and memory usage while being generated.
  productionBrowserSourceMaps: true,

  webpack: (config, { dev, isServer }) => {
    // This uploads sourcemaps to Sentry
<<<<<<< HEAD
    if (!dev && !isServer && !process.env.CANCEL_SENTRY_CLI) {
=======
    if (!dev && !isServer && !process.env.NODE_ENV === 'test') {
>>>>>>> ac79a4ea881f10b80ac9d9e0c9a6fb401558b7d6
      config.plugins.push(
        new SentryPlugin({
          release: process.env.RELEASE,
          include: './out',
        }),
      );
    }

    // Important: return the modified config
    return config;
  },
};
