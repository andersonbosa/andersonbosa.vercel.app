// src/components/data-search.tsx

import { BlankSpace } from '@/modules/__shared__/components/blank-space'
import { TagsFilter } from '@/modules/blog/components/tags-filter'
import { Box, Grid, Pagination, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'
import DataSearchBar from './data-search-bar'



interface DataSearchProps<T> {
    items: T[]
    searchTerm: string
    totalPages: number
    page: number
    isItemsLoading: boolean
    allTags: string[]
    selectedTags: string[]
    onSearch: (term: string) => void
    onPageChange: (page: number) => void
    onTagToggle: (tag: string) => void
    renderItems: (filteredItems: T[]) => React.ReactNode
}

export const DataSearch = <T,>({
    items,
    allTags,
    selectedTags,
    searchTerm,
    totalPages,
    page,
    isItemsLoading,
    onSearch,
    onPageChange,
    onTagToggle,
    renderItems,
}: DataSearchProps<T>) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const [searchInput, setSearchInput] = useState(searchTerm)

    useEffect(() => {
        setSearchInput(searchTerm)
    }, [searchTerm])

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSearch(searchInput)
    }

    const filteredItems = items.filter(item =>
        selectedTags.length === 0 || (
            'tags' in (item as T[]) &&
            Array.isArray((item as any).tags) &&
            selectedTags.some(tag => (item as any).tags.includes(tag))
        )
    )

    return (
        <Box>
            <DataSearchBar
                key='data-search-bar'
                searchInput={searchInput}
                handleSearchSubmit={handleSearchSubmit}
                setSearchInput={setSearchInput}
            />
            <Grid container spacing={0}>
                <Grid item xs={12} md={8}>

                    <BlankSpace size="32px" />

                    {isItemsLoading ? (
                        <p>Loading...</p>
                    ) : filteredItems.length === 0 ? (
                        <p>No items found.</p>
                    ) : (
                        renderItems(filteredItems)
                    )}

                    {totalPages > 1 && (
                        <>
                            <BlankSpace size="32px" />
                            <Box display="flex" justifyContent="center">
                                <Pagination
                                    count={totalPages}
                                    page={page}
                                    onChange={(_, newPage) => onPageChange(newPage)}
                                    color="primary"
                                />
                            </Box>
                        </>
                    )}
                </Grid>

                {!isMobile && (
                    <Grid item xs={12} md={4}>
                        <TagsFilter
                            tags={allTags}
                            selectedTags={selectedTags}
                            onTagToggle={onTagToggle}
                            isMobile={isMobile}
                        />
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}