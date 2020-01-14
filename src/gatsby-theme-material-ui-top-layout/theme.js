import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#663399',
    },
  },
});

export default responsiveFontSizes(theme);
