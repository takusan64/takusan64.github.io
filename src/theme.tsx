import { createMuiTheme } from '@material-ui/core/styles'
import { red, grey } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary:{
      main: grey[200],
    },
    secondary: {
      main: "#E1A87A"
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
    fontSize: 12
  },
  overrides: {
    MuiTypography: {
      root: {
        wordWrap: "break-word"
      }
   },
  },
  props: {
    MuiTextField: {
        variant: "outlined"
    }
  }
})

export default theme