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


  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const repos: Repository[] = await fetch('/api/repositories')
          .then(r => r.json())
        setRepositories(repos)
      } catch (err) {
      }
    }

    fetchRepositories()
  }, [])


  const Loading: React.FC = () => (
    <CircularProgress color='primary' />
  )

  return (
    <Box id='projects'>
      <Box position='sticky'>
        <SideTitle>Projects</SideTitle>
      </Box>
      <Box>
        <Suspense fallback={Loading}>
          <Grid container spacing={3}>
            {repositories.map((repo) => (
              <Grid item xs={12} sm={6} md={4} key={repo.id}>
                <Card>
                  <CardContent>
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
        </Suspense>
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Button variant="contained" color="primary">
            View More
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectsView