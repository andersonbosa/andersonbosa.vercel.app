'use client'

import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

import { GenericTable } from '@/modules/__shared__/components/Table'


export const ProjectsTable: React.FC = () => {
  const [tableColumns, setTableColumns] = useState<any[]>([])
  const [tableData, setTableData] = useState<any[]>([])


  useEffect(() => {

    setTableColumns([
      { id: 'name', label: 'Name' },
      { id: 'age', label: 'Age' },
      { id: 'job', label: 'Job' },
    ])

    setTableData([
      { name: 'John Doe', age: 28, job: 'Accounts' },
      { name: 'Jane Smith', age: 34, job: 'Operations' },
      { name: 'Alice Johnson', age: 24, job: 'Creative' },
      { name: 'Christopher Schneider', age: 21, job: 'Data' },
      { name: 'Maurice Padilla', age: 23, job: 'Applications' },
      { name: 'Manuel West', age: 33, job: 'Functionality' },
      { name: 'John Doe', age: 28, job: 'Accounts' },
      { name: 'Jane Smith', age: 34, job: 'Operations' },
      { name: 'Alice Johnson', age: 24, job: 'Creative' },
      { name: 'Christopher Schneider', age: 21, job: 'Data' },
      { name: 'Maurice Padilla', age: 23, job: 'Applications' },
      { name: 'Manuel West', age: 33, job: 'Functionality' },
      { name: 'John Doe', age: 28, job: 'Accounts' },
      { name: 'Jane Smith', age: 34, job: 'Operations' },
      { name: 'Alice Johnson', age: 24, job: 'Creative' },
      { name: 'Christopher Schneider', age: 21, job: 'Data' },
      { name: 'Maurice Padilla', age: 23, job: 'Applications' },
      { name: 'Manuel West', age: 33, job: 'Functionality' },
      { name: 'John Doe', age: 28, job: 'Accounts' },
      { name: 'Jane Smith', age: 34, job: 'Operations' },
      { name: 'Alice Johnson', age: 24, job: 'Creative' },
      { name: 'Christopher Schneider', age: 21, job: 'Data' },
      { name: 'Maurice Padilla', age: 23, job: 'Applications' },
      { name: 'Manuel West', age: 33, job: 'Functionality' },
      { name: 'John Doe', age: 28, job: 'Accounts' },
      { name: 'Jane Smith', age: 34, job: 'Operations' },
      { name: 'Alice Johnson', age: 24, job: 'Creative' },
      { name: 'Christopher Schneider', age: 21, job: 'Data' },
      { name: 'Maurice Padilla', age: 23, job: 'Applications' },
      { name: 'Manuel West', age: 33, job: 'Functionality' },
      { name: 'John Doe', age: 28, job: 'Accounts' },
      { name: 'Jane Smith', age: 34, job: 'Operations' },
      { name: 'Alice Johnson', age: 24, job: 'Creative' },
      { name: 'Christopher Schneider', age: 21, job: 'Data' },
      { name: 'Maurice Padilla', age: 23, job: 'Applications' },
      { name: 'Manuel West', age: 33, job: 'Functionality' },
      { name: 'John Doe', age: 28, job: 'Accounts' },
      { name: 'Jane Smith', age: 34, job: 'Operations' },
      { name: 'Alice Johnson', age: 24, job: 'Creative' },
      { name: 'Christopher Schneider', age: 21, job: 'Data' },
      { name: 'Maurice Padilla', age: 23, job: 'Applications' },
      { name: 'Manuel West', age: 33, job: 'Functionality' },
    ])
  }, [])

  return (
    <Box>
      <GenericTable
        columns={tableColumns}
        data={tableData}
        defaultRowsPerPage={8}
        rowsPerPageOptions={[8,32,64,128]}
        showPageNumbers={true}
        pagination={true}
      />
    </Box>
  )
}