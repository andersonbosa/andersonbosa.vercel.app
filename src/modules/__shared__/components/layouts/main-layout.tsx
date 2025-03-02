'use client'

import { Box, Container } from '@mui/material'
import React from 'react'
import { useIsMobile } from '../../hooks/is-mobile.hook'
import { useThemeLoading } from '../../hooks/use-theme-loading'
import { theme } from '../../theme/dark'
import MuiThemeProvider from '../../theme/provider'
import { Background } from '../background'
import { CursorHighlight } from '../cursor-highlight'
import { Menu } from '../menu/menu'
import { ScrollToTopButton } from '../scroll-to-top-button'
import { Footer } from './footer'

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const { currentThemeMode, handleThemeChange } = useThemeLoading()
    const isMobile = useIsMobile(theme)
    const handleLanguageChange = (language: string) => {
        // TODO add i18n
    }
    return (
        <>
            <MuiThemeProvider theme={currentThemeMode}>
                <Box sx={{ position: 'relative', minHeight: '100vh' }}>
                    <Menu onThemeToggle={handleThemeChange} onLanguageChange={() => { }} />
                    <Container>{children}</Container>
                    <Footer />
                    {!isMobile && <CursorHighlight />}
                    <ScrollToTopButton />
                    <Background />
                </Box>
            </MuiThemeProvider >
        </>
    )
}