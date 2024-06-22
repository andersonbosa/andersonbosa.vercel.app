'use client'

import styles from './hero-header.module.css'

import { Box } from '@mui/material'

export interface IHeroHeaderProps {
}

export function HeroHeader (props: IHeroHeaderProps) {
  return (
    <Box id="hero-header" className={styles.heroHeader} >
      <div className={styles.heroHeaderWrapper}>
        <div className={styles.heroHeaderContent}>
          <p className={styles.content1}> Hello, friend.</p>
          <div className={styles.content2}>
            {/* FIXME quando o componente é montado o "iam" se mexe  */}
            <span className={styles.iam}> i&apos;m </span>
            <h1>Anderson Bosa.</h1>
          </div>
          <div className={styles.content3}> <h3>I build secure digital experiences!</h3></div>
          <p className={styles.content4}> Passionate about technology and hacking, software engineer
            since 2019.</p>
        </div>
      </div>
    </Box>
  )
}
