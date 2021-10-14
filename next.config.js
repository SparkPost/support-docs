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
    if (!dev && !isServer) {
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
