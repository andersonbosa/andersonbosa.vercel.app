import { client } from '@/modules/__shared__/api/github-client'

export async function GET () {
  const repos: Repository[] = await client.getUserRepositoriesByUsername('andersonbosa')

  const favoriteRepositories = [
    'security-goat',
    'wayback.go',
    'moshell.sh',
    'git_audit_go',
  ]

  const filteredRepositories = repos.filter(
    ({ name }) => favoriteRepositories?.includes(name)
  )

  const sortedRepositories = filteredRepositories.sort(
    (a, b) => b.stargazers_count - a.stargazers_count,
  )

  return Response.json(sortedRepositories)
}