import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { Box, IconButton } from '@mui/material'
import React from 'react'
import { useCustomTheme } from '../../contexts/theme.context'

interface ToggleThemeButtonProps { }

export const ToggleThemeButton: React.FC<ToggleThemeButtonProps> = ({ }) => {
    const { theme, toggleTheme } = useCustomTheme()
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" onClick={toggleTheme}>
                {
                    theme.palette.mode === 'dark'
                        ? <Brightness7Icon />
                        : <Brightness4Icon />
                }
            </IconButton>
        </Box>
    )
}