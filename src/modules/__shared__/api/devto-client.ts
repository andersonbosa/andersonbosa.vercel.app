import responseMock from '@/../tests/mocks/devto-client.response'
import { DevtoArticle } from '@/modules/blog/@types/blog'
import axios from 'axios'

class DevToClient {

  constructor() {
  }

  async getMyPosts(): Promise<DevtoArticle[]> {
    try {
      if (process.env.NODE_ENV === 'development') {
        console.log(`${__filename}: using mocks`)
        return responseMock as any[] as DevtoArticle[]
      }

      const response = await axios.get<DevtoArticle[]>(
        `https://dev.to/api/articles/me`,
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
