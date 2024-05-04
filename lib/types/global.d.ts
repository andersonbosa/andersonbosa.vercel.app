export type GithubRepo = {
  name: string
  stargazers_count: number
  html_url: string
  description: string | null
  topics: string[] | null
  homepage: string | null
  language: string | null
}
