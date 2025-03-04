import { formatedDate } from "@/modules/__shared__/@helpers/date.helper"
import { GenericCard } from "@/modules/__shared__/components/generic-card"
import { Box, Link, Tooltip, Typography } from "@mui/material"
import { UnifiedPost } from "../../@types/blog"
import { BlogH2, BlogText } from "../ui/typography"

interface PostsListsProps {
    posts: UnifiedPost[]
}

export const PostsList: React.FC<PostsListsProps> = ({ posts }) => {
    return (
        <ul>
            {posts.map((post) => (
                <GenericCard key={post.slug} sx={{ maxWidth: '600px', mx: 'auto', mb: 2, cursor: 'pointer' }}>
                    <Tooltip arrow={true} title={post.source === 'external' ? 'Published on https://dev.to' : 'Internal publish'}>
                        <Box>
                            <Link href={post.url || `/posts/${post.slug}`}>
                                <BlogH2 sx={{ fontSize: 24, '&:hover': { textDecoration: 'underline' } }}>
                                    {post.title}
                                </BlogH2>
                            </Link>
                            <BlogText>{post.description || 'Read More'}</BlogText>
                            <Typography variant="caption" color="text.secondary">
                                {formatedDate(post.date)} | {post?.tags.join(', ')}
                            </Typography>
                        </Box>
                    </Tooltip>
                </GenericCard>
            ))}
        </ul>
    )
}