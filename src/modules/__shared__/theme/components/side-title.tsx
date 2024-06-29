'use client'

import { Typography, useTheme } from '@mui/material'
import { FunctionComponent } from 'react'

interface SideTitleProps {
  children: React.ReactNode
}

export const SideTitle: FunctionComponent<SideTitleProps> = (props) => {
  const theme = useTheme()

  return (
    <Typography
      // variant='h3'
      color={theme.palette.mode === 'dark' ? 'teal.500' : 'blue.500'}
      fontSize={{
        base: '1.75rem',
        lg: '3rem'
      }}
      sx={{
        writingMode: 'vertical-lr',
        transform: 'rotate(180deg)',
        textTransform: 'uppercase',
        gap: '4px',
        align: 'center'
      }}
    >
      {props.children}
    </Typography>
  )
}

export default SideTitle