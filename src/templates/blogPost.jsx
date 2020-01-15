import { graphql } from 'gatsby';
import { shape, string } from 'prop-types';
import React from 'react';

const blogPost = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <div className='blog-post-container'>
    <div className='blog-post'>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div
        className='blog-post-content'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  </div>
);

blogPost.propTypes = {
  data: shape({
    markdownRemark: shape({
      html: string,
      frontmatter: shape({
        date: string,
        title: string,
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;

export default blogPost;
