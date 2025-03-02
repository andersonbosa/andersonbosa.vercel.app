'use client'

import { BlankSpace } from '@/modules/__shared__/components/blank-space'
import { GenericCard } from '@/modules/__shared__/components/generic-card'
import { MainLayout } from '@/modules/__shared__/components/layouts/main-layout'
import { usePosts } from '@/modules/__shared__/contexts/post.context'
import { BlogH1, BlogH2, BlogText } from '@/modules/blog/components/ui/typography'
import { Box, Chip, Link, Typography } from '@mui/material'
import React, { useState } from 'react'

export const BlogPage: React.FC = () => {
    const { posts, loading: postsLoading } = usePosts()

    const [selectedTag, setSelectedTag] = useState<string | null>(null)
    // const [searchTerm, setSearchTerm] = useState<string>('')

    const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))
    const filteredPosts = posts.filter((post) => {
        // const matchesTag = !selectedTag || post.tags.includes(selectedTag)
        // const matchesSearch = !searchTerm ||
        //     post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //     (post.content && post.content.toLowerCase().includes(searchTerm.toLowerCase())) ||
        //     (post.description && post.description.toLowerCase().includes(searchTerm.toLowerCase()))
        // return matchesTag && matchesSearch
        return posts
    })

    const PostLists = () => (
        filteredPosts.map((post) => (
            <GenericCard key={post.slug} sx={{ maxWidth: '600px', mx: 'auto', mb: 2 }}>
                <Box>
                    <Link href={`/blog/${post.slug}`}>
                        <BlogH2 sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                            {post.title}
                        </BlogH2>
                    </Link>
                    <BlogText>{post.description || 'Clique para ler mais'}</BlogText>
                    <Typography variant="caption" color="text.secondary">
                        {new Date(post.date).toLocaleDateString()} | {post?.tags}
                    </Typography>
                </Box>
            </GenericCard>
        ))
    )

    return (
        <MainLayout>
            <Box py={4}>
                <BlogH1>Blog</BlogH1>

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
                    {/* <Typography variant="subtitle1">Filtrar por tags:</Typography> */}
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
                <BlankSpace size='32px' />

                {postsLoading
                    ? (<BlogText>Carregando posts...</BlogText>)
                    : filteredPosts.length === 0
                        ? (<BlogText>Nenhum post encontrado.</BlogText>) : <PostLists />
                }
                <BlankSpace size='32px' />
            </Box>
        </MainLayout>
    )
}

export default BlogPage