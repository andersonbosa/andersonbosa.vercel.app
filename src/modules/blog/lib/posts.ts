import { BlogPostEntity, DevToPost } from '@/modules/__shared__/@types/blog'
import { allPosts } from 'contentlayer/generated'


async function fetchDevToPosts(): Promise<DevToPost[]> {
    const response = await fetch('/api/devto')
    return response.json()
}

function DevToPostToBlogPostEntity(p: DevToPost): BlogPostEntity {
    return {
        slug: p.slug,
        title: p.title,
        date: p.published_at,
        tags: p.tags.toString().split(','),
        description: p.description,
        url: p.url,
        content: p.body_markdown,
    }
}

export async function getAllPosts(): Promise<BlogPostEntity[]> {
    const internalPosts: BlogPostEntity[] = allPosts.map((post) => ({
        slug: post.slug,
        title: post.title,
        date: post.date,
        tags: post.tags,
        content: post.body.code,
    }))

    // const externalPosts = await fetchDevToPosts()
    // const mappedExternalPosts: BlogPostEntity[] = externalPosts.map(DevToPostToBlogPostEntity)

    return [
        ...internalPosts,
        // ...mappedExternalPosts
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}