'use client'

import { Container, Link as MuiLink, Typography } from "@mui/material"
import { BlankSpace } from "../blank-space"

export const Footer: React.FC = () => {
    return (
        <footer>
            <Container maxWidth="lg" >
                <BlankSpace />
                <Typography variant="body2" color="text.secondary" align="center" pb={6}>
                    {'Created by '}
                    <MuiLink href='https://www.linkedin.com/in/andersonbosa' target="_blank">Anderson Bosa</MuiLink>
                    .
                </Typography>
            </Container>
        </footer>
    )
}