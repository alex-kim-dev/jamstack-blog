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
        path: string,
        title: string,
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default blogPost;
