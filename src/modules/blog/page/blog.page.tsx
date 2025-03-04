'use client'

import { BlankSpace } from '@/modules/__shared__/components/blank-space'
import { MainLayout } from '@/modules/__shared__/components/layouts/main-layout'
import { usePosts } from '@/modules/__shared__/contexts/post.context'
import { BlogText } from '@/modules/blog/components/ui/typography'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import { PostsList } from '../components/post/posts-list'
import { TagsFilter } from '../components/tags-filter'

export const BlogPage: React.FC = () => {
    const { posts, loading: postsLoading } = usePosts()


    const [selectedTags, setSelectedTags] = useState<string[]>([])

    const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))
        .filter(tag => tag !== '')
        .sort((a, b) => a.localeCompare(b))

    const filteredPosts = posts.filter((post) => {
        const matchesTags = selectedTags.length === 0
            || selectedTags.every(t => post.tags.includes(t))

        return post.published && matchesTags
    })


    const handleTabToggle = (tagToToggle: string) => {
        console.log(tagToToggle)
        const newSelectedTags = selectedTags.includes(tagToToggle)
            ? selectedTags.filter(t => t !== tagToToggle)
            : [...selectedTags, tagToToggle]

        setSelectedTags(newSelectedTags)
    }

    return (
        <MainLayout>
            <Box py={4}>
                {/* <BlogH1>Blog</BlogH1> */}

                {/* <TextField
                    label="Pesquisar posts"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ mb: 3 }}
                /> */}

                <BlankSpace size='32px' />

                <TagsFilter
                    tags={allTags}
                    selectedTags={selectedTags}
                    onTagToggle={handleTabToggle}
                />

                {/* <Box mb={2}>
                    <Typography variant="subtitle1">Filter by tags</Typography>
                    <Box>
                        {allTags
                            .slice(0, 25)
                            .sort((a, b) => a.localeCompare(b))
                            .map((tag) => (
                                <Chip
                                    key={tag}
                                    label={tag}
                                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                                    color={selectedTag === tag ? 'primary' : 'default'}
                                    sx={{ mr: 1, mt: 1 }}
                                />
                            ))
                        }
                    </Box>
                </Box> */}

                <BlankSpace size='32px' />

                {postsLoading
                    ? (<BlogText>Loading posts...</BlogText>)
                    : filteredPosts.length === 0
                        ? (<BlogText>Posts not found.</BlogText>) : <PostsList posts={filteredPosts} />
                }
                <BlankSpace size='32px' />
            </Box>
        </MainLayout>
    )
}
