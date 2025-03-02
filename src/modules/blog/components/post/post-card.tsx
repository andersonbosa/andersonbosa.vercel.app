'use client'

import { useIsMobile } from '@/modules/__shared__/hooks/is-mobile.hook'
import { Box, Divider, Paper, Typography, useTheme } from '@mui/material'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'next-contentlayer2/hooks'

interface PostCardProps {
    post: Post
}

export function PostCard({ post }: PostCardProps) {
    const isMobile = useIsMobile(useTheme())

    const MDXContent = getMDXComponent(post.body.code)
    return (
        <Paper
            elevation={5}
            sx={{
                py: 4,
                px: 3,
                mx: 'auto',
                maxWidth: '800px',
                borderRadius: 2,
                bgcolor: 'background.paper',
            }}
        >
            <article>
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{ fontWeight: 'bold', mb: 1, color: 'text.primary' }}
                    >
                        {post.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {format(parseISO(post.date), 'dd/MM/yyyy',)} | {post.tags.join(', ')}
                    </Typography>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box
                    sx={{
                        textAlign: 'justify',
                        '& p': { mb: 2, lineHeight: 1.6 },
                        '& h2': { mt: 4, mb: 2, fontWeight: 'bold' },
                        '& h3': { mt: 3, mb: 1.5 },
                    }}
                >
                    <MDXContent />
                </Box>

                <Divider sx={{ my: 4 }} />

                <Box
                    hidden
                    sx={{
                        bgcolor: 'grey.100',
                        p: 2,
                        textAlign: 'center',
                        borderRadius: 1,
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        Espaço reservado para anúncio
                    </Typography>
                </Box>
            </article>
        </Paper>
    )
}