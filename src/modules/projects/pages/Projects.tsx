'use client'

import { Box, Typography } from '@mui/material'
import { ProjectsTable } from '../components/ProjectsTable'

export const ProjectsPage: React.FC = () => {
  return (
    <Box m={2} p={4}>
      <Typography variant='h5'>Projects</Typography>
      <ProjectsTable />
    </Box>
  )
}