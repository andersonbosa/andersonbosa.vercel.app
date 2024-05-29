

export class GithubClient {
  static async getUserRepositories (username: string) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`)
    return response.json()
  }

  static async getUser (username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    return response.json()
  }
}