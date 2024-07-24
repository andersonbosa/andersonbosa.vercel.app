'use client'

import { useEffect, useState } from 'react'

import Loading from '@/app/loading'
import { Box, Container, Theme } from '@mui/material'

import { Background } from '../components/background'
import { Contact } from '../components/contact/contact'
import { HeroHeader } from '../components/hero-header/hero-header'
import { Menu } from '../components/menu/menu'
import { CursorHighlight } from '../components/cursor-highlight'

import { Config } from '../theme/config'
import MuiThemeProvider from '../theme/provider'

import { ProjectsView } from './projects.view'

import { isMobile } from '../@helpers/is-mobile.helper'


export const HomeView: React.FC = () => {
  const [useFakeLoading, setUseFakeLoading] = useState<boolean>(true)
  const [currentThemeMode, setCurrentThemeMode] = useState<Theme>(Config.themes.default)

  const handleLanguageChange = () => { }

  const handleThemeChange = () => {
    setCurrentThemeMode(
      currentThemeMode.palette.mode === 'light' ? Config.themes.dark : Config.themes.light
    )
  }

  const installPreferedColorScheme = () => {
    const mediaQuery = window?.matchMedia('(prefers-color-scheme: dark)')

    const handleColorSchemeChange = (event: MediaQueryListEvent) => {
      setCurrentThemeMode(
        event.matches ? Config.themes.dark : Config.themes.light
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
      { isMobile() ? <></> : <CursorHighlight /> }
      <Menu onLanguageChange={handleLanguageChange} onThemeToggle={handleThemeChange} />
      <Container>
        <HeroHeader />
        <BlankSpace />
        <ProjectsView />
        <BlankSpace />
        <Contact />
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
