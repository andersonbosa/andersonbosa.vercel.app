import { ThemeOptions, createTheme } from '@mui/material/styles'
import { typography } from '../typography'

export const themeOptions: ThemeOptions = {
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

export const theme = createTheme(themeOptions)
