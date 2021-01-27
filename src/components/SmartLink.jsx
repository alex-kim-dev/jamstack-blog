import MuiLink from '@material-ui/core/Link';
import { Link as GatsbyMuiLink } from 'gatsby-theme-material-ui';
import { arrayOf, bool, node, oneOfType, string } from 'prop-types';
import React from 'react';

const SmartLink = ({
  to,
  activeClassName,
  partiallyActive,
  children,
  ...other
}) => {
  // assuming any internal link will start with `/`, anything else is external
  const internal = /^\/(?!\/)/.test(to);

  return internal ? (
    <GatsbyMuiLink
      to={to}
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      {...other}
    >
      {children}
    </GatsbyMuiLink>
  ) : (
    <MuiLink href={to} target='_blank' rel='noopener noreferrer' {...other}>
      {children}
    </MuiLink>
  );
};

SmartLink.propTypes = {
  to: string.isRequired,
  activeClassName: string,
  partiallyActive: bool,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default SmartLink;
