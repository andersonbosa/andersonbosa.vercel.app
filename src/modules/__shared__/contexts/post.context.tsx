'use client'

import { getAllPosts } from '@/modules/blog/lib/posts'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { BlogPost } from '../@types/blog'

interface PostsContextType {
    posts: BlogPost[]
    loading: boolean
}

const PostsContext = createContext<PostsContextType | undefined>(undefined)

export const PostsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadPosts() {
            try {
                const allPosts = await getAllPosts()
                setPosts(allPosts)
            } catch (error) {
                console.error('Erro ao carregar posts:', error)
            } finally {
                setLoading(false)
            }
        }
        loadPosts()
    }, [])

    return (
        <PostsContext.Provider value={{ posts, loading }}>
            {children}
        </PostsContext.Provider>
    )
}

export const usePosts = () => {
    const context = useContext(PostsContext)
    if (!context) {
        throw new Error('usePosts deve ser usado dentro de um PostsProvider')
    }

    return context
}