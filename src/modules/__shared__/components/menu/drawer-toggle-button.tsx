import React from 'react'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

interface DrawerToggleButtonProps {
  onDrawerToggle: () => void
}

export const DrawerToggleButton: React.FC<DrawerToggleButtonProps> = ({ onDrawerToggle }) => {
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={onDrawerToggle}
    >
      <MenuIcon />
    </IconButton>
  )
}