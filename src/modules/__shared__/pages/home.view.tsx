'use client'

import Loading from '@/app/loading'
import React, { useEffect, useState } from 'react'
import { HeroHeader } from '../components/hero-header/hero-header'
import { MainLayout } from '../components/layouts/main-layout'
import { AboutSection } from '../components/sections/about.section'
import { ContactsSection } from '../components/sections/contacts.section'
import { ProjectsSection } from '../components/sections/projects.section'
import { ThemeConfig } from '../theme/config'
import MuiThemeProvider from '../theme/provider'

export const HomeView: React.FC = () => {
  const [useFakeLoading, setUseFakeLoading] = useState<boolean>(true)
  const [currentThemeMode, setCurrentThemeMode] = useState(ThemeConfig.themes.default)

  const handleLanguageChange = (language: string) => {
    // TODO add i18n
  }

  const handleThemeChange = () => {
    setCurrentThemeMode(
      currentThemeMode.palette.mode === 'light' ? ThemeConfig.themes.dark : ThemeConfig.themes.light
    )
  }

  const installPreferredColorScheme = () => {
    const handleColorSchemeChange = (event: MediaQueryListEvent) => {
      setCurrentThemeMode(event.matches ? ThemeConfig.themes.dark : ThemeConfig.themes.light)
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    handleColorSchemeChange({ matches: mediaQuery.matches } as MediaQueryListEvent)
    mediaQuery.addEventListener('change', handleColorSchemeChange)
    return () => mediaQuery.removeEventListener('change', handleColorSchemeChange)
  }

  const installFakeLoading = () => {
    const timer = setTimeout(() => setUseFakeLoading(false), 321)
    return () => clearTimeout(timer)
  }

  useEffect(installPreferredColorScheme, [])
  useEffect(installFakeLoading, [])

  const HomeContent = () => (
    <>
      <HeroHeader />
      <AboutSection />
      <ProjectsSection />
      <ContactsSection />
    </>
  )

  return (
    <MuiThemeProvider theme={currentThemeMode}>
      {useFakeLoading ? (
        <Loading />
      ) : (
        <MainLayout
          theme={currentThemeMode}
          onThemeToggle={handleThemeChange}
          onLanguageChange={handleLanguageChange}
        >
          <HomeContent />
        </MainLayout>
      )}
    </MuiThemeProvider>
  )
}

export default HomeView