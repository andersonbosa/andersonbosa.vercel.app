export interface DevToPost {
    id: number
    title: string
    published_at: string
    slug: string
    tags: string[]
    description: string
    url: string
}

export async function fetchDevToPosts(username: string): Promise<DevToPost[]> {
    const res = await fetch(`https://dev.to/api/articles?username=andersonbosa`, {
        next: { revalidate: 3600 },
    })

    if (res.status === 401) throw new Error('Chave de API inválida')
    if (!res.ok) throw new Error('Erro ao buscar posts no dev.to')

    const data: DevToPost[] = await res.json()
    return data.map((post) => ({
        ...post,
        tags: post.tags || [],
        category: 'tecnologia',
    }))
}