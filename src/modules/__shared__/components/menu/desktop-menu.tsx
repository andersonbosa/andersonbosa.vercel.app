import { Box, Button } from '@mui/material'
import React from 'react'
import { NAV_ITEMS } from '../../constants'
import styles from './menu.module.css'
import { Logo } from './logo'
import { ToggleThemeButton } from './toggle-theme-button'

interface DesktopMenuProps {
  onThemeToggle: () => void
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ onThemeToggle }) => {
  return (
    <Box className={styles.desktopMenu}>
      <Logo />
      <Box className={styles.section1}>
        {NAV_ITEMS.map((item) => (
          <Button
            key={item.id}
            color="inherit"
            className={styles.navItem}
            href={item.href}
          >
            {item.label}
          </Button>
        ))}
      </Box>
      <Box className={styles.section2}>
        <ToggleThemeButton onThemeToggle={onThemeToggle} />
      </Box>
    </Box>
  )
}