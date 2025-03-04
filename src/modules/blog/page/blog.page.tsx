'use client'

import { BlankSpace } from '@/modules/__shared__/components/blank-space'
import { MainLayout } from '@/modules/__shared__/components/layouts/main-layout'
import { usePosts } from '@/modules/__shared__/contexts/post.context'
import { BlogText } from '@/modules/blog/components/ui/typography'
import { Box, Grid } from '@mui/material'
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
                {/* <Box>
                    <form>
                        <TextField
                            label='Search your favorite content'
                            fullWidth
                        />
                    </form>
                </Box>
                <BlankSpace size='64px' /> */}

                <Grid container spacing={0} >
                    <Grid item xs={12} md={8}>
                        {postsLoading
                            ? (<BlogText>Loading posts...</BlogText>)
                            : filteredPosts.length === 0
                                ? (<BlogText>Posts not found.</BlogText>) : <PostsList posts={filteredPosts} />
                        }
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TagsFilter
                            tags={allTags}
                            selectedTags={selectedTags}
                            onTagToggle={handleTabToggle}
                        />
                    </Grid>
                </Grid>

                <BlankSpace size='32px' />
            </Box>
        </MainLayout>
    )
}
