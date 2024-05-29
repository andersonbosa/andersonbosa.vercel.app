'use client'

import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

import { GenericTable } from '@/modules/__shared__/components/Table'
import { GithubClient } from '@/modules/__shared__/services/github-client.service'

export const ProjectsTable: React.FC = () => {
  const [tableColumns, setTableColumns] = useState<any[]>([])
  const [tableData, setTableData] = useState<any[]>([])

  const onComponentMount = async () => {
    const githubRepositories = await GithubClient.getUserRepositories('andersonbosa')
    setTableData(githubRepositories)

    setTableColumns([
      { id: 'stargazers_count', label: '⭐' },
      { id: 'name', label: 'Repository name' },
      { id: 'description', label: 'Description', notSortable: true },
      { id: 'language', label: 'Language' },
    ])
  }

  useEffect(
    () => {
      onComponentMount()
      return () => {
        console.log('ProjectsTable unmounted')
      }
    },
    []
  )

  return (
    <Box>
      <GenericTable
        columns={tableColumns}
        data={tableData}
        rowsPerPageOptions={[8, 32, 64, 128]}
        showPageNumbers={true}
        pagination={true}
      />
    </Box>
  )
}