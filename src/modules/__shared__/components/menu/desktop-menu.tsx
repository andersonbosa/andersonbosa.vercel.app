import { Box, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { NAV_ITEMS } from '../../constants'
import { Logo } from './logo'
import styles from './menu.module.css'
import { ToggleThemeButton } from './toggle-theme-button'

interface DesktopMenuProps {
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ }) => {
  return (
    <Box className={styles.desktopMenu}>
      <Logo />
      <Box className={styles.section1}>
        {NAV_ITEMS.map((item) => (
          <Button
            key={item.id}
            color="inherit"
            className={styles.navItem}
          >
            <Link href={item.href}>
              {item.label}
            </Link>
          </Button>
        ))}
      </Box>
      <Box className={styles.section2}>
        <ToggleThemeButton />
      </Box>
    </Box>
  )
}