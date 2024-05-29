import { GithubRepo } from '@/lib/types/global'
import { mapToGithubRepo } from '@/utils'


// export async function fetchGithubRepositoriesByUsername (
//   username: string
// ): Promise<{ data: GithubRepo[] }> {
//   const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=1000`)
//   const repos = await res.json()
//   return { data: repos.map(mapToGithubRepo) }
// }



export async function fetchGithubRepositoriesByUsername (username: string): Promise<{ data: GithubRepo[] }> {
  console.log(` =================$${new Date().toISOString()}================== username`, username)
  return { data: mock.map(mapToGithubRepo) }
}

const mock = [
  {
    name: 'future-girl',
    stargazers_count: '99',
    html_url: 'https://github.com/andersonbosa/:project_name',
    description: 'sleep advice symbol major food substance why few until his negative yourself easy',
    topics: ['wip', 'begginer'],
    homepage: 'https://andersonbosa.github.io/:project_name',
    language: 'python',
  },
  {
    name: 'myself-poet',
    stargazers_count: '99',
    html_url: 'https://github.com/andersonbosa/:project_name',
    description: 'worry short easy my tip burn those flag each today say hundred tall',
    topics: ['beginner'],
    homepage: 'https://andersonbosa.github.io/:project_name',
    language: 'typescript',
  },
  {
    name: 'product-physical',
    stargazers_count: '99',
    html_url: 'https://github.com/andersonbosa/:project_name',
    description: 'scene castle path except comfortable curious sight fierce dull mean plane worry shall',
    topics: ['intermediary'],
    homepage: 'https://andersonbosa.github.io/:project_name',
    language: 'golang',
  },
  {
    name: 'arrive-event',
    stargazers_count: '99',
    html_url: 'https://github.com/andersonbosa/:project_name',
    description: 'worker mass has come good simply thou energy yellow smaller author chest seeing',
    topics: ['intermediary'],
    homepage: 'https://andersonbosa.github.io/:project_name',
    language: 'golang',
  },
  {
    name: 'magnet-factor',
    stargazers_count: '99',
    html_url: 'https://github.com/andersonbosa/:project_name',
    description: 'take feel distance wash cheese having stretch kept column dig adjective vote camp',
    topics: ['advanced'],
    homepage: 'https://andersonbosa.github.io/:project_name',
    language: 'typescript',
  },
  {
    name: 'yesterday-two',
    stargazers_count: '99',
    html_url: 'https://github.com/andersonbosa/:project_name',
    description: 'deeply select anything balance effort long cloth slightly music mirror discover gave back',
    topics: ['wip advanced'],
    homepage: 'https://andersonbosa.github.io/:project_name',
    language: 'typescript',
  },
]
