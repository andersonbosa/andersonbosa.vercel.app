'use client'

import { Box, Typography, useTheme } from '@mui/material'
import { FunctionComponent } from 'react'

interface SideTitleProps {
  children: React.ReactNode
}

export const SideTitle: FunctionComponent<SideTitleProps> = (
  { children, ...rest }
) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        position: 'sticky',
        paddingBottom: '1rem',
        top: '5rem',
        height: '100%',
        // width: '100%',
      }}
      {...rest}
    >
      <Typography
        variant='h1'
        color={theme.palette.mode === 'dark' ? 'teal.500' : 'blue.500'}
        fontSize='3rem'
        sx={{
          writingMode: 'vertical-lr',
          transform: 'rotate(180deg)',
          textTransform: 'uppercase',
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