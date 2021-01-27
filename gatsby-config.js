module.exports = {
  siteMetadata: {
    title: 'Jamstack Blog',
    description: 'Experimental blog built with gatsby & netlify cms.',
    author: 'Alex Kim https://github.com/Alex-K1m',
  },
  plugins: [
    { resolve: 'gatsby-plugin-react-helmet' },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      },
    },
    { resolve: 'gatsby-plugin-mdx' },
    { resolve: 'gatsby-transformer-sharp' },
    { resolve: 'gatsby-plugin-sharp' },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jamstack Blog',
        short_name: 'Jamstack Blog',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    { resolve: 'gatsby-theme-material-ui' },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        defaultSizes: 'gzip',
        analyzerMode: 'static',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: { enableIdentityWidget: false },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
