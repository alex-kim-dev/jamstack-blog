import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const Footer = () => (
  <Box component='footer' mt='auto' p={2} bgcolor='#ccc'>
    <Container maxWidth='md'>
      <Typography variant='body2' align='center'>
        This experimental website is made by{' '}
        <Link href='https://gihub.com/alex-k1m' target='_blank' rel='noopener'>
          Alex Kim
        </Link>
        . All blog posts are taken from{' '}
        <Link
          href='https://guide.freecodecamp.org/'
          target='_blank'
          rel='noopener'
        >
          FreeCodeCamp Guide.
        </Link>
      </Typography>
    </Container>
  </Box>
);

export default Footer;
