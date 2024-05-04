'use client'

import { fetchGithubRepositoriesByUsername } from '@/app/lib/fetch'
import { GithubRepo } from '@/lib/types/global'
import { HTMLAttributes, useEffect, useState } from 'react'
import Header from '../theme/Header'
import Section from '../theme/Section'
import { PageSectionsID } from '@/constants'

interface ProjectsProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
}

export function Projects ({
  children,
  ...childrenAttributes

}: ProjectsProps): React.JSX.Element {
  const [displayedProjects, setDisplayedProjects] = useState<GithubRepo[]>([])

  useEffect(() => {
    fetchGithubRepositoriesByUsername('andersonbosa')
      .then((response) => {
        setDisplayedProjects(response.data)
      })
  }, [])


  return (
    <>
      <Section
        {...childrenAttributes}
        id={PageSectionsID.projects}
        className={childrenAttributes.className?.concat('container')}
      >
        <div>
          <Header>{/* t('Projetos') */} Projetos</Header>
        </div>

        <div className='container-with-scroll'>
          {
            displayedProjects.length > 0 && (
              displayedProjects.map(
                (repo, index) => (
                  <div data-key={btoa(String(index))} key={btoa(String(index))} >
                    * {repo.name}
                  </div>
                )
              )
            )
          }
        </div>
      </Section>
    </>
  )
}
