'use client'

import { BlankSpace } from '@/modules/__shared__/components/blank-space'
import { DataSearch } from '@/modules/__shared__/components/data-search/data-search'
import { MainLayout } from '@/modules/__shared__/components/layouts/main-layout'
import { usePosts } from '@/modules/__shared__/contexts/post.context'
import { Box } from '@mui/material'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { UnifiedPost } from '../@types/blog'
import { PostsList } from '../components/post/posts-list'

export const BlogPage: React.FC = () => {
    const {
        posts,
        loading,
        totalPages,
        page,
        searchTerm,
        setSearchTerm,
        setPage,
    } = usePosts()

    const router = useRouter()
    const searchParams = useSearchParams()

    const [selectedTags, setSelectedTags] = useState<string[]>([])

    useEffect(() => {
        const querySearch = searchParams.get('search') || ''
        const queryTags = searchParams.get('tags')?.split(',') || []
        setSearchTerm(querySearch)
        setSelectedTags(queryTags.filter(tag => tag !== ''))
    }, [searchParams, setSearchTerm])

    const allTags = Array.from(new Set(posts.flatMap(post => post.tags)))
        .filter(tag => tag !== '')
        .sort((a, b) => a.localeCompare(b))

    const handleTagToggle = (tag: string) => {
        const newTags = selectedTags.includes(tag)
            ? selectedTags.filter(t => t !== tag)
            : [...selectedTags, tag]
        setSelectedTags(newTags)
        updateQueryParams(searchTerm, newTags)
    }

    const handleSearch = (term: string) => {
        setSearchTerm(term)
        setPage(1)
        updateQueryParams(term, selectedTags)
    }

    const updateQueryParams = (search: string, tags: string[]) => {
        const params = new URLSearchParams()
        if (search) params.set('search', search)
        if (tags.length > 0) params.set('tags', tags.join(','))
        router.push(`?${params.toString()}`)
    }

    const renderPosts = (filteredPosts: UnifiedPost[]) => (
        <PostsList posts={filteredPosts} />
    )

    return (
        <MainLayout>
            <Box py={4}>
                <DataSearch<UnifiedPost>
                    items={posts}
                    allTags={allTags}
                    selectedTags={selectedTags}
                    searchTerm={searchTerm}
                    totalPages={totalPages}
                    page={page}
                    loading={loading}
                    onSearch={handleSearch}
                    onPageChange={setPage}
                    onTagToggle={handleTagToggle}
                    renderItems={renderPosts}
                />
                <BlankSpace size="32px" />
            </Box>
        </MainLayout>
    )
}