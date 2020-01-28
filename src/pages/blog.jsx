import Typography from '@material-ui/core/Typography';
import React from 'react';

import BlogRoll from '../components/BlogRoll';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const BlogPage = () => (
  <Layout>
    <SEO title='Blog' />
    <Typography variant='h2' align='center' gutterBottom>
      Latest posts
    </Typography>
    <main>
      <BlogRoll />
    </main>
  </Layout>
);

export default BlogPage;
