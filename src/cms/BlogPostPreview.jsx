/* eslint-disable react/prop-types */
import React from 'react';

import BlogPost from '../components/BlogPost';
import withMui from './withMui';

const BlogPostPreview = ({ entry, getAsset, widgetFor }) => {
  const postData = entry.toJS().data;
  postData.details.featuredImage = getAsset(
    postData.details.featuredImage,
  ).toString();
  postData.body = widgetFor('body');

  return <BlogPost data={postData} preview />;
};

export default withMui(BlogPostPreview);
