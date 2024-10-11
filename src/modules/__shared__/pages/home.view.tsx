'use client'

import { useEffect, useState } from 'react'

import Loading from '@/app/loading'
import { Box, Container, Theme, Typography } from '@mui/material'

import { ThemeConfig } from '../theme/config'
import MuiThemeProvider from '../theme/provider'

import { ScrollToTopButton } from '../components/scroll-to-top-button'
import { AboutView } from './about.view'
import { ContactsView } from './contacts.view'
import { ProjectsView } from './projects.view'
import { ExperiencesView } from './experiences.view'

import { Background } from '../components/background'
import { CursorHighlight } from '../components/cursor-highlight'
import { HeroHeader } from '../components/hero-header/hero-header'
import { Menu } from '../components/menu/menu'
import { useIsMobile } from '../hooks/is-mobile.hook'


export const HomeView: React.FC = () => {
  const [useFakeLoading, setUseFakeLoading] = useState<boolean>(true)
  const [currentThemeMode, setCurrentThemeMode] = useState<Theme>(ThemeConfig.themes.default)
  const isMobile = useIsMobile(currentThemeMode)

  const handleLanguageChange = () => { }

  const handleThemeChange = () => {
    setCurrentThemeMode(
      currentThemeMode.palette.mode === 'light' ? ThemeConfig.themes.dark : ThemeConfig.themes.light
    )
  }

  const installPreferedColorScheme = () => {
    const handleColorSchemeChange = (event: MediaQueryListEvent) => {
      setCurrentThemeMode(
        event.matches ? ThemeConfig.themes.dark : ThemeConfig.themes.light
      )
    }

    const mediaQuery = window?.matchMedia('(prefers-color-scheme: dark)')
    handleColorSchemeChange(mediaQuery as any)
    mediaQuery.addEventListener('change', handleColorSchemeChange)
    return () => { mediaQuery.removeEventListener('change', handleColorSchemeChange) }
  }

  const installFakeLoading = () => {
    const timer = setTimeout(() => { setUseFakeLoading(false) }, 321)
    return () => { clearTimeout(timer) }
  }

  const Footer: React.FC = () => {
    return (
      <footer>
        <Container maxWidth="lg" >
          <Typography variant="body2" color="text.secondary" align="center" pb={6}>
            {'Created by Anderson Bosa.'}
          </Typography>
        </Container>
      </footer>
    )
  }

  const Home = () => (
    <Box>
      <Menu onLanguageChange={handleLanguageChange} onThemeToggle={handleThemeChange} />

      <Container>
        <HeroHeader />
        <AboutView />
        <ExperiencesView />
        <ProjectsView />
        <ContactsView />
        <Footer />
      </Container>

      {!isMobile && <CursorHighlight />}
      <ScrollToTopButton />
      <Background />
    </Box>
  )

  useEffect(installPreferedColorScheme, [])
  useEffect(installFakeLoading, [])

  return (
    <MuiThemeProvider theme={currentThemeMode}>
      {
        useFakeLoading
          ? <Loading />
          : <Home />
      }
    </MuiThemeProvider>
  )
}
