'use client'

import { AppBar, Box, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import { useIsMobile } from '../../hooks/is-mobile.hook'
import { DesktopMenu } from './desktop-menu'
import styles from './menu.module.css'
import { MobileMenu } from './mobile-menu'

export interface MenuProps {
}

export const Menu: React.FC<MenuProps> = ({ }) => {
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
        {/* TODO idea: add "main" search bar to search in all possible places ☢️☢️☢️☢️☢️☢️☢️ */}
        <Toolbar>
          {isMobile ? (
            <MobileMenu
              drawerOpen={drawerOpen}
              onDrawerToggle={handleDrawerToggle}
            />
          ) : (
            <DesktopMenu />
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  )
}