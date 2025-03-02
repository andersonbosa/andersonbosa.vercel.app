import { Container, Typography } from "@mui/material"
import { BlankSpace } from "../blank-space"

export const Footer: React.FC = () => {
    return (
        <footer>
            <Container maxWidth="lg" >
                <BlankSpace />
                <Typography variant="body2" color="text.secondary" align="center" pb={6}>
                    {'Created by Anderson Bosa.'}
                </Typography>
            </Container>
        </footer>
    )
}