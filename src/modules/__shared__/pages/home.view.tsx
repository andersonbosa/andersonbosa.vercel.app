'use client'

import { useEffect, useState } from 'react'

import Loading from '@/app/loading'
import { Box, Container, CssBaseline, Theme } from '@mui/material'

import { Background } from '../components/background'
import { Contact } from '../components/contact/contact'
import { HeroHeader } from '../components/hero-header/hero-header'
import { Menu } from '../components/menu/menu'

import { theme as darkTheme } from '../theme/dark'
import { theme as lightTheme } from '../theme/default'
import MuiThemeProvider from '../theme/provider'
import ProjectsView from '../components/projects/projects'


const configs = {
  themes: {
    default: darkTheme,
    light: lightTheme,
    dark: darkTheme,
  }
}

export const HomeView: React.FC = () => {
  const [isFakeLoading, setIsFakeLoading] = useState(false)
  const [currentThemeMode, setCurrentThemeMode] = useState<Theme>(configs.themes.default)

  const handleLanguageChange = () => { }

  const handleThemeChange = () => {
    setCurrentThemeMode(
      currentThemeMode.palette.mode === 'light' ? configs.themes.dark : configs.themes.light
    )
  }

  const installPreferedColorScheme = () => {
    const mediaQuery = window?.matchMedia('(prefers-color-scheme: dark)')

    const handleColorSchemeChange = (event: MediaQueryListEvent) => {
      setCurrentThemeMode(
        event.matches ? configs.themes.dark : configs.themes.light
      )
    }

    handleColorSchemeChange(mediaQuery as any)

    mediaQuery.addEventListener('change', handleColorSchemeChange)
    return () => { mediaQuery.removeEventListener('change', handleColorSchemeChange) }
  }

  const installFakeLoading = () => {
    const timer = setTimeout(() => { setIsFakeLoading(false) }, 1230)
    return () => { clearTimeout(timer) }
  }

  const Home = () => (
    <Box>
      <Background />
      <Menu onLanguageChange={handleLanguageChange} onThemeToggle={handleThemeChange} />

      <Container>
        <HeroHeader />
        <ProjectsView />
        <Contact />
        <Box sx={{ height: '4rem' }}></Box>
      </Container>
    </Box>
  )

  useEffect(installPreferedColorScheme, [])
  useEffect(installFakeLoading, [])

  return (
    <MuiThemeProvider theme={currentThemeMode}>
      {
        isFakeLoading
          ? <Loading />
          : <Home />
      }
    </MuiThemeProvider>
  )
}