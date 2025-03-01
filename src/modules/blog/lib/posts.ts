import { BlogPost } from '@/modules/__shared__/@types/blog'
import { allPosts } from 'contentlayer/generated'
import { fetchDevToPosts } from './devto'

export async function getAllPosts(): Promise<BlogPost[]> {
    const internalPosts: BlogPost[] = allPosts.map((post) => ({
        slug: post.slug,
        title: post.title,
        date: post.date,
        tags: post.tags,
        category: post.category as 'vida',
        content: post.body.code,
    }))

    const externalPosts = await fetchDevToPosts(String(process.env.DEVTO_USERNAME))

    const mappedExternalPosts: BlogPost[] = externalPosts.map((post) => ({
        slug: post.slug,
        title: post.title,
        date: post.published_at,
        tags: post.tags,
        category: 'tecnologia',
        description: post.description,
        url: post.url,
    }))

    return [...internalPosts, ...mappedExternalPosts]
        .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
}