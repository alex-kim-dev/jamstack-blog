import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby-theme-material-ui';
import React from 'react';

import Image from '../components/Image';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Typography variant='h2' gutterBottom>
      Hi people
    </Typography>
    <Typography variant='body1'>Welcome to your new Gatsby site.</Typography>
    <Typography variant='body1'>Now go build something great.</Typography>
    <Box maxWidth={300} my={2}>
      <Image />
    </Box>
    <Typography variant='body1'>
      <Link to='/page-2/'>Go to page 2</Link>
    </Typography>
  </Layout>
);

export default IndexPage;
