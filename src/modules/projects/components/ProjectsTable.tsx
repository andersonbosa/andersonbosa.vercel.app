'use client'

import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

import { GenericTable, GenericTableColumn } from '@/modules/__shared__/components/GenericTable'
import { GithubClient } from '@/modules/__shared__/services/github-client.service'

export const ProjectsTable: React.FC = () => {
  const [columns, setColumns] = useState<any[]>([])
  const [data, setData] = useState<any[]>([])

  const loadDataOnComponentMount = async () => {
    const githubRepositories = await GithubClient.getUserRepositories('andersonbosa')
    setData(
      githubRepositories
        .filter(repo => repo.description)
    )

    const cols: GenericTableColumn[] = [
      { id: 'stargazers_count', label: '⭐', options: { defaultSortOrder: 'asc' } },
      { id: 'name', label: 'Repository name' },
      // { id: 'description', label: 'Description', options: { notSortable: true } },
      { id: 'language', label: 'Language' },
    ]
    setColumns(cols)
  }

  const handleSearchChange = (searchValue: string) => {
    console.log('Search changed to:', searchValue)
  }

  const handleSortChange = (orderBy: string, order: 'asc' | 'desc') => {
    console.log('Sort changed:', { orderBy, order })
  }

  const handlePageChange = (page: number, rowsPerPage: number) => {
    console.log('Page changed:', { page, rowsPerPage })
  }


  useEffect(
    () => {
      loadDataOnComponentMount()
      return () => {
        console.log('ProjectsTable unmounted')
      }
    },
    []
  )

  return (
    <Box>
      <GenericTable
        columns={columns}
        data={data}
        options={{
          onSearchChange: handleSearchChange,
          onSortChange: handleSortChange,
          onPageChange: handlePageChange,
        }}
      />
    </Box>
  )
}