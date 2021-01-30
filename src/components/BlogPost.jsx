import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Img from 'gatsby-image';
import {
  arrayOf,
  bool,
  element,
  instanceOf,
  number,
  oneOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';
import React from 'react';

const useStyles = makeStyles(({ spacing, palette }) => ({
  detailsMargin: {
    marginTop: spacing(1),
  },
  body: {
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
    body,
    date,
    title,
    details: { rating, sponsored, tags, featuredImage, timeToRead },
  },
  preview = false,
}) => {
  const cls = useStyles();

  return (
    <article>
      <Typography variant='h2' align='center' gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs>
          <Typography variant='body2' color='textSecondary' noWrap>
            {date.toLocaleString()}
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
        {preview ? (
          <img styles={{ width: '100%' }} src={featuredImage} alt='Featured' />
        ) : (
          <Img
            fluid={featuredImage.childImageSharp.fluid}
            alt='Featured Image'
          />
        )}
      </Box>
      {body}
    </article>
  );
};

BlogPost.propTypes = {
  data: shape({
    body: element,
    date: instanceOf(Date),
    title: string,
    details: shape({
      rating: oneOf(['★', '★★', '★★★', '★★★★', '★★★★★']),
      sponsored: bool,
      tags: arrayOf(string),
      featuredImage: oneOfType([
        shape({ childImageSharp: shape({ fluid: shape() }) }),
        string,
      ]),
      timeToRead: number,
    }),
  }),
  preview: bool,
};

export default BlogPost;
