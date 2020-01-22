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
        name: `blog`,
        path: `${__dirname}/blog`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-default-html-attrs`,
            options: {
              h1: [
                'MuiTypography-root',
                'MuiTypography-gutterBottom',
                'MuiTypography-h1',
              ],
              h2: [
                'MuiTypography-root',
                'MuiTypography-gutterBottom',
                'MuiTypography-h2',
              ],
              h3: [
                'MuiTypography-root',
                'MuiTypography-gutterBottom',
                'MuiTypography-h3',
              ],
              h4: [
                'MuiTypography-root',
                'MuiTypography-gutterBottom',
                'MuiTypography-h4',
              ],
              h5: [
                'MuiTypography-root',
                'MuiTypography-gutterBottom',
                'MuiTypography-h5',
              ],
              h6: [
                'MuiTypography-root',
                'MuiTypography-gutterBottom',
                'MuiTypography-h6',
              ],
              link: [
                'MuiTypography-root',
                'MuiLink-root',
                'MuiLink-underlineHover',
                'MuiTypography-colorPrimary',
              ],
              list: ['MuiTypography-root', 'MuiTypography-body1'],
              'list[ordered]': ['MuiTypography-root', 'MuiTypography-body1'],
              paragraph: [
                'MuiTypography-root',
                'MuiTypography-gutterBottom',
                'MuiTypography-body1',
              ],
              table: '',
              'thematic-break': 'MuiDivider-root',
            },
          },
        ],
      },
    },
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-theme-material-ui',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        defaultSizes: 'gzip',
      },
    },
    'gatsby-plugin-netlify-cms',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
