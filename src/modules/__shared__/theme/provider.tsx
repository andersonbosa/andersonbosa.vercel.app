'use client'

import { ThemeProvider } from '@mui/material'
import { FunctionComponent, ReactNode } from 'react'
import { useMuiTheme } from '../contexts/theme.context'

interface IMuiThemeProviderProps {
  children: ReactNode
}

export const MuiThemeProvider: FunctionComponent<IMuiThemeProviderProps> = ({ children }) => {
  const { theme } = useMuiTheme()
  return (
    <ThemeProvider theme={theme}> {children} </ThemeProvider>
  )
}