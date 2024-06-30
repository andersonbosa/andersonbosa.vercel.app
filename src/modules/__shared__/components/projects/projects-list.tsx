'use client'

import { Grid } from '@mui/material'
import { ProjectCard } from './project-card'

interface ProjectListProps {
  repositories: Repository[]
}

export const ProjectList: React.FC<ProjectListProps> = ({ repositories }) => {
  return (
    <Grid container spacing={3}>
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