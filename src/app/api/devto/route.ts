import { DevToPost } from '@/modules/__shared__/@types/blog'
import { client } from '@/modules/__shared__/api/devto-client'
import { compareAsc } from 'date-fns'

export async function GET() {
  const posts: DevToPost[] = await client.getMyPosts()
  return Response.json(
    posts.sort((a, b) => compareAsc(new Date(b.published_at), new Date(a.published_at)))
  )
}