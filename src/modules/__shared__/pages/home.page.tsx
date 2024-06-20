'use client'

import Loading from '@/app/loading'
import { Box, Container, ThemeProvider } from '@mui/material'
import { useEffect, useState } from 'react'
import { Background } from '../components/background'
import { HeroHeader } from '../components/hero-header'
import { Menu } from '../components/menu'
import { theme as lightTheme } from '../theme/default'
import { theme as darkTheme } from '../theme/dark'
import CssBaseline from '@mui/material/CssBaseline'

export const HomePage: React.FC = () => {
  const [isFakeLoading, setIsFakeLoading] = useState(false)
  const [themx, setThemx] = useState<any>(lightTheme)

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
          console.log(themx)
          setThemx(themx === lightTheme ? darkTheme : lightTheme)
         }}
      />

      <Container>
        <HeroHeader />
      </Container>

    </Box>
  )


  return (
    <ThemeProvider theme={themx}>
      <CssBaseline />
      {isFakeLoading ? <Loading /> : <Home />}
    </ThemeProvider>
  )
}