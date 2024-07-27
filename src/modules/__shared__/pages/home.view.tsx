'use client'

import { useEffect, useState } from 'react'

import Loading from '@/app/loading'
import { Box, Container, Theme } from '@mui/material'

import { Background } from '../components/background'
import { CursorHighlight } from '../components/cursor-highlight'
import { HeroHeader } from '../components/hero-header/hero-header'
import { Menu } from '../components/menu/menu'

import { ThemeConfig } from '../theme/config'
import MuiThemeProvider from '../theme/provider'

import { ProjectsView } from './projects.view'

import { AboutView } from './about.view'
import { ContactsView } from './contacts.view'
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
    const mediaQuery = window?.matchMedia('(prefers-color-scheme: dark)')

    const handleColorSchemeChange = (event: MediaQueryListEvent) => {
      setCurrentThemeMode(
        event.matches ? ThemeConfig.themes.dark : ThemeConfig.themes.light
      )
    }

    handleColorSchemeChange(mediaQuery as any)

    mediaQuery.addEventListener('change', handleColorSchemeChange)
    return () => { mediaQuery.removeEventListener('change', handleColorSchemeChange) }
  }

  const installFakeLoading = () => {
    const timer = setTimeout(() => { setUseFakeLoading(false) }, 321)
    return () => { clearTimeout(timer) }
  }

  const BlankSpace: React.FC<{ space?: string }> = ({ space }) => (<Box sx={{ height: space ?? '20vh' }}></Box>)

  const Home = () => (
    <Box>
      <Background />
      {!isMobile && <CursorHighlight />}
      <Menu onLanguageChange={handleLanguageChange} onThemeToggle={handleThemeChange} />
      <Container>
        <HeroHeader />
        <AboutView />
        <BlankSpace />
        <BlankSpace />
        <ProjectsView />
        <BlankSpace />
        <ContactsView />
        <BlankSpace space='8vh' />
      </Container>
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
