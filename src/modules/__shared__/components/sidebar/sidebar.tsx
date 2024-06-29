'use client'

import { Box, List, ListItemButton, ListItemText } from '@mui/material'

export interface ISidebarProps {
}

export function Sidebar (props: ISidebarProps) {
  const sections = [
    // { id: 'about-me', label: 'About me' },
    // { id: 'projects', label: 'Projects' },
    // { id: 'experiences', label: 'Experiences' },
    { id: 'contacts', label: 'Contacts' },
  ]
  return (
    <Box display='flex' position='absolute'>
      <Box sx={{ width: 250, padding: 2 }}>
        <List>
          {sections.map((section) => (
            <ListItemButton key={section.id} component="a" href={`#${section.id}`} sx={{
              transform: 'rotate(180deg)',
              'writing-mode': 'vertical-lr'
            }}>
              <ListItemText primary={section.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  )
}
