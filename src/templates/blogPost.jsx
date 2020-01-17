import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { graphql } from 'gatsby';
import { arrayOf, bool, number, shape, string } from 'prop-types';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const useStyles = makeStyles(({ spacing }) => ({
  detailsMargin: {
    marginTop: spacing(1),
  },
}));

const BlogPost = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: {
        date,
        title,
        details: { rating, sponsored, tags, thumbnail, timeToRead },
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
          {tags.map(tag => (
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
      <article
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
          thumbnail: string,
          timeToRead: number,
        }),
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
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
          thumbnail
          timeToRead
        }
      }
    }
  }
`;

export default BlogPost;
