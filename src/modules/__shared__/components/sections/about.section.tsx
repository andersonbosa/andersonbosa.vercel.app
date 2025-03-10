'use client'

import { Box, Card, Chip, styled, Typography, } from '@mui/material'
import Image from 'next/image'
import { useIsMobile } from '../../hooks/is-mobile.hook'
import { BlankSpace } from '../blank-space'
import SideTitle from '../side-title'

interface AboutSectionProps { }

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

const StyledChip = styled(Chip)({
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
  fontWeight: 'bold',
  '&:hover': {
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-0.25rem)',
    scale: '1.05'
  },
})

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const isMobile = useIsMobile()

  return (
    <Box id='about' sx={{
      width: '100%',
      maxWidth: 'calc(100vw)',
      paddingRight: '1.8rem'
    }}>
      <BlankSpace />
      <Box className='about-wrapper'
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem',
        }}
      >
        <SideTitle>About</SideTitle>
        <Box className='about-content'
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'center' : 'flex-start',
              gap: '1rem',
            }}
          >
            <Box sx={{
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              <StyledCard>
                <Image alt='profile photo' src='https://github.com/andersonbosa.png' width={230} height={230} />
              </StyledCard>
            </Box>
            <Box>
              <Typography variant='body1' paragraph sx={{
                textAlign: 'justify'
              }}>
                My journey began as a full-stack developer, where I gained experience in various technologies such as Python, NodeJS, Vue, React, Docker and many others. With experience in several areas of SLDC, such as frontend, backend, systems administration, and security, I am committed to continuously applying all my knowledge to solve real-world problems. My experience includes software development, application security, project management, agile practices and a great toolkit of soft skills. I'm committed to helping teams build high-level software that delivers more than functional requirements and offers a complete digital experience.
                <br /><br />
                I'm always open to connecting with people who share similar interests or exploring collaboration opportunities in the field of web development and security.
              </Typography>
            </Box>
          </Box>

          <Box className='about-badges'>
            <Typography variant='body1' paragraph>
              The technologies I have been working with recently include:
            </Typography>
            <Box>
              <Box sx={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                alignContent: 'stretch',
                alignItems: 'stretch',
                justifyContent: 'flex-start',
              }}>
                {[
                  'Javascript',
                  'Typescript',
                  'PHP',
                  'Ruby on Rails',
                  'Jest',
                  'Docker',
                  'MariaDB',
                  'Keycloak'
                ].map(
                  (item: string) => (
                    <StyledChip key={item} label={item} sx={{
                      flexBasis: 'fit-content',
                      flexGrow: 1,
                    }} />
                  )
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
