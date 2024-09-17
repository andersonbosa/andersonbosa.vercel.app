'use client'

import { Grid, useTheme } from '@mui/material'

import { ProjectCard } from './project-card'
import { useIsMobile } from '../../hooks/is-mobile.hook'

interface ProjectListProps {
  repositories: Repository[]
}

export const ProjectList: React.FC<ProjectListProps> = ({ repositories }) => {
  const theme = useTheme()
  const isMobile = useIsMobile(theme)
  return (
    <Grid container spacing={3} sx={{ width: isMobile ? '100vw' : 'inherit' }}>
      {
        repositories.map(
          (repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          )
        )
      }
    </Grid>
  )
}