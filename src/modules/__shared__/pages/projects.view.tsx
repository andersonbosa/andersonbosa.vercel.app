'use client'

import { FunctionComponent, Suspense, useEffect, useState } from 'react'

import {
  Box,
  Button,
  CircularProgress
} from '@mui/material'

import { ProjectsWrapper } from '../components/projects/projects-wrapper'

interface ProjectsViewProps { }

/* TOFIX não está carregando os componentes :erro 500 */
export const ProjectsView: FunctionComponent<ProjectsViewProps> = () => {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(
    () => {
      const fetchRepositories = async () => {
        try {
          const repos: Repository[] = await fetch('/api/repositories').then(r => r.json())
          setRepositories(repos)
        } catch (err) {
        }
      }

      fetchRepositories()
    }, []
  )

  return (
    <Suspense fallback={<CircularProgress color='primary' />}>
      <Box id='projects'>
        <ProjectsWrapper repositories={repositories} />
        <Box marginBottom={4}></Box>
        <Box display="flex" justifyContent="center">
          <a href='https://github.com/andersonbosa?tab=repositories' target='_blank'>
            <Button variant="outlined" color="primary">
              View More
            </Button>
          </a>
        </Box>
      </Box>
    </Suspense>
  )
}


