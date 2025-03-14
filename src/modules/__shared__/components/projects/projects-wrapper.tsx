'use client'

import styles from './projects.module.css'

import { FunctionComponent, Suspense, useEffect, useState } from 'react'

import {
  Box,
  CircularProgress
} from '@mui/material'
import { Repository } from '../../@types/globals'
import SideTitle from '../side-title'
import { ProjectList } from './projects-list'

interface ProjectsWrapperProps {
  repositories: Repository[]
}

export const ProjectsWrapper: FunctionComponent<ProjectsWrapperProps> = () => {
  const [repositories, setRepositories] = useState<Repository[]>([])
  useEffect(
    () => {
      const fetchRepositories = async () => {
        try {
          const repos: Repository[] = await fetch('/api/repositories').then(r => r.json())
          setRepositories(repos)
        } catch (err) {
          console.error(err)
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

