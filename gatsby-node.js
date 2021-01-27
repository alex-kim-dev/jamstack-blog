const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: 'blog' });
    actions.createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.allMdx.edges.forEach(({ node: { slug } }) => {
    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/BlogPostTemplate.jsx'),
      context: { slug },
    });
  });
};
