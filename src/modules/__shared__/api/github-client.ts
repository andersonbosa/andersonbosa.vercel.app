import axios from 'axios'


class GitHubClient {
  private baseURL: string

  constructor() {
    this.baseURL = 'https://api.github.com'
  }

  async getUserRepositoriesByUsername (username: string): Promise<Repository[]> {
    try {
      const response = await axios.get<Repository[]>(
        `${this.baseURL}/users/${username}/repos?per_page=1000`
      )
      return response.data
    } catch (error) {
      throw new Error('Error fetching user repositories')
    }
  }
}

export const client = new GitHubClient()
export default client
