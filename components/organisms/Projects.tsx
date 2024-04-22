'use client'

import { HTMLAttributes } from 'react'
import { Table } from '../atoms/Table'

interface ProjectsProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
}

export function Projects ({
  children,
  className,
  ...htmlAttributes

}: ProjectsProps): React.JSX.Element {
  const headers = ['', 'Name', 'Job', 'Favorite Color']
  const items = [
    [1, 'Cy Ganderton', 'Quality Control Specialist', 'Blue'],
    [2, 'Hart Hagerty', 'Desktop Support Technician', 'Purple'],
    [3, 'Brice Swyre', 'Tax Accountant', 'Red']
  ]
  return (
    <>
      <div className={className} {...htmlAttributes} >
        <h1>Projetos</h1>
        <Table headers={headers} items={items} />
      </div>
    </>
  )
}
