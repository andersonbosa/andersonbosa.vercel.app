import { createTheme } from '@mui/material/styles'
import { typography } from '../typography'

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

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
})
