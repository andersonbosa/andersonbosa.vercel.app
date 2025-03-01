import { Box } from '@mui/material'
import React from 'react'
import styles from './menu.module.css'
import { ToggleThemeButton } from './toggle-theme-button'
import { DrawerToggleButton } from './drawer-toggle-button'
import { MobileDrawer } from './mobile-drawer'

interface MobileMenuProps {
    drawerOpen: boolean
    onDrawerToggle: () => void
    onThemeToggle: () => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
    drawerOpen,
    onDrawerToggle,
    onThemeToggle,
}) => {
    return (
        <Box className={styles.mobileMenu}>
            <Box className={styles.section1}>
                <DrawerToggleButton onDrawerToggle={onDrawerToggle} />
                <ToggleThemeButton onThemeToggle={onThemeToggle} />
            </Box>
            <MobileDrawer open={drawerOpen} onClose={onDrawerToggle} />
        </Box>
    )
}