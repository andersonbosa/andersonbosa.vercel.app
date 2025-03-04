import githubClientResponseMocked from '@/../tests/mocks/github-client.response'
import axios from 'axios'
import { Repository } from '../@types/globals'

class GitHubClient {
  private baseURL: string

  constructor() {
    this.baseURL = 'https://api.github.com'
  }

  async getUserRepositoriesByUsername(username: string): Promise<Repository[]> {
    if (process.env.NODE_ENV === 'development') {
      console.log(`${__filename}: using githubClientResponseMocked`)
      return githubClientResponseMocked as Repository[]
    }

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
