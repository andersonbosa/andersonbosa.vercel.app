import { Box } from '@mui/material'
import React from 'react'
import { DrawerToggleButton } from './drawer-toggle-button'
import styles from './menu.module.css'
import { MobileDrawer } from './mobile-drawer'
import { ToggleThemeButton } from './toggle-theme-button'

interface MobileMenuProps {
    drawerOpen: boolean
    onDrawerToggle: () => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
    drawerOpen,
    onDrawerToggle,
}) => {
    return (
        <Box className={styles.mobileMenu}>
            <Box className={styles.section1}>
                <DrawerToggleButton onDrawerToggle={onDrawerToggle} />
                <ToggleThemeButton />
            </Box>
            <MobileDrawer open={drawerOpen} onClose={onDrawerToggle} />
        </Box>
    )
}