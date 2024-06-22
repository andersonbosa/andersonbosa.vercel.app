'use client'

import Loading from '@/app/loading'
import { Box, Container, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { useEffect, useMemo, useState } from 'react'
import { Background } from '../components/background'
import { HeroHeader } from '../components/hero-header/hero-header'
import { Menu } from '../components/menu/menu'
import { Sidebar } from '../components/sidebar/sidebar'
import { theme as darkTheme } from '../theme/dark'
import { theme as lightTheme } from '../theme/default'

export const HomeView: React.FC = () => {
  const [isFakeLoading, setIsFakeLoading] = useState(false)
  const [themeMode, setThemeMode] = useState<any>(darkTheme)

  const installFakeLoading = () => {
    const timer = setTimeout(() => { setIsFakeLoading(false) }, 1230)
    return () => clearTimeout(timer)
  }

  const isDarkPreferedBySystem = () => window.matchMedia('(prefers-color-scheme: dark)').matches

  const handleThemeChange = () => {
    setThemeMode(themeMode === lightTheme ? darkTheme : lightTheme)
  }

  const handleLanguageChange = () => { }

  const currentTheme = useMemo(() => themeMode === lightTheme ? darkTheme : lightTheme, [themeMode])

  useEffect(installFakeLoading, [])

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
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {isFakeLoading ? <Loading /> : <Home />}
    </ThemeProvider>
  )
}