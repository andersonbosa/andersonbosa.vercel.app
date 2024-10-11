import React from 'react'
import { Box } from '@mui/material'

import { Experiences } from '../components/expiriences/experiences'
import { BlankSpace } from '../components/blank-space'
import SideTitle from '../components/side-title'


export const ExperiencesView: React.FC = () => {
  return (
    <Box id='experiences'>
      <BlankSpace />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flexstart',
          flexDirection: 'row',
          width: '100%',
          gap: '1rem',
        }}
      >
        <SideTitle>Experiences</SideTitle>
        <Experiences  />
      </Box>
    </Box>
  )
}
