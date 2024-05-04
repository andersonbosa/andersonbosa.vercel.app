'use client'

import { HTMLAttributes } from 'react'

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
}

function Section({
  children,
  className,
  ...parentAttributes
}: SectionProps): React.JSX.Element {
  return (
    <>
      <div
        data-id="section"
        className={`md:min-h-screen -- w-full max-w-[40rem] md:max-w-full md:min-w-screen -- p-8 -- flex items-center justify-center content-center -- ${className}`}
        {...parentAttributes}
      >
        {children}
      </div>
    </>
  )
}

export default Section
