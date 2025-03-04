import { ApiDataResponse } from '@/modules/__shared__/@types/globals';
import { client } from '@/modules/__shared__/api/devto-client';
import { PostEntity } from '@/modules/blog/@types/blog';
import { allPosts } from 'contentlayer/generated'; // Posts internos gerados pelo Contentlayer
import { compareAsc } from 'date-fns';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search')?.toLowerCase() || ''
  const page = parseInt(searchParams.get('page') || '1')
  const perPage = parseInt(searchParams.get('per_page') || '10')

  const internalPosts: PostEntity[] = allPosts.map(post => ({
    slug: post.slug,
    title: post.title,
    published: post.published,
    date: post.date,
    tags: post.tags,
    content: post.body.raw,
    url: post.url,
    source: 'internal' as const,
  }))

  const externalPostsRaw = await client.getMyPosts()
  const externalPosts: PostEntity[] = externalPostsRaw.map(post => ({
    slug: post.slug,
    title: post.title,
    published: post.published,
    date: post.published_at,
    tags: post.tag_list,
    description: post.description,
    url: post.url,
    source: 'external' as const,
  }))

  const allUnifiedPosts = [...internalPosts, ...externalPosts]
    .filter(post =>
      post.published &&
      (!search ||
        post.title.toLowerCase().includes(search) ||
        (post.content?.toLowerCase().includes(search)) ||
        (post.description?.toLowerCase().includes(search))
      )
    )
    .sort((a, b) => compareAsc(new Date(b.date), new Date(a.date)))

  const total = allUnifiedPosts.length
  const startIndex = (page - 1) * perPage
  const paginatedPosts = allUnifiedPosts.slice(startIndex, startIndex + perPage)

  const response: ApiDataResponse<PostEntity[]> = {
    data: paginatedPosts,
    metadata: {
      total,
      page,
      perPage,
      totalPages: Math.ceil(total / perPage)
    }
  }

  return Response.json(response)
}