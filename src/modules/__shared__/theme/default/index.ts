import { ThemeOptions, createTheme } from '@mui/material/styles'

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
}

export const theme = createTheme(themeOptions)
