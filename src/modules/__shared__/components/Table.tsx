'use client'

import React, { useState } from 'react'
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Paper, TextField, IconButton
} from '@mui/material'
import { Search } from '@mui/icons-material'
import { motion } from 'framer-motion'


interface ISearchOptions {
  searchLabel?: string
  searchPlaceholder?: string
}

interface IColumn {
  id: string
  label: string
  minWidth?: number
  align?: 'right'
}

interface IGenericTableProps {
  columns: IColumn[]
  data: any[]
  searchOptions?: ISearchOptions
}

/* TODO melhorar legibilidade */
/* REVIEW faz sentido separar em componentes menores? consultar danilo e vitor */
const GenericTable: React.FC<IGenericTableProps> = (props) => {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const [orderBy, setOrderBy] = useState<string>('')
  const [searchValue, setSearchValue] = useState<string>('')

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const filteredData = props.data.filter(row =>
    props.columns.some(column =>
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

  return (
    <Paper>
      <TextField
        variant="outlined"
        label={props?.searchOptions?.searchLabel ?? 'Search'}
        value={searchValue}
        onChange={handleSearchChange}
        InputProps={{
          /**
           * Bruxaria encontrada em:
           * @see {link} https://stackoverflow.com/questions/63047684/material-ui-select-menu-with-end-adornment
           * @see {link} https://mui.com/material-ui/api/input-adornment/
           */
          endAdornment: (
            <IconButton> <Search /> </IconButton>
          )
        }}
        style={{ margin: 16 }}
      />
      <TableContainer component={motion.div}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {props.columns.map(column => (
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
            {sortedData.map((row, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                {props.columns.map(column => (
                  <TableCell key={column.id} align={column.align}>
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export {
  GenericTable
}