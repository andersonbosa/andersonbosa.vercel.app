'use client'

import { FunctionComponent, Suspense, useEffect, useState } from 'react'

import {
  Box,
  Button,
  CircularProgress
} from '@mui/material'
import { Repository } from '../../@types/globals'
import { BlankSpace } from '../blank-space'
import { ProjectsWrapper } from '../projects/projects-wrapper'


interface ProjectsSectionProps { }

export const ProjectsSection: FunctionComponent<ProjectsSectionProps> = () => {
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
        <BlankSpace />
        <ProjectsWrapper repositories={repositories} />
        <Box marginBottom={4}></Box>
        <Box display="flex" justifyContent="center">
          <a href='https://github.com/andersonbosa?tab=repositories' target='_blank'>
            <Button variant="outlined" color="primary"> View More </Button>
          </a>
        </Box>
      </Box>
    </Suspense>
  )
}


