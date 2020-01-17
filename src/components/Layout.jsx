import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { graphql, useStaticQuery } from 'gatsby';
import { node } from 'prop-types';
import React from 'react';

import Footer from './Footer';
import Header from './Header';

const maxWidth = 'md';

const useStyles = makeStyles(({ spacing }) => ({
  wrapper: {
    minHeight: '100vh',
  },
  main: {
    marginTop: spacing(2),
    marginBottom: spacing(2),
  },
}));

const Layout = ({ children }) => {
  const cls = useStyles();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Box display='flex' flexDirection='column' className={cls.wrapper}>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} maxWidth={maxWidth} />
      <Container component='main' maxWidth={maxWidth} className={cls.main}>
        {children}
      </Container>
      <Footer maxWidth={maxWidth} />
    </Box>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
