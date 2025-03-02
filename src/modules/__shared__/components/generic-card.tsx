// modules/__shared__/components/card/GenericCard.tsx
'use client'

import StarIcon from '@mui/icons-material/Star'
import { Badge, BadgeProps, Box, Card, CardContent, Link, Typography } from '@mui/material'
import { styled, SxProps } from '@mui/material/styles'
import React from 'react'

const StyledCard = styled(Card)({
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    borderRadius: '0.5rem',
    backgroundImage: 'none',
    boxShadow: 'none',
    borderColor: 'rgba(117, 108, 96, 1)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(117, 108, 96, 0.3)',
    transition: '0.2s',
    height: '100%',
    '&:hover': {
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        transform: 'translateY(-0.25rem)',
    },
})

const StyledTitle = styled(Typography)({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    '& .MuiBadge-badge': {
        top: 0,
        right: 2,
        fontSize: '0.8rem',
        padding: '0 4px',
    },
}))

interface GenericCardProps {
    title?: string
    description?: string
    badgeContent?: number | string
    link?: string
    footerLeft?: React.ReactNode
    footerRight?: React.ReactNode
    children?: React.ReactNode
    className?: string
    sx?: SxProps
}

export const GenericCard: React.FC<GenericCardProps> = ({
    title,
    description,
    badgeContent,
    link,
    footerLeft,
    footerRight,
    children,
    className,
    sx,
    ...rest
}) => {
    return (
        <StyledCard sx={sx} className={className} {...rest}>
            <CardContent sx={{ height: '100%' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        height: 'inherit',
                    }}
                >
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                            {
                                title &&
                                <StyledTitle variant="h5" className="card-title">
                                    {link ? (
                                        <Link href={link} target="_blank" sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                            {title}
                                        </Link>
                                    ) : (
                                        title
                                    )}
                                </StyledTitle>
                            }
                            {badgeContent !== undefined && (
                                <StyledBadge badgeContent={badgeContent}>
                                    {Number(badgeContent) > 0 && <StarIcon fontSize="small" color="primary" />}
                                </StyledBadge>
                            )}
                        </Box>
                        {description && (
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                {description}
                            </Typography>
                        )}
                        {children}
                    </Box>

                    {(footerLeft || footerRight) && (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                            <Box>{footerLeft}</Box>
                            <Box>{footerRight}</Box>
                        </Box>
                    )}
                </Box>
            </CardContent>
        </StyledCard>
    )
}