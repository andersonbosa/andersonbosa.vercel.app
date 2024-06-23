import * as React from 'react'
import { CommonStyles } from '@/modules/__shared__/theme/common'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'

interface IMuiThemeProviderProps {
  children: React.ReactNode
  theme: Theme
}

export const MuiThemeProvider: React.FunctionComponent<IMuiThemeProviderProps> = (props) => {
  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      {CommonStyles}
      {props.children}
    </ThemeProvider>
  )
}

export default MuiThemeProvider
