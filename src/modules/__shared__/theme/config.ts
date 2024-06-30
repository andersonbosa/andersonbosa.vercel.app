
import { Theme } from '@mui/material'
import { theme as darkTheme } from '../theme/dark'
import { theme as lightTheme } from '../theme/default'

type ThemeConfig = {
  themes: {
    default: Theme,
    light: Theme,
    dark: Theme,
  }
}

export const Config: ThemeConfig = {
  themes: {
    default: darkTheme,
    light: lightTheme,
    dark: darkTheme,
  }
}