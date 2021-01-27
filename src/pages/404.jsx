import Typography from '@material-ui/core/Typography';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Link from '../components/SmartLink';

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <Typography variant='h2' gutterBottom>
      NOT FOUND
    </Typography>
    <Typography variant='body1'>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Typography>
    <Typography variant='body1'>
      <Link to='/'>Go to the homepage</Link>
    </Typography>
  </Layout>
);

export default NotFoundPage;
