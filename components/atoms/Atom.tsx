'use client'


import { HTMLAttributes } from 'react'


interface AtomProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  htmlAttributes?: Partial<React.HTMLAttributes<any>>
}

export function Atom ({
  children,
  className,
  ...htmlAttributes

}: AtomProps): React.JSX.Element {
  return (
    <>
      <div {...htmlAttributes} >
        {children}
      </div>
    </>
  )
}
