import { CloseOutlined } from '@mui/icons-material'
import { Box, Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { NAV_ITEMS } from '../../constants'
import { Logo } from './logo'
import styles from './menu.module.css'

interface MobileDrawerProps {
    open: boolean
    onClose: () => void
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose }) => {
    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            PaperProps={{ sx: { width: '70vw' } }}
            SlideProps={{ direction: 'right', appear: true }}
        >
            <Box onClick={onClose} sx={{ width: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: '12px',
                        marginRight: '12px',
                    }}
                >
                    <IconButton color="inherit" onClick={onClose}>
                        <CloseOutlined />
                    </IconButton>
                </Box>
                <List>
                    <Box>
                        <Logo />
                    </Box>

                    {NAV_ITEMS.map((item) => (
                        <ListItemButton
                            key={item.id}
                            component="a"
                            href={item.href}
                            className={styles.navItem}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}