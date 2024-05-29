'use client'


import React, { useState } from 'react'
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Paper, TextField, IconButton, TablePagination, TablePaginationProps,
} from '@mui/material'
import { Search } from '@mui/icons-material'
import { motion } from 'framer-motion'

interface Column {
  id: string
  label: string
  minWidth?: number
  align?: 'right'
}

interface GenericTableProps {
  columns: Column[]
  data: any[]
  pagination?: boolean
  rowsPerPageOptions?: number[]
  defaultRowsPerPage?: number
  showPageNumbers?: boolean
}

const GenericTable: React.FC<GenericTableProps> = ({
  columns,
  data,
  pagination = true,
  rowsPerPageOptions = [5, 10, 25],
  defaultRowsPerPage = 5,
  showPageNumbers = true,
}) => {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const [orderBy, setOrderBy] = useState<string>('')
  const [searchValue, setSearchValue] = useState<string>('')
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(defaultRowsPerPage)

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const filteredData = data.filter(row =>
    columns.some(column =>
      String(row[column.id]).toLowerCase().includes(searchValue.toLowerCase())
    )
  )

  const sortedData = filteredData.sort((a, b) => {
    if (a[orderBy] < b[orderBy]) {
      return order === 'asc' ? -1 : 1
    }
    if (a[orderBy] > b[orderBy]) {
      return order === 'asc' ? 1 : -1
    }
    return 0
  })

  const paginatedData = pagination
    ? sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : sortedData

  return (
    <Paper>
      <TextField
        variant="outlined"
        label="Search"
        value={searchValue}
        onChange={handleSearchChange}
        InputProps={{
          /**
           * bruxaria encontrada em:
           * @see {link} https://mui.com/material-ui/api/input-adornment/
           * @see {link} https://stackoverflow.com/questions/63047684/material-ui-select-menu-with-end-adornment
           */
          endAdornment: (<IconButton> <Search /> </IconButton>)
        }}
        style={{ margin: 16 }}
      />
      <TableContainer component={motion.div}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sortDirection={orderBy === column.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : 'asc'}
                    onClick={() => handleRequestSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                {columns.map(column => (
                  <TableCell key={column.id} align={column.align}>
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {pagination && (
        <TablePagination
          component="div"
          rowsPerPageOptions={rowsPerPageOptions}
          count={sortedData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          showFirstButton={showPageNumbers}
          showLastButton={showPageNumbers}
        />
      )}
    </Paper>
  )
}



export { GenericTable }
