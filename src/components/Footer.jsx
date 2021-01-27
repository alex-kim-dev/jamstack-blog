import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Link from './SmartLink';

const Footer = () => (
  <Box component='footer' mt='auto' p={2}>
    <Container maxWidth='md'>
      <Typography variant='body2' align='center'>
        This experimental website is made by{' '}
        <Link to='https://gihub.com/alex-k1m'>Alex Kim</Link>. All blog posts
        are taken from{' '}
        <Link to='https://guide.freecodecamp.org/'>FreeCodeCamp Guide.</Link>
      </Typography>
    </Container>
  </Box>
);

export default Footer;
