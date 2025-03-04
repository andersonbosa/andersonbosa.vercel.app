// src/components/tags-filter.tsx
'use client'

import { Box, Chip, Modal, Typography } from '@mui/material'
import React from 'react'

interface TagsFilterProps {
    tags: string[]
    selectedTags: string[]
    onTagToggle: (tag: string) => void
    isMobile?: boolean
}

export const TagsFilterMobile: React.FC<TagsFilterProps> = ({ tags, selectedTags, onTagToggle, isMobile }) => {
    const [open, setOpen] = React.useState(false)
    return (
        <>
            <Box sx={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
                <Typography variant="subtitle1">Filter by tags ({selectedTags.length})</Typography>
            </Box>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2, maxWidth: '90%' }}>
                    <Typography variant="subtitle1" mb={2}>Filter by tags</Typography>
                    <Box sx={{ maxHeight: '60vh', overflowY: 'auto' }}>
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
            </Modal>
        </>
    )
}