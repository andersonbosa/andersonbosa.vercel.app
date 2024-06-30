'use client'

import { Grid, Card, CardContent, Typography } from '@mui/material'

export const ProjectCard: React.FC<{ repo: Repository }> = ({ repo, ...rest }) => {
  return (
    <Grid item xs={10} md={4} sm={6} {...rest}>
      <Card
      // backdropFilter='blur(0.313rem)'
      // borderRadius='md'
      // h='full'
      // role='group'
      // transition='0.2s'
      // _hover={{
      //   shadow: 'xl',
      //   transform: 'translateY(-0.25rem)',
      // }}
      >
        <CardContent >
          <Typography variant="h5" component="div">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer"> {repo.name} </a>
          </Typography>
          <Typography variant="body2" color="text.secondary"> {repo.description || 'No description'} </Typography>
          <Typography variant="body2" color="text.secondary"> Stars: {repo.stargazers_count} </Typography>
          <Typography variant="body2" color="text.secondary"> Language: {repo.language} </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
