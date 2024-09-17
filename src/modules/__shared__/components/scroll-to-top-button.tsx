'use client'

import { Box, Button, useTheme, useScrollTrigger } from '@mui/material'
import { FunctionComponent } from 'react'
import { ArrowUpward } from '@mui/icons-material'
import { motion } from 'framer-motion'

interface ScrollToTopButtonProps {

}

export const ScrollToTopButton: FunctionComponent<ScrollToTopButtonProps> = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 555,
  })

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <Box
      sx={{
        display: trigger ? 'flex' : 'none',
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 10,
      }}
    >
      <motion.div
        variants={buttonVariants}
        whileHover="hover"
      >
        <Button
          onClick={handleScrollToTop}
          variant='text'
        >
          <ArrowUpward />
        </Button>
      </motion.div>
    </Box>
  )
}
