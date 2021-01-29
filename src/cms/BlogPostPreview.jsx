/* eslint-disable react/prop-types */
import React from 'react';

import BlogPost from '../components/BlogPost';
import withMui from './withMui';

const BlogPostPreview = ({ entry, getAsset }) => {
  const postData = entry.toJS().data;
  postData.details.featuredImage = getAsset(
    postData.details.featuredImage,
  ).toString();

  return <BlogPost data={postData} preview />;
};

export default withMui(BlogPostPreview);
