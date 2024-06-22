'use client'

import { useEffect, useState } from 'react'



import Loading from '@/app/loading'
import { Box, Container, Theme, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

import { Background } from '../components/background'
import { HeroHeader } from '../components/hero-header/hero-header'
import { Menu } from '../components/menu/menu'

import { theme as darkTheme } from '../theme/dark'
import { theme as lightTheme } from '../theme/default'
import { useSystemTheme } from '../hooks/use-system-theme.hook'


const configs = {
  themes: {
    light: lightTheme,
    dark: darkTheme,
  }
}

export const HomeView: React.FC = () => {
  const [isFakeLoading, setIsFakeLoading] = useState(false)
  const [themeMode, setThemeMode] = useState<Theme>(lightTheme)

  const handleLanguageChange = () => { }

  const handleThemeChange = () => {
    setThemeMode(themeMode.palette.mode === 'light' ? configs.themes.dark : configs.themes.light)
  }

  const Home = () => (
    <Box>
      <Background />
      <Menu onLanguageChange={handleLanguageChange} onThemeToggle={handleThemeChange} />
      <Container>
        <HeroHeader />
      </Container>
    </Box>
  )

  const installPreferedColorScheme = () => {
    const mediaQuery = window?.matchMedia('(prefers-color-scheme: dark)')
    const handleColorSchemeChange = (event: MediaQueryListEvent) => {
      setThemeMode(event.matches ? configs.themes.dark : configs.themes.light)
    }

    mediaQuery.addEventListener('change', handleColorSchemeChange)
    return () => { mediaQuery.removeEventListener('change', handleColorSchemeChange) }
  }

  const installFakeLoading = () => {
    const timer = setTimeout(() => { setIsFakeLoading(false) }, 1230)
    return () => { clearTimeout(timer) }
  }

  useEffect(installPreferedColorScheme, [])

  useEffect(installFakeLoading, [])

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      {isFakeLoading ? <Loading /> : <Home />}
    </ThemeProvider>
  )
}