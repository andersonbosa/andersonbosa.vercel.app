import React from 'react'
import { Card, Typography, CardContent, CardMedia, Box } from '@mui/material'
import { styled } from '@mui/system'

import { experiencesTimeline } from './constants'

import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
dayjs.locale(ptBR)

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

interface Experience {
  jobTitle: string
  seniority: string
  description: string
  skills: string[]
  dates: {
    start: Date
    end: Date | null
  }
  company: {
    title: string
    logo: string
  }
}

export const Experiences: React.FC = () => {
  const formatDate = (date: Date | null) => {
    return date ? dayjs(date).format('MMM YYYY') : 'Present'
  }

  return (
    <Box display="flex" flexDirection="column" gap={2} width='100%'>
      {experiencesTimeline.map((experience, index) => (
        <StyledCard key={index}>
          <Box p={2} sx={{
            display: 'flex'
          }}>
            <CardMedia
              component="img"

              height="128"
              width="128"
              image={experience.company.logo}
              alt={`${experience.company.title} logo`}
              sx={{
                maxWidth: '128px',
                maxHeight: '128px'
              }}
            />
            <CardContent>
              <StyledTitle variant="h6"> {experience.jobTitle} </StyledTitle>
              <Typography variant="subtitle1" color="textSecondary"> {experience.company.title} </Typography>
              <Typography variant="body2" color="textSecondary"> {formatDate(experience.dates.start)} - {formatDate(experience.dates.end)} </Typography>
              <Typography variant="body2">Seniority: {experience.seniority}</Typography>
            </CardContent>
          </Box>
        </StyledCard>
      ))}
    </Box>
  )
}
