'use client'

import { Box, Typography, } from '@mui/material'
import { FunctionComponent } from 'react'
import { useIsMobile } from '../hooks/is-mobile.hook'

interface SideTitleProps {
  children: React.ReactNode
}

export const SideTitle: FunctionComponent<SideTitleProps> = (
  { children, ...rest }
) => {
  const isMobile = useIsMobile()
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'sticky',
        paddingBottom: '1rem',
        top: '5rem',
        height: '100%',
      }}
      {...rest}
    >
      <Typography
        variant='h1'
        component='div'
        // color={theme.palette.mode === 'dark' ? 'teal.500' : 'blue.500'}
        sx={{
          writingMode: 'vertical-lr',
          transform: 'rotate(180deg)',
          textTransform: 'uppercase',
          fontSize: isMobile ? '1.2rem' : '3rem',
          gap: '4px',
          align: 'center',
        }}
      >
        {children}
      </Typography>
    </Box>
  )
}

export default SideTitle