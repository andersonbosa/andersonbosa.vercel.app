import { ThemeOptions, createTheme } from '@mui/material/styles'

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
}

export const theme = createTheme(themeOptions)
