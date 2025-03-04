'use client'

import { useMediaQuery } from '@mui/material'
import { useCustomTheme } from '../contexts/theme.context'

export const useIsMobile = () => {
  const { theme } = useCustomTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return isMobile
}

