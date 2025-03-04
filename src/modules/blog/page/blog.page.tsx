'use client'

import { formatedDate } from '@/modules/__shared__/@helpers/date.helper'
import { BlankSpace } from '@/modules/__shared__/components/blank-space'
import { GenericCard } from '@/modules/__shared__/components/generic-card'
import { MainLayout } from '@/modules/__shared__/components/layouts/main-layout'
import { usePosts } from '@/modules/__shared__/contexts/post.context'
import { BlogH2, BlogText } from '@/modules/blog/components/ui/typography'
import { Box, Chip, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BlogPostEntity } from '../@types/blog'

export const BlogPage: React.FC = () => {
    const { posts, loading: postsLoading } = usePosts()

    const [selectedTag, setSelectedTag] = useState<string | null>(null)
    // const [searchTerm, setSearchTerm] = useState<string>('')

    const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))
        .filter(tag => tag !== '')

    const filteredPosts = posts.filter((post) => {
        const matchesTag = !selectedTag || post.tags.includes(selectedTag)
        return post.published && matchesTag
    })


    function getPostUrl(post: BlogPostEntity): string | undefined {
        if (post.url) return post.url

        return `/blog/${post.slug}`
    }

    const PostLists = () => (
        filteredPosts.map((post) => (
            <GenericCard key={post.slug} sx={{ maxWidth: '600px', mx: 'auto', mb: 2, cursor: 'pointer' }}>
                <Box>
                    <Link href={getPostUrl(post)}>
                        <BlogH2 sx={{ fontSize: 24, '&:hover': { textDecoration: 'underline' } }}>
                            {post.title}
                        </BlogH2>
                    </Link>
                    <BlogText>{post.description || 'Read More'}</BlogText>
                    <Typography variant="caption" color="text.secondary">
                        {formatedDate(post.date)} | {post?.tags.join(', ')}
                    </Typography>
                </Box>
            </GenericCard>
        ))
    )

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

                <Box mb={2}>
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
                </Box>

                <BlankSpace size='32px' />

                {postsLoading
                    ? (<BlogText>Loading posts...</BlogText>)
                    : filteredPosts.length === 0
                        ? (<BlogText>Posts not found.</BlogText>) : <PostLists />
                }
                <BlankSpace size='32px' />
            </Box>
        </MainLayout>
    )
}

export default BlogPage
