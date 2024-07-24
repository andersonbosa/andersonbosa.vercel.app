'use client'

import styles from './hero-header.module.css'

import { Box, IconButton } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export interface IHeroHeaderProps {
}

const NEXT_SECTION_ELEMENT_ID = 'projects'

export function HeroHeader (props: IHeroHeaderProps) {
  const handleScrollDown = (): void => {
    const nextSection: HTMLElement | null = document.getElementById(NEXT_SECTION_ELEMENT_ID)
    if (!nextSection) {
      throw new Error('Could not find the next section')
    }
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Box id="hero-header" className={styles.heroHeader} >
      <Box className={styles.wrapper}>
        <Box className={styles.subWrapper}>
          <p className={styles.content1}> Hello, friend.</p>
          <Box className={styles.content2}>
            <span className={styles.iam}> i&apos;m </span>
            <h1>Anderson Bosa.</h1>
          </Box>
          <Box className={styles.content3}> <h3>I build secure digital experiences!</h3></Box>
          <p className={styles.content4}> Passionate about technology and hacking, software engineer
            since 2019.</p>
        </Box>
        <Box marginBottom={6}></Box>
        <IconButton className={styles.scrollDownButton} onClick={handleScrollDown}>
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
