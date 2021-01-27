import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby-theme-material-ui';
import React from 'react';

const BlogRoll = () => {
  const {
    allMdx: { edges: posts },
  } = useStaticQuery(graphql`
    query BlogRollQuery {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            slug
            frontmatter {
              title
              date(formatString: "DD.MM.YYYY HH:MM")
              excerpt
              details {
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            timeToRead
          }
        }
      }
    }
  `);

  return (
    <Grid container spacing={3}>
      {posts &&
        posts.map(
          ({
            node: {
              id,
              timeToRead,
              slug,
              frontmatter: {
                title,
                excerpt,
                details: { featuredImage },
              },
            },
          }) => (
            <Grid item xs={12} key={id}>
              <Card>
                <Grid container>
                  <Grid item xs={12} sm={5} md={4}>
                    <Link to={slug}>
                      <CardActionArea>
                        <CardMedia
                          component={() => (
                            <Img
                              fluid={{
                                ...featuredImage.childImageSharp.fluid,
                                aspectRatio: 4 / 3,
                              }}
                              alt={title}
                            />
                          )}
                          image='https://fakeimg.pl/250x100/'
                          title='featured Image'
                          alt='featured Image'
                        />
                      </CardActionArea>
                    </Link>
                  </Grid>
                  <Grid item xs={12} sm={7} md={8}>
                    <CardContent>
                      <Typography component='h3' variant='h4' gutterBottom>
                        {title}
                      </Typography>
                      <Typography variant='body1' gutterBottom>
                        {excerpt}
                      </Typography>
                      <Box
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                      >
                        <Typography variant='subtitle2'>
                          <Link to={slug}>Continue reading</Link>
                        </Typography>
                        <Typography variant='body2' color='textSecondary'>
                          {`${timeToRead} min`}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ),
        )}
    </Grid>
  );
};

export default BlogRoll;
