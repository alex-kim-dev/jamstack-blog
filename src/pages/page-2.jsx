import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby-theme-material-ui';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const SecondPage = () => (
  <Layout>
    <SEO title='Page two' />
    <Typography variant='h2' gutterBottom>
      Hi from the second page
    </Typography>
    <Typography variant='body1'>Welcome to page 2</Typography>
    <Typography variant='body1'>
      <Link to='/'>Go back to the homepage</Link>
    </Typography>
  </Layout>
);

export default SecondPage;
