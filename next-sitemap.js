module.exports = {
  siteUrl: process.env.SITE_URL || 'https://archive.sparkpost.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/'],
      },
    ],
  },
};
