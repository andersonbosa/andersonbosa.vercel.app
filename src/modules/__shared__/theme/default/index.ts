import { ThemeOptions, createTheme } from '@mui/material/styles'

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
}

export const theme = createTheme(themeOptions)
