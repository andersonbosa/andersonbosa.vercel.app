'use client'

import Loading from '@/app/loading'
import React from 'react'
import { HeroHeader } from '../components/hero-header/hero-header'
import { MainLayout } from '../components/layouts/main-layout'
import { AboutSection } from '../components/sections/about.section'
import { ContactsSection } from '../components/sections/contacts.section'
import { ProjectsSection } from '../components/sections/projects.section'
import { useThemeLoading } from '../hooks/use-theme-loading'
import MuiThemeProvider from '../theme/provider'

export const HomePage: React.FC = () => {
  const { currentThemeMode, useFakeLoading, handleThemeChange } = useThemeLoading()

  const handleLanguageChange = (language: string) => {
    // TODO add i18n
  }

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

export default HomePage