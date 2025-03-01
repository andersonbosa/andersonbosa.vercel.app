'use client'

import Loading from '@/app/loading'
import { BlogH1, BlogH2, BlogText } from '@/modules/blog/components/ui/typography'
import { Box, Chip, Link, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import { MainLayout } from '../components/layouts/main-layout'
import { usePosts } from '../contexts/post.context'
import { useThemeLoading } from '../hooks/use-theme-loading'
import MuiThemeProvider from '../theme/provider'

export const BlogPage: React.FC = () => {
    const { currentThemeMode, useFakeLoading, handleThemeChange } = useThemeLoading()
    const { posts, loading: postsLoading } = usePosts()
    const [category, setCategory] = useState<'all' | 'tecnologia' | 'vida'>('all')
    const [selectedTag, setSelectedTag] = useState<string | null>(null)

    const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))
    const filteredPosts = posts.filter((post) => {
        const matchesCategory = category === 'all' || post.category === category
        const matchesTag = !selectedTag || post.tags.includes(selectedTag)
        return matchesCategory && matchesTag
    })

    // TODO add i18n
    const handleLanguageChange = (language: string) => { }


    const BlogContent = () => (
        <Box py={4}>
            <BlogH1>Blog</BlogH1>

            {/* Filtros de categoria */}
            <Tabs
                value={category}
                onChange={(_, newValue) => setCategory(newValue)}
                sx={{ mb: 2 }}
            >
                <Tab label="Todos" value="all" />
                <Tab label="Tecnologia" value="tecnologia" />
                <Tab label="Vida" value="vida" />
            </Tabs>

            {/* Filtros de tags */}
            <Box mb={2}>
                <Typography variant="subtitle1">Filtrar por tags:</Typography>
                {allTags.map((tag) => (
                    <Chip
                        key={tag}
                        label={tag}
                        onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                        color={selectedTag === tag ? 'primary' : 'default'}
                        sx={{ mr: 1, mt: 1 }}
                    />
                ))}
            </Box>

            {/* Lista de posts */}
            {postsLoading ? (
                <BlogText>Carregando posts...</BlogText>
            ) : filteredPosts.length === 0 ? (
                <BlogText>Nenhum post encontrado.</BlogText>
            ) : (
                filteredPosts.map((post) => (
                    <Box key={post.slug} mb={4}>
                        <Link href={`/blog/${post.slug}`}>
                            <BlogH2 sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                                {post.title}
                            </BlogH2>
                        </Link>
                        <BlogText>{post.description || 'Clique para ler mais'}</BlogText>
                        <Typography variant="caption" color="text.secondary">
                            {/* TODO TOFIX tags do devto no formato errado */}
                            {/* {new Date(post.date).toLocaleDateString()} | {post.category} | {post.tags?.join(', ')} */}
                        </Typography>
                    </Box>
                ))
            )}
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