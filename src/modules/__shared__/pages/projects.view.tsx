'use client'

import { Box } from '@mui/material'
import { FunctionComponent } from 'react'

import SideTitle from '../theme/components/side-title'

interface ProjectsViewProps {

}

export const ProjectsView: FunctionComponent<ProjectsViewProps> = () => {
  return (
    <Box id='projects'>
      <Box position='sticky'>
        <SideTitle>Projects</SideTitle>
      </Box>
      <Box>
        {/* TODO add project cards, max 3 columns. when mobile, 1 column */}
        {/* TODO add button view more */}
      </Box>
    </Box>
  )
}

export default ProjectsView