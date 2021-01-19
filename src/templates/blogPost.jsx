import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const useStyles = makeStyles(({ spacing, palette }) => ({
  detailsMargin: {
    marginTop: spacing(1),
  },
  article: {
    '& :not(pre) code': {
      padding: '.1em .2em',
      backgroundColor: 'rgba(0, 147, 135, 0.4)',
      borderRadius: '.2em',
    },
    '& pre': {
      padding: '1rem',
      overflow: 'auto',
      lineHeight: '1.5em',
      backgroundColor: 'rgba(0, 147, 135, 0.4)',
      borderRadius: '.2em',
    },
    '& blockquote': {
      margin: `${spacing(1)}px ${spacing(2)}px`,
      padding: `0 ${spacing(2)}px`,
      borderLeft: `.25rem solid ${palette.primary.main}`,
    },
  },
}));

const BlogPost = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: {
        date,
        title,
        details: { rating, sponsored, tags, featuredImage, timeToRead },
      },
    },
  },
}) => {
  const cls = useStyles();

  return (
    <Layout>
      <SEO title={title} />
      <Typography variant='h2' align='center' gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs>
          <Typography variant='body2' color='textSecondary' noWrap>
            {date}
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant='body2' color='textSecondary' align='center'>
            {sponsored && 'sponsored'}
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography
            variant='body2'
            color='textSecondary'
            align='right'
          >{`${timeToRead} min`}</Typography>
        </Grid>
      </Grid>
      <Grid container justify='space-between' className={cls.detailsMargin}>
        <Grid item xs container spacing={1}>
          {tags.map((tag) => (
            <Grid item key={tag}>
              <Chip label={tag} size='small' />
            </Grid>
          ))}
        </Grid>
        <Grid item>
          <Rating
            size='small'
            name='read-only'
            value={rating.length}
            readOnly
          />
        </Grid>
      </Grid>
      <Box my={2}>
        <Img fluid={featuredImage.childImageSharp.fluid} alt='Bootstrap ui' />
      </Box>
      <article
        className={cls.article}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: shape({
    markdownRemark: shape({
      html: string,
      frontmatter: shape({
        date: string,
        title: string,
        details: shape({
          rating: string,
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
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY HH:MM")
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

export default BlogPost;
