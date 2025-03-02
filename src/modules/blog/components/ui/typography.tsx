import { Typography, TypographyProps } from '@mui/material'
import React from 'react'

export const BlogH1: React.FC<TypographyProps> = (props) => (
    <Typography variant="h1" component="h1" gutterBottom {...props} />
)

export const BlogH2: React.FC<TypographyProps> = (props) => (
    <Typography variant="h2" component="h2" gutterBottom {...props} />
)

export const BlogH3: React.FC<TypographyProps> = (props) => (
    <Typography variant="h3" component="h3" gutterBottom {...props} />
)

export const BlogText: React.FC<TypographyProps> = (props) => (
    <Typography variant="body1" paragraph {...props} />
)

export const BlogSubtitle: React.FC<TypographyProps> = (props) => (
    <Typography variant="subtitle1" gutterBottom {...props} />
)

export const BlogCaption: React.FC<TypographyProps> = (props) => (
    <Typography variant="body2" color="text.secondary" {...props} />
)