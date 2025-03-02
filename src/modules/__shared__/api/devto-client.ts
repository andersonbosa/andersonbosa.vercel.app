import { DevToPost } from '@/modules/blog/lib/devto'
import axios from 'axios'

class DevToClient {
  private baseURL: string

  constructor() {
    this.baseURL = 'https://dev.to/api'
  }

  async getMyPosts(): Promise<DevToPost[]> {
    if (process.env.NODE_ENV === 'development') {
      return []
    }

    try {
      const response = await axios.get<DevToPost[]>(
        `${this.baseURL}/articles/me`,
        {
          headers: {
            'api-key': process.env.DEVTO_APIKEY
          }
        }
      )
      return response.data
    } catch (error) {
      throw new Error(`Error fetching user posts: ${error}`)
    }
  }
}

export const client = new DevToClient()
export default client
