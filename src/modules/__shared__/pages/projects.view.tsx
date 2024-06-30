'use client'

import { FunctionComponent, Suspense, useEffect, useState } from 'react'

import {
  Box,
  Button,
  CircularProgress
} from '@mui/material'

import { ProjectList } from '../components/projects/projects-list'
import SideTitle from '../components/side-title'

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
            <ProjectList repositories={repositories} />
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
    </Suspense>
  )
}


