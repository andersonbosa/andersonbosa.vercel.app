'use client'

import { Box, Typography } from '@mui/material'
import { ProjectsPage } from '../../projects/pages/Projects'


export const HomePage: React.FC = () => {
  return (
    <Box>
      <Box id="hero-header">
        <p>Hello, friend.</p>
        <p><span>i&apos;m</span><h1>Anderson Bosa.</h1></p>
        <p><h3>I build secure digital experiences!</h3></p>
        <p>Passionate about technology and hacking, software engineer
          since 2019.</p>
      </Box>

      {/* 
      <Box>
        <Typography variant='h5'>Contacts</Typography>
      </Box>
       */}
    </Box>
  )
}