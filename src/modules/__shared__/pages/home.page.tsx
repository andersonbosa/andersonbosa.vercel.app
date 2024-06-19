'use client'

import Loading from '@/app/loading'
import { Box, Container } from '@mui/material'
import { useEffect, useState } from 'react'
import { Background } from '../components/background'
import { HeroHeader } from '../components/hero-header'
import { Menu } from '../components/menu'

export const HomePage: React.FC = () => {
  const [isFakeLoading, setIsFakeLoading] = useState(false)

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
        onThemeToggle={() => { }}
      />

      <Container>
        <HeroHeader />
      </Container>

    </Box>
  )

  return isFakeLoading ? <Loading /> : <Home />
}