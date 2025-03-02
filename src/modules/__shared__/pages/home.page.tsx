'use client'

import Loading from '@/app/loading'
import React from 'react'
import { HeroHeader } from '../components/hero-header/hero-header'
import { MainLayout } from '../components/layouts/main-layout'
import { AboutSection } from '../components/sections/about.section'
import { ContactsSection } from '../components/sections/contacts.section'
import { ProjectsSection } from '../components/sections/projects.section'
import { useThemeLoading } from '../hooks/use-theme-loading'

export const HomePage: React.FC = () => {
  const { useFakeLoading } = useThemeLoading()
  return (
    <>
      {
        useFakeLoading
          ? (<Loading />)
          : (
            <MainLayout>
              <HeroHeader />
              <AboutSection />
              <ProjectsSection />
              <ContactsSection />
            </MainLayout>
          )
      }
    </>
  )
}

export default HomePage