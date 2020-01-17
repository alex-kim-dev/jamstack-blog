import deepOrange from '@material-ui/core/colors/deepOrange';
import teal from '@material-ui/core/colors/teal';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400],
    },
    secondary: {
      main: deepOrange.A400,
    },
  },
});

export default responsiveFontSizes(theme);
