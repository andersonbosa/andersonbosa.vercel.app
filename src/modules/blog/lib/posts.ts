import { BlogPostEntity, DevtoArticle } from '@/modules/blog/@types/blog'
import axios from 'axios'
import { allPosts } from 'contentlayer/generated'
import { compareAsc } from 'node_modules/date-fns/compareAsc.cjs'


async function fetchDevToPosts(): Promise<DevtoArticle[]> {
    const response = await axios.get('/api/posts')
    return response.data
}

function DevToPostToBlogPostEntity(p: DevtoArticle): BlogPostEntity {
    return {
        slug: p.slug,
        title: p.title,
        date: p.published_at,
        tags: p.tag_list.toString().split(','),
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

    const externalPosts = await fetchDevToPosts()

    const mappedExternalPosts: BlogPostEntity[] = externalPosts.map(DevToPostToBlogPostEntity)

    return [
        ...internalPosts,
        ...mappedExternalPosts
    ].sort((a, b) => compareAsc(new Date(b.date), new Date(a.date)))
}