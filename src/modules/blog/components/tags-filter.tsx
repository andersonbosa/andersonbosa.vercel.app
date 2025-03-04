// src/components/tags-filter.tsx
'use client'

import { Box, Chip, Typography } from '@mui/material'
import React from 'react'

interface TagsFilterProps {
    tags: string[]
    selectedTags: string[]
    onTagToggle: (tag: string) => void
    isMobile?: boolean
}

export const TagsFilter: React.FC<TagsFilterProps> = ({ tags, selectedTags, onTagToggle, isMobile }) => {
    return (
        <Box>
            <Typography variant="subtitle1">Filter by tags</Typography>
            <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='space-between' >
                {tags.map((tag) => (
                    <Chip
                        key={tag}
                        label={tag}
                        onClick={() => onTagToggle(tag)}
                        color={selectedTags.includes(tag) ? 'primary' : 'default'}
                        sx={{ mr: 1, mt: 1 }}
                    />
                ))}
            </Box>
        </Box>
    )
}