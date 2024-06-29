'use client'

import { Box, List, ListItemButton, ListItemText } from '@mui/material'
import { NAV_ITEMS } from '../../constants'

export interface ISidebarProps { }

export function Sidebar (props: ISidebarProps) {
  return (
    <Box display='flex' position='absolute'>
      <Box sx={{ width: 250, padding: 2 }}>
        <List>
          {NAV_ITEMS.map((section) => (
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
