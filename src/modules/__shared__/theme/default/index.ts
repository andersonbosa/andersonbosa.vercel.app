import { ThemeOptions, createTheme } from '@mui/material/styles'
import { typography } from '../typography'

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#D8804E',
    },

    secondary: {
      main: '#AE00FF',
    },

    background: {
      default: '#ebebeb',
    },

    text: {
      primary: '#363636',
    },

    // error: {},
    // warning: {},
    // info: {},
    // success: {},

    // tonalOffset: {},
    // contrastThreshold: {},
    // common: {},
    // grey: {},
    // divider: {},
    // action: {},
  },

  typography,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
  },
}

export const theme = createTheme(themeOptions)
