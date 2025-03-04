
import { Theme } from '@mui/material'
import { darkTheme } from './dark/dark.theme'
import { lightTheme } from './light/light.theme'

interface IThemeConfig {
  light: Theme,
  dark: Theme,
}

export const ThemeConfig: IThemeConfig = {
  light: lightTheme,
  dark: darkTheme,
}
