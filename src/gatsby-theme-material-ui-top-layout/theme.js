import deepOrange from '@material-ui/core/colors/deepOrange';
import teal from '@material-ui/core/colors/teal';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[400],
    },
    secondary: {
      main: deepOrange.A400,
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.625rem',
    },
    h3: {
      fontSize: '2.125rem',
    },
    h4: {
      fontSize: '1.75rem',
    },
    h5: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '1.25rem',
    },
  },
});

export default responsiveFontSizes(theme);
