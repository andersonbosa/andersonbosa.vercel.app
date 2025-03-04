'use client'

import { ThemeProvider } from '@mui/material'
import { FunctionComponent, ReactNode } from 'react'
import { useCustomTheme } from '../contexts/theme.context'

interface IMuiThemeProviderProps {
  children: ReactNode
}

export const MuiThemeProvider: FunctionComponent<IMuiThemeProviderProps> = ({ children }) => {
  const { theme } = useCustomTheme()
  return (
    <ThemeProvider theme={theme}> {children} </ThemeProvider>
  )
}