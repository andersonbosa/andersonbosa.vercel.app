'use client'

import { Box, CircularProgress } from '@mui/material'
import { Suspense } from 'react'

export interface IHeroHeaderProps {
}

export function HeroHeader (props: IHeroHeaderProps) {
  return (
    <Box id="hero-header" >
      <Suspense fallback={<CircularProgress />}>
        <div className='hero-header-wrapper'>
          <div className='hero-header-content'>
            <p className="content1"> Hello, friend.</p>
            <p className="content2">
              {/* FIXME quando o componente é montado o "iam" se mexe  */}
              <span className='iam'> i&apos;m </span>
              <h1>Anderson Bosa.</h1>
            </p>
            <p className="content3"> <h3>I build secure digital experiences!</h3></p>
            <p className="content4"> Passionate about technology and hacking, software engineer
              since 2019.</p>
          </div>
        </div>
      </Suspense>
    </Box>
  )
}
