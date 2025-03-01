'use client'

import Loading from '@/app/loading'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { MainLayout } from '../components/layouts/main-layout'
import { useThemeLoading } from '../hooks/use-theme-loading'
import MuiThemeProvider from '../theme/provider'

export const BlogPage: React.FC = () => {
    const { currentThemeMode, useFakeLoading, handleThemeChange } = useThemeLoading()

    const handleLanguageChange = (language: string) => {
        // TODO add i18n
    }


    const BlogContent = () => (
        <Box py={4}>
            <Typography variant="h1" gutterBottom>
                Blog
            </Typography>
            <Typography variant="body1">
                Aqui vão os posts do blog. (TODO: Implementar lista de posts)
            </Typography>
        </Box>
    )

    return (
        <MuiThemeProvider theme={currentThemeMode}>
            {useFakeLoading ? (
                <Loading />
            ) : (
                <MainLayout
                    theme={currentThemeMode}
                    onThemeToggle={handleThemeChange}
                    onLanguageChange={handleLanguageChange}
                >
                    <BlogContent />
                </MainLayout>
            )}
        </MuiThemeProvider>
    )
}

export default BlogPage