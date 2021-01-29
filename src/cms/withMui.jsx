import CssBaseline from '@material-ui/core/CssBaseline';
import {
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles';
import { create } from 'jss';
import React, { useState } from 'react';

import theme from '../gatsby-theme-material-ui-top-layout/theme';

const withMui = (Component) => {
  const MuiProvider = (props) => {
    const [jss, setJss] = useState(null);

    const handleRef = (ref) => {
      if (ref === null) return;

      setJss(
        create({
          ...jssPreset(),
          insertionPoint: ref.ownerDocument.head.lastElementChild,
        }),
      );
    };

    return jss ? (
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...props} />
        </ThemeProvider>
      </StylesProvider>
    ) : (
      <div ref={handleRef}>Loading...</div>
    );
  };

  return MuiProvider;
};

export default withMui;
