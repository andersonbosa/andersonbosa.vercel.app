import { formatedDate } from "@/modules/__shared__/@helpers/date.helper"
import { GenericCard } from "@/modules/__shared__/components/generic-card"
import { Box, Link, Tooltip, Typography } from "@mui/material"
import { PostEntity } from "../../@types/blog"
import { BlogH2, BlogText } from "../ui/typography"

interface PostsListsProps {
    posts: PostEntity[]
}

export const PostsList: React.FC<PostsListsProps> = ({ posts }) => {
    const formatDescription = (p: PostEntity) => p.description || p.content?.slice(0, 150) + '...'
    return (
        <ul>
            {posts.map((post) => (
                <GenericCard key={post.slug} sx={{ maxWidth: '600px', mx: 'auto', mb: 4, cursor: 'pointer' }}>
                    <Tooltip arrow={true} title={post.source === 'external' ? 'Published on https://dev.to. You will be redirected.' : 'Internal publish'}>
                        <Box>
                            <Link href={post.url || `/posts/${post.slug}`}>
                                <BlogH2 sx={{ fontSize: 24, '&:hover': { textDecoration: 'underline' } }}>
                                    {post.title}
                                </BlogH2>
                            </Link>
                            <BlogText>{formatDescription(post)}</BlogText>
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