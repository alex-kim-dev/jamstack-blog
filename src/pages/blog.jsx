import React from 'react';

import BlogRoll from '../components/BlogRoll';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const BlogPage = () => (
  <Layout>
    <SEO title='Blog' />
    <h1>Latest Posts</h1>
    <section>
      <div className='content'>
        <BlogRoll />
      </div>
    </section>
  </Layout>
);

export default BlogPage;
