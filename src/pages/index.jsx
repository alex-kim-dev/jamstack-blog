import Typography from '@material-ui/core/Typography';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Link from '../components/SmartLink';

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
