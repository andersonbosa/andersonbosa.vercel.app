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
    // neutral: {
    //   Main: '#ccc',
    // },
    background: {
      default: '#363636',
    },
  },
}

export const theme = createTheme(themeOptions)
