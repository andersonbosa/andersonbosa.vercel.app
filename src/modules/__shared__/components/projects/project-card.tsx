'use client'

import StarIcon from '@mui/icons-material/Star'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import GitHubIcon from '@mui/icons-material/GitHub'

import { Badge, BadgeProps, Box, Card, CardContent, Grid, IconButton, Link, Tooltip, Typography } from '@mui/material'
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

const StyledTitle = styled(Typography)({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})


const StyledBadge = styled(Badge)<BadgeProps>(
  ({ _ }) => ({
    '& .MuiBadge-badge': {
      // backgroundColor: theme.palette.text.primary,
      // color: theme.palette.background.paper,
      // color: 'primary',
      top: 0,
      right: 2,
      fontSize: '0.8rem',
      padding: '0 4px',
    },
  })
)

export const ProjectCard: React.FC<{ repo: Repository }> = ({ repo, ...rest }) => {
  return (
    <Grid item xs={10} md={4} sm={6} {...rest}>
      <StyledCard>
        <CardContent sx={{ height: '100%' }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: 'inherit',
          }}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Tooltip title={repo.name} arrow>
                  <StyledTitle variant="h5" className='project-title'>
                    <Link href={repo.html_url} target="_blank">
                      {repo.name}
                    </Link>
                  </StyledTitle>
                </Tooltip>
                <StyledBadge badgeContent={repo.stargazers_count}>
                  {repo.stargazers_count > 0 && <StarIcon fontSize='small' color="primary" />}
                </StyledBadge>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {repo.description || 'No description'}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold' }}> {repo.language} </Typography>
              </Box>
              <Box>
                <Tooltip arrow title='Open project webpage'>
                  <IconButton>
                    <OpenInNewIcon color="primary" />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow title='Open project on GitHub'>
                  <IconButton>
                    <GitHubIcon color="primary" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </StyledCard>
    </Grid>
  )
}
