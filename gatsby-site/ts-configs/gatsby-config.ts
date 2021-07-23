// Edit the ts files in the ts-configs, not the js files in the root since those will be overwritten by the ts files
export default {
  siteMetadata: {
    siteName: `SparkPost Support Documentation`,
    siteUrl: `https://support.sparkpost.com`,
    title: `SparkPost Support Documentation`,
    defaultTitle: `SparkPost Support Documentation`,
    titleTemplate: "%s - SparkPost",
    description: `All the help and API resources you need to send emails successfully: Get started, integrate, set up your account and profile, report on your progress, and more.`,
    defaultImage: `/images/sparkpost-logo-standard.png`,
    twitterUsername: `@SparkPost`,
    facebookPage: `https://www.facebook.com/sparkpost/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-53870770-1`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
      __key: `pages`,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
}
