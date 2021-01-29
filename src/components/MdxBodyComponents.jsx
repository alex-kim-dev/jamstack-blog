/* eslint-disable react/prop-types */
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import SmartLink from './SmartLink';

const components = {
  p: (props) => <Typography variant='body1' {...props} />,

  h1: (props) => <Typography variant='h1' gutterBottom {...props} />,
  h2: (props) => <Typography variant='h2' gutterBottom {...props} />,
  h3: (props) => <Typography variant='h3' gutterBottom {...props} />,
  h4: (props) => <Typography variant='h4' gutterBottom {...props} />,
  h5: (props) => <Typography variant='h5' gutterBottom {...props} />,
  h6: (props) => <Typography variant='h6' gutterBottom {...props} />,

  hr: (props) => <Divider style={{ margin: '16px 0' }} {...props} />,

  blockquote: (props) => (
    <Box
      m={0}
      component='blockquote'
      pl={2}
      borderLeft={4}
      borderColor='primary.main'
      {...props}
    />
  ),

  li: (props) => <Typography component='li' variant='body1' {...props} />,

  a: ({ href, ...props }) => <SmartLink to={href} {...props} />,
};

export default components;
