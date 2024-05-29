'use client'

import { Box, Typography } from '@mui/material'
import { ProjectsTable } from '../components/ProjectsTable'

export const ProjectsPage: React.FC = () => {
  return (
    <Box sx={{ border: '1px solid black' }} m={2} p={4}>
      <Typography>Projects</Typography>

      <ProjectsTable />
    </Box>
  )
}