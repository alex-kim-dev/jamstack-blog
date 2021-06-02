import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { arrayOf, bool, number, oneOf, shape, string } from 'prop-types';
import React from 'react';

import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';
import MdxBodyComponents from '../components/MdxBodyComponents';
import SEO from '../components/Seo';

const BlogPostTemplate = ({
  data: {
    mdx: {
      body,
      frontmatter: { date, title, details },
    },
  },
}) => {
  const bodyWithRenderer = (
    <MDXProvider components={MdxBodyComponents}>
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProvider>
  );

  const postData = {
    body: bodyWithRenderer,
    date: new Date(date),
    title,
    details,
  };

  return (
    <Layout>
      <SEO title={title} />
      <BlogPost data={postData} />
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: shape({
    mdx: shape({
      body: string,
      frontmatter: shape({
        date: string,
        title: string,
        details: shape({
          rating: oneOf(['★', '★★', '★★★', '★★★★', '★★★★★']),
          sponsored: bool,
          tags: arrayOf(string),
          featuredImage: shape({ childImageSharp: shape({ fluid: shape() }) }),
          timeToRead: number,
        }),
      }),
    }),
  }).isRequired,
};

export const blogPostQuery = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        date
        title
        details {
          rating
          sponsored
          tags
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`;

export default BlogPostTemplate;
