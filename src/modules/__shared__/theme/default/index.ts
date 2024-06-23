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
  },
}

export const theme = createTheme(themeOptions)
