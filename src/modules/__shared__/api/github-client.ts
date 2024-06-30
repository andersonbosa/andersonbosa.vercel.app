import axios from 'axios'


class GitHubClient {
  private baseURL: string

  constructor() {
    this.baseURL = 'https://api.github.com'
  }

  /* TOFIX começou error 500 do nada, acho que é ratelimit */
  async getUserRepositoriesByUsername (username: string): Promise<Repository[]> {
    try {
      const response = await axios.get<Repository[]>(
        `${this.baseURL}/users/${username}/repos?per_page=1000`
      )
      return response.data
    } catch (error) {
      throw new Error(`Error fetching user repositories: ${error}`)
    }
  }
}

export const client = new GitHubClient()
export default client
