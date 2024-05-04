import { GithubRepo } from '@/lib/types/global'
import { mapToGithubRepo } from '@/utils'


export async function fetchGithubRepositoriesByUsername (
  username: string
): Promise<{ data: GithubRepo[] }> {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=1000`)
  const repos = await res.json()
  return { data: repos.map(mapToGithubRepo) }
}
