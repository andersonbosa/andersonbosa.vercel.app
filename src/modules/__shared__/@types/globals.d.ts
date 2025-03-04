export type Repository = {
  id: number
  name: string
  description?: string
  stargazers_count: number
  language: string
  homepage?: string
  topics?: string[]
  html_url: string
}

export interface ApiMetadataResponse {
  total: number
  page: number
  perPage: number
  totalPages: number
}

export interface ApiDataResponse<T = any> {
  data: T
  metadata: ApiMetadataResponse
}