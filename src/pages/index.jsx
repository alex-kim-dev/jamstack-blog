import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby-theme-material-ui';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Typography variant='h2' gutterBottom>
      Hi people
    </Typography>
    <Typography variant='body1'>
      <Link to='/blog'>View blog</Link>
    </Typography>
  </Layout>
);

export default IndexPage;
