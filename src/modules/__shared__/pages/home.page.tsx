'use client'

import { Box,  Container } from '@mui/material'
import { HeroHeader } from '../components/hero-header'
import { Sidebar } from '../components/sidebar'
import { useEffect, useState } from 'react'
import Loading from '@/app/loading'
import { Background } from '../components/background'

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
      <Sidebar />

      <Container>
        <HeroHeader />
      </Container>

    </Box>
  )

  return isFakeLoading ? <Loading /> : <Home />
}