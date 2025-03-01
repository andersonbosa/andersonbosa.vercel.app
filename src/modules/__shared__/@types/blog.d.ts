
export interface BlogPost {
    slug: string
    title: string
    date: string
    tags: string[]
    category: 'tecnologia' | 'vida'
    content?: string // Para posts internos (MDX)
    description?: string // Para posts externos (dev.to)
    url?: string // Para posts externos (link para dev.to)
}