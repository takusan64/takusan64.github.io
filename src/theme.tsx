import { createMuiTheme } from '@material-ui/core/styles'
import { indigo, red, grey } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary:{
      main: grey[900],
    },
    secondary: {
      main: indigo[900]
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
  props: {
    MuiTextField: {
        variant: "outlined"
    }
  }
})

export default theme