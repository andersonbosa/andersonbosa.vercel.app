'use client'


import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu as MuiMenu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import LanguageIcon from '@mui/icons-material/Language'

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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.id} component="a" href={`#${item.id}`}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem button onClick={onThemeToggle}>
          <ListItemText primary="Toggle Theme" />
        </ListItem>
        <ListItem button onClick={handleMenuClick}>
          <ListItemText primary="Change Language" />
        </ListItem>
      </List>
    </Box>
  )

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Navigation
              </Typography>
              {navItems.map((item) => (
                <Button key={item.id} color="inherit" href={`#${item.id}`}>
                  {item.label}
                </Button>
              ))}
              <IconButton color="inherit" onClick={onThemeToggle}>
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <IconButton color="inherit" onClick={handleMenuClick}>
                <LanguageIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      <MuiMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
        <MenuItem onClick={() => handleLanguageChange('pt')}>Portuguese</MenuItem>
        {/* Adicione mais opções de idioma conforme necessário */}
      </MuiMenu>
    </Box>
  )
}

