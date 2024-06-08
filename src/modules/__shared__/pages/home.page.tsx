'use client'

import { Box, Typography } from '@mui/material'
import { ProjectsPage } from '../../projects/pages/Projects'


export const HomePage: React.FC = () => {
  return (
    <Box>
      <Box>
        {/* hero */}
      </Box>
      <Box>
        <Typography variant='h5'>Contacts</Typography>
      </Box>
      <Box>
        <ProjectsPage />
      </Box>
      <Box>skills</Box>
      <Box>footer</Box>
    </Box>
  )
}