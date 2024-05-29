interface IGetUserRepositoriesOutput {
  id: number
  full_name: string
  description: string
  disabled: boolean
  homepage: string
  git_url: string
  html_url: string
  issues_url: string
  labels_url: string
  topics: string[]
  language: string | null
  license: {
    name: string
    url: string
  }
  name: string
  owner: {
    id: number
    login: string
  }
  watchers_count: number
  stargazers_count: number
  stargazers_url: string
  forks_count: number
  updated_at: string
  created_at: string

}

export class GithubClient {
  static async getUserRepositories (username: string): Promise<IGetUserRepositoriesOutput[]> {
    const response = await fetch(`https://api.github.com/users/${username}/repos`)
    return response.json()
  }

  static async getUser (username: string): Promise<any> {
    const response = await fetch(`https://api.github.com/users/${username}`)
    return response.json()
  }
}
