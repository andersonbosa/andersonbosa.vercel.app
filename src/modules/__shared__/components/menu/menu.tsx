'use client'

import React, { useState } from 'react'
import styles from './menu.module.css'

import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme
} from '@mui/material'


import { NAV_ITEMS } from '../../constants'

export interface MenuProps {
  onThemeToggle: () => void
  onLanguageChange: (language: string) => void
}

export const Menu: React.FC<MenuProps> = ({ onThemeToggle, onLanguageChange }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }


  const ToggleThemeButton = () => (
    <Box sx={{
      display: 'flex',
      alignItems: 'center'
    }}>
      <IconButton color="inherit" onClick={onThemeToggle}>
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  )

  // const PickLanguageButton = () => (
  //   <IconButton color="inherit" onClick={handleLanguageMenuClick}>
  //     <LanguageIcon />
  //   </IconButton>
  // )

  // const ChooseLanguageMenu = () => (
  //   <MuiMenu
  //     anchorEl={anchorEl}
  //     open={Boolean(anchorEl)}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
  //     <MenuItem onClick={() => handleLanguageChange('pt')}>Portuguese</MenuItem>
  //   </MuiMenu>
  // )

  // const scrollIntoView = (selector: string): void => document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })

  const mobileDrawer = (
    <Box onClick={handleDrawerToggle} >
      <List className={styles.mobileDrawer}>
        {NAV_ITEMS.map((item) => (
          <ListItemButton key={item.id} component="a" href={`#${item.id}`} className={styles.navItem} >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )

  const DrawerToggleButton = () => (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={handleDrawerToggle}
    >
      <MenuIcon />
    </IconButton>
  )

  const Logo = () => (
    <Link href='#' color="inherit" className={styles.logo}>
      <Button color="inherit" > ANB </Button>
    </Link>
  )

  const MobileMenu = () => (
    <Box className={styles.mobileMenu}>
      <Box className={styles.section1}>
        <DrawerToggleButton />
        {/* <Box>
          <ToggleThemeButton />
        </Box> */}
      </Box>
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { width: '90vw' } }}
        SlideProps={{ direction: 'right', appear: true }}
      >
        {mobileDrawer}
      </Drawer>
    </Box>
  )

  const DesktopMenu = () => (
    (
      <Box className={styles.desktopMenu} >
        <Logo />
        <Box className={styles.section1}>
          {
            NAV_ITEMS.map((item) => (
              <Button key={item.id} color="inherit" href={`#${item.id}`} className={styles.navItem}>
                {item.label}
              </Button>
            ))
          }
        </Box>
        <Box className={styles.section2} >
          <ToggleThemeButton />
        </Box>
      </Box>
    )
  )

  return (
    <React.Fragment>
      <Box className={styles.menu} sx={{ flexGrow: 1 }}>
        <AppBar
          className={styles.appbar}
          color='transparent'
          enableColorOnDark
          position='fixed'
        >
          <Toolbar> {isMobile ? <MobileMenu /> : <DesktopMenu />} </Toolbar>
        </AppBar >
        <Toolbar />
      </Box>
    </React.Fragment>
  )
}

