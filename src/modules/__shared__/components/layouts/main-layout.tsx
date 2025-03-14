'use client'

import { Box, Container } from '@mui/material'
import { setDefaultOptions } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import React from 'react'
import { useIsMobile } from '../../hooks/is-mobile.hook'
import { Background } from '../background'
import { CursorHighlight } from '../cursor-highlight'
import { Menu } from '../menu/menu'
import { ScrollToTopButton } from '../scroll-to-top-button'
import { Footer } from './footer'

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const isMobile = useIsMobile()
    setDefaultOptions({ locale: ptBR })
    return (
        <Box sx={{ position: 'relative', minHeight: '100vh' }}>
            <Menu />
            <Container>{children}</Container>
            <Footer />
            {!isMobile && <CursorHighlight />}
            <ScrollToTopButton />
            <Background />
        </Box>
    )
}