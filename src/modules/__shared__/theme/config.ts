
import { Theme } from '@mui/material'
import { theme as darkTheme } from '../theme/dark'
import { theme as lightTheme } from '../theme/default'

interface IThemeConfig {
  themes: {
    default: Theme,
    light: Theme,
    dark: Theme,
  }
}

export const ThemeConfig: IThemeConfig = {
  themes: {
    default: darkTheme,
    light: lightTheme,
    dark: darkTheme,
  }
}
