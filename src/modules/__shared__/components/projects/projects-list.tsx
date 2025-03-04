'use client'

import { Grid, } from '@mui/material'

import { Repository } from '../../@types/globals'
import { useIsMobile } from '../../hooks/is-mobile.hook'
import { ProjectCard } from './project-card'

interface ProjectListProps {
  repositories: Repository[]
}

export const ProjectList: React.FC<ProjectListProps> = ({ repositories }) => {
  const isMobile = useIsMobile()
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