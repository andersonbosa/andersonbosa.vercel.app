'use client'

import { PostEntity } from '@/modules/blog/@types/blog'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { ApiDataResponse } from '../@types/globals'

interface PostContextType {
    posts: PostEntity[]
    loading: boolean
    total: number
    page: number
    perPage: number
    totalPages: number
    searchTerm: string
    setSearchTerm: (term: string) => void
    setPage: (page: number) => void
}

const PostContext = createContext<PostContextType | undefined>(undefined)

export const PostProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<PostEntity[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [perPage] = useState(8)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            try {
                const url = `/api/posts?search=${encodeURIComponent(searchTerm)}&page=${page}&per_page=${perPage}`
                const response = await fetch(url)
                if (!response.ok) throw new Error('Failed to fetch posts')
                const apiResponse: ApiDataResponse<PostEntity[]> = await response.json()
                setPosts(apiResponse.data)
                setTotal(apiResponse.metadata.total)
                setTotalPages(apiResponse.metadata.totalPages)
            } catch (error) {
                console.error('Error fetching posts:', error)
                setPosts([])
                setTotal(0)
                setTotalPages(0)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [searchTerm, page, perPage])

    const value: PostContextType = {
        posts,
        loading,
        total,
        page,
        perPage,
        totalPages,
        searchTerm,
        setSearchTerm,
        setPage,
    }

    return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}

export const usePosts = () => {
    const context = useContext(PostContext)
    if (!context) throw new Error('usePosts must be used within a PostProvider')
    return context
}