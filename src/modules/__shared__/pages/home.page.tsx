'use client'

import { Box } from '@mui/material'
import { ProjectsPage } from '../../projects/pages/Projects'


export const HomePage: React.FC = () => {
  return (
    <>
      <Box>hero</Box>
      <Box>contacts</Box>
      <Box>
        <ProjectsPage />
      </Box>
      <Box>skills</Box>
      <Box>footer</Box>
    </>
  )
}