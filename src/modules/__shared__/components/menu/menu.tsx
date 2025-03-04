'use client'

import { AppBar, Box, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import { useIsMobile } from '../../hooks/is-mobile.hook'
import { DesktopMenu } from './desktop-menu'
import styles from './menu.module.css'
import { MobileMenu } from './mobile-menu'

export interface MenuProps {
  onThemeToggle: () => void
  onLanguageChange: (language: string) => void
}

export const Menu: React.FC<MenuProps> = (
  { onThemeToggle, onLanguageChange }
) => {
  const isMobile = useIsMobile()

  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <Box className={styles.menu} sx={{ flexGrow: 1 }}>
      <AppBar
        className={styles.appbar}
        color="transparent"
        enableColorOnDark
        position="fixed"
      >
        <Toolbar>
          {isMobile ? (
            <MobileMenu
              drawerOpen={drawerOpen}
              onDrawerToggle={handleDrawerToggle}
              onThemeToggle={onThemeToggle}
            />
          ) : (
            <DesktopMenu
            // onThemeToggle={onThemeToggle}
            />
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  )
}