'use client'

import React from 'react'
import { HeroHeader } from '../components/hero-header/hero-header'
import { MainLayout } from '../components/layouts/main-layout'
import { AboutSection } from '../components/sections/about.section'
import { ContactsSection } from '../components/sections/contacts.section'
import { ProjectsSection } from '../components/sections/projects.section'

export const HomePage: React.FC = () => {
  return (
    <>
      <MainLayout>
        <HeroHeader />
        <AboutSection />
        <ProjectsSection />
        <ContactsSection />
      </MainLayout>
    </>
  )
}

export default HomePage