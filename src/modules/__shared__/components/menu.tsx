'use client'


import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import LanguageIcon from '@mui/icons-material/Language'
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
  MenuItem,
  Menu as MuiMenu,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import React, { useState } from 'react'
import { theme } from '../theme/default'

export interface MenuProps {
  onThemeToggle: () => void
  onLanguageChange: (language: string) => void
}

export const Menu: React.FC<MenuProps> = ({ onThemeToggle, onLanguageChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLanguageChange = (language: string) => {
    onLanguageChange(language)
    handleMenuClose()
  }

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contacts', label: 'Contacts' },
  ]

  const mobileDrawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: '65%' }}>
      <List >
        {navItems.map((item) => (
          <ListItemButton key={item.id} component="a" href={`#${item.id}`}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )

  const MobileMenu = () => (
    <Box data-id='mobile_menu'>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle} PaperProps={{ sx: { width: '65%' } }} >
        {mobileDrawer}
      </Drawer>
    </Box>
  )

  const DesktopMenu = () => (
    (
      <Box data-id='desktop_menu' sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
      }}>
        <Box data-id='menu_navigations'>
          {
            navItems.map((item) => (
              <Button key={item.id} color="inherit" href={`#${item.id}`}>
                {item.label}
              </Button>
            ))
          }
        </Box>
        <Box data-id='menu_functions'>
          <IconButton color="inherit" onClick={onThemeToggle}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {/* 
            <IconButton color="inherit" onClick={handleMenuClick}>
              <LanguageIcon />
            </IconButton>
          */}
        </Box>
      </Box>
    )
  )

  const ChooseLanguageMenu = () => (
    <MuiMenu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
      <MenuItem onClick={() => handleLanguageChange('pt')}>Portuguese</MenuItem>
    </MuiMenu>
  )

  return (
    <Box >
      <AppBar
        data-id='appbar'
        position="static"
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

      {/* <ChooseLanguageMenu /> */}
    </Box >
  )
}

