import { createMuiTheme } from '@material-ui/core/styles';
import { blue, orange, red, grey } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary:{
      main: blue["500"],
      light: blue["300"],
      dark: blue["900"],
    },
    secondary: {
      main: orange["500"],
      light: orange["300"],
      dark: orange["900"],
    },
    error: {
      main: red["500"],
      light: red["300"],
      dark: red["900"],
    },
    background: {
        default: grey[100]
    }
  },
  typography: {
    button: {
        textTransform: "none"
    },
    fontSize: 18
  },
  props: {
    MuiTextField: {
        variant: "outlined"
    }
  }
});

export default theme