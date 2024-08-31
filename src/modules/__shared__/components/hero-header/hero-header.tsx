'use client'

import styles from './hero-header.module.css'

import { Box, IconButton, useTheme } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useIsMobile } from '../../hooks/is-mobile.hook'

export interface IHeroHeaderProps { }

export function HeroHeader (_: IHeroHeaderProps) {
  const theme = useTheme()
  const isMobile = useIsMobile(theme)
  const handleScrollDown = (): void => {
    window.scrollBy({
      top: isMobile ? window.innerHeight / 2 : window.innerHeight,
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
