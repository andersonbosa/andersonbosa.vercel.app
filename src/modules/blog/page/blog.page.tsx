'use client'

import { BlankSpace } from '@/modules/__shared__/components/blank-space'
import { MainLayout } from '@/modules/__shared__/components/layouts/main-layout'
import { usePosts } from '@/modules/__shared__/contexts/post.context'
import { BlogText } from '@/modules/blog/components/ui/typography'
import { Box, Button, Grid, Pagination, TextField, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { PostsList } from '../components/post/posts-list'
import { TagsFilter } from '../components/tags-filter'

export const BlogPage: React.FC = () => {
    const {
        posts,
        loading: postsLoading,
        totalPages,
        page,
        setSearchTerm,
        setPage,
    } = usePosts()

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const router = useRouter()
    const searchParams = useSearchParams()

    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [searchInput, setSearchInput] = useState<string>('')

    useEffect(() => {
        const querySearch = searchParams.get('search') || ''
        const queryTags = searchParams.get('tags')?.split(',') || []
        setSearchInput(querySearch)
        setSearchTerm(querySearch)
        setSelectedTags(queryTags.filter(tag => tag !== ''))
    }, [searchParams, setSearchTerm])

    const allTags = Array.from(new Set(posts.flatMap(post => post.tags)))
        .filter(tag => tag !== '')
        .sort((a, b) => a.localeCompare(b))

    const filteredPosts = posts.filter(post =>
        selectedTags.length === 0 || selectedTags.some(tag => post.tags.includes(tag))
    )

    const handleTagToggle = (tag: string) => {
        const newTags = selectedTags.includes(tag)
            ? selectedTags.filter(t => t !== tag)
            : [...selectedTags, tag]
        setSelectedTags(newTags)
        updateQueryParams(searchInput, newTags)
    }

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSearchTerm(searchInput)
        setPage(1)
        updateQueryParams(searchInput, selectedTags)
    }

    const updateQueryParams = (search: string, tags: string[]) => {
        const params = new URLSearchParams()
        if (search) params.set('search', search)
        if (tags.length > 0) params.set('tags', tags.join(','))
        router.push(`?${params.toString()}`)
    }

    return (
        <MainLayout>
            <Box py={4}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <form onSubmit={handleSearchSubmit}>
                            <Box display="flex" gap={2} mb={3}>
                                <TextField
                                    label="Pesquisar posts"
                                    variant="outlined"
                                    fullWidth
                                    value={searchInput}
                                    onChange={e => setSearchInput(e.target.value)}
                                />
                                <Button type="submit" variant="contained">
                                    Buscar
                                </Button>
                            </Box>
                        </form>
                    </Grid>
                    <BlankSpace size="32px" />
                    <Grid item xs={12} md={8}>
                        {
                            postsLoading ? (
                                <BlogText>Loading posts...</BlogText>
                            ) : filteredPosts.length === 0 ? (
                                <BlogText>Posts not found.</BlogText>
                            ) : (
                                <PostsList posts={filteredPosts} />
                            )}

                        {totalPages > 1 && (
                            <>
                                <BlankSpace size="32px" />
                                <Box display="flex" justifyContent="center">
                                    <Pagination
                                        count={totalPages}
                                        page={page}
                                        onChange={(_, newPage) => setPage(newPage)}
                                        color="primary"
                                    />
                                </Box>
                            </>
                        )}
                    </Grid>

                    {
                        !isMobile && (
                            <Grid item xs={12} md={4}>
                                <TagsFilter
                                    tags={allTags}
                                    selectedTags={selectedTags}
                                    onTagToggle={handleTagToggle}
                                    isMobile={isMobile}
                                />
                            </Grid>
                        )
                    }
                </Grid>

                <BlankSpace size="32px" />
            </Box>
        </MainLayout>
    )
}