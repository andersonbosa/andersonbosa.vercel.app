'use client'

import { Search } from '@mui/icons-material'
import {
  IconButton,
  Paper,
  Table, TableBody, TableCell, TableContainer, TableHead,
  TablePagination,
  TableRow, TableSortLabel,
  TextField,
  debounce,
} from '@mui/material'
import { motion } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'

export type SortDirectionType = 'asc' | 'desc'

export interface IGenericTableColumn {
  id: string
  label: string
  options?: {
    align?: 'right' | 'left' | 'center' | 'justify' | 'inherit'
    notSortable?: boolean
    defaultSortOrder?: SortDirectionType
  }
}

export interface IPaginationOptions {
  enabled?: boolean

  rowsPerPageOptions?: number[]
  defaultRowsPerPage?: number
  labelRowsPerPage?: string

  showPageNumbers?: boolean
}

export interface IGenericTableOptionsProps {
  pagiationOptions?: IPaginationOptions
  onSearchChange?: (searchValue: string) => void
  onSortChange?: (orderBy: string, order: SortDirectionType) => void
  onPageChange?: (page: number, rowsPerPage: number) => void
}

export interface IGenericTableProps {
  data: any[]
  columns: IGenericTableColumn[]
  options?: IGenericTableOptionsProps
}

const ROWS_PER_PAGE_OPTIONS = [8, 16, 32, 64]
const DEFAULT_OPTIONS: IGenericTableOptionsProps = {
  pagiationOptions: {
    enabled: true,
    rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
    defaultRowsPerPage: ROWS_PER_PAGE_OPTIONS[0],
    showPageNumbers: true,
  },
}

const GenericTable: React.FC<IGenericTableProps> = ({
  columns,
  data,
  options = {}
}) => {

  const {
    pagiationOptions,
    onSearchChange,
    onSortChange,
    onPageChange,
  } = Object.assign({}, DEFAULT_OPTIONS, options)

  const [searchValue, setSearchValue] = useState<string>('')

  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(pagiationOptions?.defaultRowsPerPage || ROWS_PER_PAGE_OPTIONS[0])

  const initialSortColumn = columns.find(column => column.options?.defaultSortOrder)
  const [order, setOrder] = useState<SortDirectionType>(initialSortColumn?.options?.defaultSortOrder || 'asc')
  const [orderBy, setOrderBy] = useState<string>(initialSortColumn?.id || '')

  const debouncedSearchChange = useMemo(
    () => debounce((value: string) => {
      if (onSearchChange) {
        onSearchChange(value)
      }
    }, 300),
    [onSearchChange]
  )

  useEffect(() => {
    debouncedSearchChange(searchValue)
  }, [searchValue, debouncedSearchChange])

  useEffect(() => {
    if (onSortChange) {
      onSortChange(orderBy, order)
    }
  }, [orderBy, order, onSortChange])

  useEffect(() => {
    if (onPageChange) {
      onPageChange(page, rowsPerPage)
    }
  }, [page, rowsPerPage, onPageChange])

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

  const paginatedData = pagiationOptions?.enabled ? sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : sortedData

  return (
    <Paper>
      <TextField
        variant="outlined"
        label="Search"
        value={searchValue}
        onChange={handleSearchChange}
        InputProps={{
          /**
           * referência dessa bruxaria:
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
                  align={column.options?.align}
                  sortDirection={orderBy === column.id ? order : false}
                >
                  {column.options?.notSortable ? (
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
                  <TableCell key={column.id} align={column.options?.align}>
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {pagiationOptions?.enabled && (
        <TablePagination
          component="div"
          count={sortedData.length}
          rowsPerPageOptions={pagiationOptions?.rowsPerPageOptions || ROWS_PER_PAGE_OPTIONS}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage={pagiationOptions?.labelRowsPerPage}
          page={page}
          showFirstButton={pagiationOptions?.showPageNumbers}
          showLastButton={pagiationOptions?.showPageNumbers}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  )
}

export { GenericTable }
