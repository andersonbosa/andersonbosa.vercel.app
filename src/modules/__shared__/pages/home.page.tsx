'use client'

import { Box, Container } from '@mui/material'
import { HeroHeader } from '../components/hero-header'
import { Sidebar } from '../components/sidebar'
import { useEffect, useState } from 'react'
import Loading from '@/app/loading'

export const HomePage: React.FC = () => {
  const [isFakeLoading, setIsFakeLoading] = useState(true)

  const installFakeLoading = () => {
    const timer = setTimeout(() => { setIsFakeLoading(false) }, 1230)
    return () => clearTimeout(timer)
  }

  useEffect(installFakeLoading, [])

  return isFakeLoading ? <Loading /> : (
    <Box>
      <Sidebar />

      <Container>
        <HeroHeader />
      </Container>

    </Box>
  )
}