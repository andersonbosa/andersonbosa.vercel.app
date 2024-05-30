'use client'


// components/GenericTable.tsx
import { Search } from '@mui/icons-material'
import {
  IconButton,
  Paper,
  Table, TableBody, TableCell, TableContainer, TableHead,
  TablePagination,
  TableRow, TableSortLabel,
  TextField
} from '@mui/material'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'


export interface Column {
  id: string
  label: string
  options?: {
    align?: 'right' | 'left' | 'center' | 'justify' | 'inherit'
    notSortable?: boolean
    defaultSortOrder?: 'asc' | 'desc'
  }
}

export interface PaginationOptions {
  rowsPerPageOptions?: number[]
  defaultRowsPerPage?: number
  showPageNumbers?: boolean
}

export interface GenericTableOptionsProps {
  pagination?: boolean
  paginationOptions?: PaginationOptions
  onSearchChange?: (searchValue: string) => void
  onSortChange?: (orderBy: string, order: 'asc' | 'desc') => void
  onPageChange?: (page: number, rowsPerPage: number) => void
}

export interface GenericTableProps {
  columns: Column[]
  data: any[]
  options?: GenericTableOptionsProps
}

const ROWS_PER_PAGE_OPTIONS = [16, 32, 64]
const GENERIC_TABLE_DEFAULT_OPTIONS: GenericTableOptionsProps = {
  pagination: true,
  paginationOptions: {
    rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
    defaultRowsPerPage: ROWS_PER_PAGE_OPTIONS[0],
    showPageNumbers: true
  },
}

const GenericTable: React.FC<GenericTableProps> = ({
  columns,
  data,
  options = GENERIC_TABLE_DEFAULT_OPTIONS,
}) => {
  const {
    pagination,
    paginationOptions,
    onSearchChange,
    onSortChange,
    onPageChange,
  } = options

  const initialSortColumn = columns.find(column => column?.options?.defaultSortOrder)
  const [order, setOrder] = useState<'asc' | 'desc'>(initialSortColumn?.options?.defaultSortOrder || 'asc')
  const [orderBy, setOrderBy] = useState<string>(initialSortColumn?.id || '')

  const [searchValue, setSearchValue] = useState<string>('')

  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(paginationOptions?.defaultRowsPerPage ?? paginationOptions?.rowsPerPageOptions?.at(0) ?? ROWS_PER_PAGE_OPTIONS[0])

  useEffect(
    () => {
      if (onSearchChange) {
        onSearchChange(searchValue)
      }
    },
    [searchValue, onSearchChange]
  )

  useEffect(
    () => {
      if (onSortChange) {
        onSortChange(orderBy, order)
      }
    },
    [orderBy, order, onSortChange]
  )

  useEffect(
    () => {
      if (onPageChange) {
        onPageChange(page, rowsPerPage)
      }
    },
    [page, rowsPerPage, onPageChange]
  )

  const handleRequestSort = (property: string) => {
    if (columns.find(col => col.id === property)?.options?.notSortable) return
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

  const paginatedData = pagination ? sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : sortedData

  return (
    <Paper>
      <TextField
        variant="outlined"
        label="Search"
        value={searchValue}
        onChange={handleSearchChange}
        InputProps={{
          /**
           * referências dessa bruxaria:
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
                  align={column?.options?.align}
                  sortDirection={orderBy === column.id ? order : false}
                >
                  {column?.options?.notSortable ? (
                    column.label
                  ) : (
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : 'asc'}
                      onClick={() => handleRequestSort(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                {columns.map(column => (
                  <TableCell key={column.id} align={column?.options?.align}>
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
          count={sortedData.length}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={paginationOptions?.rowsPerPageOptions || ROWS_PER_PAGE_OPTIONS}
          showFirstButton={paginationOptions?.showPageNumbers}
          showLastButton={paginationOptions?.showPageNumbers}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  )
}

export default GenericTable



export { GenericTable }
