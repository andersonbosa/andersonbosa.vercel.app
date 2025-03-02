
export interface BlogPostEntity {
    slug: string
    title: string
    date: string
    tags: string[]
    content?: string // Para posts internos (MDX)
    description?: string // Para posts externos (dev.to)
    url?: string // Para posts externos (link para dev.to)
}
export interface DevToPost {
    id: number
    title: string
    slug: string
    tags: string[]
    description: string
    url: string
    body_markdown: string
    published: boolean
    published_at: string
    cover_image: string
}
