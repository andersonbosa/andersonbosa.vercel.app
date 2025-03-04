import { client } from '@/modules/__shared__/api/devto-client'
import { DevtoArticle } from '@/modules/blog/@types/blog'
import { compareAsc } from 'date-fns'

export async function GET(request: Request) {
  const posts: DevtoArticle[] = await client.getMyPosts()

  const { searchParams } = new URL(request.url)
  const searchTerm = searchParams.get('search')?.toLowerCase() || ''
  const page = parseInt(searchParams.get('page') || '1')
  const perPage = parseInt(searchParams.get('per_page') || '8')

  const filteredPosts = posts
    .filter(
      p => !searchTerm
        || p.title.toLowerCase().includes(searchTerm)
        || p.description.toLowerCase().includes(searchTerm)
    )
    .sort((a, b) => compareAsc(new Date(b.published_at), new Date(a.published_at)))

  console.log(filteredPosts)

  // TODO refactor this pagination that is so perrformatic
  const total = filteredPosts.length
  const startIndex = (page - 1) * perPage
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + perPage)

  return Response.json({
    data: paginatedPosts,
    metadata: {
      page,
      perPage,
      total,
      totalPages: Math.ceil(total / perPage),
    }
  })
}