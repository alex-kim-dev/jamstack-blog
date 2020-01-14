/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Header from './Header';

const Layout = ({ children }) => {
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
    <>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <Box component='main' mt={2}>
          {children}
        </Box>
        <footer>
          <Typography variant='body2'>
            © {new Date().getFullYear()}, Built with{' '}
            <Link href='https://www.gatsbyjs.org'>Gatsby</Link>
          </Typography>
        </footer>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
