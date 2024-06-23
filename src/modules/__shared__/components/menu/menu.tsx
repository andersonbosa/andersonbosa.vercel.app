'use client'

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
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme
} from '@mui/material'
import React, { useState } from 'react'
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

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contacts', label: 'Contacts' },
  ]

  const ToggleThemeButton = () => (
    <IconButton color="inherit" onClick={onThemeToggle}>
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
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

  const mobileDrawer = (
    <Box onClick={handleDrawerToggle} >
      <List className={styles.mobileDrawer}>
        {navItems.map((item) => (
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

  const MobileMenu = () => (
    <Box className={styles.mobileMenu}>
      <Box className={styles.section1}>
        <DrawerToggleButton />

        <Box>
          <ToggleThemeButton />
        </Box>
      </Box>

      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { width: '55%' } }}
        SlideProps={{ direction: 'right', appear: true }}
      >
        {mobileDrawer}
      </Drawer>
    </Box>
  )

  const DesktopMenu = () => (
    (
      <Box className={styles.desktopMenu} >
        <Box className={styles.section1}>
          {
            navItems.map((item) => (
              <Button key={item.id} color="inherit" href={`#${item.id}`} className={styles.navItem}>
                {item.label}
              </Button>
            ))
          }
        </Box>
        <Box className='section2'>
          <ToggleThemeButton />
        </Box>
      </Box>
    )
  )

  return (
    <Box className={styles.menu}>
      <AppBar
        data-id='appbar'
        color='transparent' enableColorOnDark
        sx={{
          backgroundImage: 'none',
          boxShadow: 'none',
          borderColor: 'rgba(117, 108, 96, 0.3)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Toolbar> {isMobile ? <MobileMenu /> : <DesktopMenu />} </Toolbar>
      </AppBar >
    </Box >
  )
}

