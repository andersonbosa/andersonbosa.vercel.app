'use client'

import { Grid, Card, CardContent, Typography, Link, Tooltip } from '@mui/material'
import { styled } from '@mui/material/styles'

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

const Title = styled(Typography)({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const ProjectCard: React.FC<{ repo: Repository }> = ({ repo, ...rest }) => {
  return (
    <Grid item xs={10} md={4} sm={6} {...rest}>
      <StyledCard>
        <CardContent>
          <Tooltip title={repo.name} arrow>
            <Title variant="h5" className='project-title'>
              <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </Link>
            </Title>
          </Tooltip>
          <Typography variant="body2" color="text.secondary">
            {repo.description || 'No description'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stars: {repo.stargazers_count}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Language: {repo.language}
          </Typography>
        </CardContent>
      </StyledCard>
    </Grid>
  )
}
