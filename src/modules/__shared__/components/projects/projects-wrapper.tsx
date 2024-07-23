'use client'

import styles from './projects.module.css'

import { FunctionComponent, Suspense, useEffect, useState } from 'react'

import {
  Box,
  CircularProgress
} from '@mui/material'
import SideTitle from '../side-title'
import { ProjectList } from './projects-list'

interface ProjectsWrapperProps {
  repositories: Repository[]
}

/* TOFIX não está carregando os componentes :erro 500 */
export const ProjectsWrapper: FunctionComponent<ProjectsWrapperProps> = () => {
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
      <Box className={styles.projectsWrapper}>
        <SideTitle>Projects</SideTitle>
        <Box id='projects-list'>
          <ProjectList repositories={repositories} />
        </Box>
      </Box>
    </Suspense>
  )
}


