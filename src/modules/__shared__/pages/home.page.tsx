'use client'

import Loading from '@/app/loading'
import { Box, Container, ThemeProvider, useTheme } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { Background } from '../components/background'
import { HeroHeader } from '../components/hero-header'
import { Menu } from '../components/menu'
import { theme as lightTheme } from '../theme/default'
import { theme as darkTheme } from '../theme/dark'
import CssBaseline from '@mui/material/CssBaseline'

export const HomePage: React.FC = () => {
  const [isFakeLoading, setIsFakeLoading] = useState(false)
  const [themeMode, setThemeMode] = useState<any>(darkTheme)

  const installFakeLoading = () => {
    const timer = setTimeout(() => { setIsFakeLoading(false) }, 1230)
    return () => clearTimeout(timer)
  }

  useEffect(installFakeLoading, [])

  const Home = () => (
    <Box>
      <Background />
      <Menu
        onLanguageChange={() => { }}
        onThemeToggle={() => {
          setThemeMode(themeMode === lightTheme ? darkTheme : lightTheme)
        }}
      />

      <Container>
        <HeroHeader />
      </Container>

    </Box>
  )

  const theme = useMemo(() => themeMode === lightTheme ? darkTheme : lightTheme, [themeMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isFakeLoading ? <Loading /> : <Home />}
    </ThemeProvider>
  )
}