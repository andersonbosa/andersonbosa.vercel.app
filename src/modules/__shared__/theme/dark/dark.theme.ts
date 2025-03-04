import { ThemeOptions, createTheme } from '@mui/material/styles'
import { typography } from '../typography'

export const themeOptions: ThemeOptions = {
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
    mode: 'dark',
    primary: {
      main: '#D8804E',
    },
    secondary: {
      main: '#AE00FF',
    },
    background: {
      default: '#363636',
    },
    text: {
      primary: '#ebebeb',
    },
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

export const darkTheme = createTheme(themeOptions)
