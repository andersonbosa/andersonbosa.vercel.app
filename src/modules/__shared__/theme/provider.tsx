'use client'

import { CommonStyles } from '@/modules/__shared__/theme/common'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'
import { FunctionComponent, ReactNode, useEffect } from 'react'


interface IMuiThemeProviderProps {
  children: ReactNode
  theme: Theme
}

export const MuiThemeProvider: FunctionComponent<IMuiThemeProviderProps> = (props) => {

  const listenThemeChangeToHandleScrollTheme = () => {
    const className = props.theme.palette.mode === 'light' ? 'light-theme' : 'dark-theme'
    document.body.classList.add(className)
    return () => {
      document.body.classList.remove(className)
    }
  }

  useEffect(listenThemeChangeToHandleScrollTheme, [props.theme])

  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline />
      {CommonStyles}
      {props.children}
    </ThemeProvider>
  )
}

export default MuiThemeProvider
