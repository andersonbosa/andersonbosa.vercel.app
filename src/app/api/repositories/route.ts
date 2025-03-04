import { Repository } from '@/modules/__shared__/@types/globals'
import { client } from '@/modules/__shared__/api/github-client'

export async function GET() {
  const repos: Repository[] = await client.getUserRepositoriesByUsername('andersonbosa')

  const filterCondition = (repo: Repository) => {
    return repo?.topics?.includes('show')
  }

  const filteredRepositories = repos.filter(filterCondition)

  const sortedRepositories = filteredRepositories.sort(
    (a, b) => b.stargazers_count - a.stargazers_count,
  )

  return Response.json(sortedRepositories)
}