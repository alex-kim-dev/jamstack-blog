module.exports = {
  siteMetadata: {
    title: `Jamstack blog`,
    description: `Experimental blog built with react, gatsby, netlify & netlify cms.`,
    author: `Alex Kim https://github.com/Alex-K1m`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jamstack blog`,
        short_name: `jamstack`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-theme-material-ui',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'static',
        defaultSizes: 'gzip',
      },
    },
    'gatsby-plugin-netlify-cms',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
