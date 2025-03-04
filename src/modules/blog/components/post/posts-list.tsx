import { formatedDate } from "@/modules/__shared__/@helpers/date.helper"
import { GenericCard } from "@/modules/__shared__/components/generic-card"
import { Box, Link, Typography } from "@mui/material"
import { BlogPostEntity } from "../../@types/blog"
import { BlogH2, BlogText } from "../ui/typography"

interface PostsListsProps {
    posts: BlogPostEntity[]
}

export const PostsList: React.FC<PostsListsProps> = ({ posts }) => {
    function getPostUrl(post: BlogPostEntity): string | undefined {
        if (post.url) return post.url
        return `/blog/${post.slug}`
    }
    return (
        <ul>
            {posts.map((post) => (
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
            ))}
        </ul>
    )
}