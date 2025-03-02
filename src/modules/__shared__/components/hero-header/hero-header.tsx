'use client'

import { meta } from '@/app/constants'
import styles from './hero-header.module.css'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Box, IconButton } from '@mui/material'

export interface IHeroHeaderProps { }

export function HeroHeader(_: IHeroHeaderProps) {
  const handleScrollDown = (): void => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    })
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
          <Box className={styles.content3}> <h3>{meta.subtitle}</h3></Box>
        </Box>
        <Box marginBottom={6}></Box>
        <IconButton className={styles.scrollDownButton} onClick={handleScrollDown}>
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
