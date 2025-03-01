'use client'

import { Box, Container, Theme } from '@mui/material'
import React from 'react'
import { useIsMobile } from '../../hooks/is-mobile.hook'
import { Background } from '../background'
import { CursorHighlight } from '../cursor-highlight'
import { Menu } from '../menu/menu'
import { ScrollToTopButton } from '../scroll-to-top-button'
import { Footer } from './footer'

interface MainLayoutProps {
    children: React.ReactNode
    theme: Theme
    onThemeToggle: () => void
    onLanguageChange: (language: string) => void
}

export const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    theme,
    onThemeToggle,
    onLanguageChange,
}) => {
    const isMobile = useIsMobile(theme)

    return (
        <Box sx={{ position: 'relative', minHeight: '100vh' }}>
            <Menu onThemeToggle={onThemeToggle} onLanguageChange={onLanguageChange} />
            <Container>{children}</Container>
            <Footer />
            {!isMobile && <CursorHighlight />}
            <ScrollToTopButton />
            <Background />
        </Box>
    )
}