'use client'

import Loading from '@/app/loading'
import { Box, Container, Theme, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { useEffect, useState } from 'react'
import { Background } from '../components/background'
import { HeroHeader } from '../components/hero-header/hero-header'
import { Menu } from '../components/menu/menu'
import { Sidebar } from '../components/sidebar/sidebar'
import { useSystemTheme } from '../hooks/use-system-theme.hook'
import { theme as darkTheme } from '../theme/dark'
import { theme as lightTheme } from '../theme/default'

export const HomeView: React.FC = () => {
  const systemTheme = useSystemTheme()/* TOFIX ReferenceError: window is not defined */

  const [isFakeLoading, setIsFakeLoading] = useState(false)
  const [themeMode, setThemeMode] = useState<Theme>(lightTheme)

  const handleLanguageChange = () => { }

  const handleThemeChange = () => {
    setThemeMode(themeMode.palette.mode === 'light' ? darkTheme : lightTheme)
  }

  const installFakeLoading = () => {
    const timer = setTimeout(() => { setIsFakeLoading(false) }, 1230)
    return () => clearTimeout(timer)
  }

  const installSystemColorPreference = () => {
    setThemeMode(systemTheme === 'light' ? lightTheme : darkTheme)
  }

  useEffect(installFakeLoading, [])
  useEffect(installSystemColorPreference, [systemTheme])

  const Home = () => (
    <Box>
      <Background />
      <Sidebar />

      <Menu onLanguageChange={handleLanguageChange} onThemeToggle={handleThemeChange} />

      <Container>
        <HeroHeader />
      </Container>
    </Box>
  )

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      {isFakeLoading ? <Loading /> : <Home />}
    </ThemeProvider>
  )
}