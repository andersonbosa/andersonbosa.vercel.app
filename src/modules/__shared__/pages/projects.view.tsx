'use client'

import { FunctionComponent, Suspense, useEffect, useState } from 'react'

import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography
} from '@mui/material'

import SideTitle from '../components/side-title'


interface ProjectsViewProps { }

export const ProjectsView: FunctionComponent<ProjectsViewProps> = () => {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(
    () => {
      const fetchRepositories = async () => {
        try {
          const repos: Repository[] = await fetch('/api/repositories')
            .then(r => r.json())
          setRepositories(repos)
        } catch (err) {
        }
      }

      fetchRepositories()
    }, []
  )

  return (
    <Box id='projects'>
      <Box id='projects-wrapper' sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: '100%',
        // gap: '2rem',
      }}
      >
          <SideTitle>Projects</SideTitle>
        <Box>
        </Box>

        <Box id='projects-list'>
          <Suspense fallback={<CircularProgress color='primary' />}>
            <ProjectList repositories={repositories} />
          </Suspense>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" marginTop={2}>
        <a href='https://github.com/andersonbosa?tab=repositories' target='_blank'>
          <Button variant="outlined" color="primary">
            View More
          </Button>
        </a>
      </Box>
    </Box>
  )
}

export default ProjectsView


const ProjectCard: React.FC<{}> = (props) => {
  return (
    <></>
  )
}

interface ProjectListProps {
  repositories: Repository[]
}

const ProjectList: React.FC<ProjectListProps> = (props) => {
  return (
    <Grid container spacing={3}>
      {props.repositories.map((repo) => (
        <Grid item xs={12} sm={6} md={4} key={repo.id}>
          <Card>
            <CardContent >
              <Typography variant="h5" component="div">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {repo.description || 'No description'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Stars: {repo.stargazers_count}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Language: {repo.language}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}