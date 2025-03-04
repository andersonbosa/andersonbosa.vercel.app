
import { Theme } from '@mui/material'
import { darkTheme } from './dark/dark.theme'
import { lightTheme } from './light/light.theme'

interface IThemeConfig {
  themes: {
    light: Theme,
    dark: Theme,
  }
}

export const ThemeConfig: IThemeConfig = {
  themes: {
    light: lightTheme,
    dark: darkTheme,
  }
}
