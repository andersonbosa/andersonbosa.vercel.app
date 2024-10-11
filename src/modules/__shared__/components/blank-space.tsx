import { Box } from '@mui/material'

export const BlankSpace: React.FC<{ size?: string }> = ({ size = '24vh' }) => (
  <Box aria-label='blank-space' sx={{ height: size }}></Box>
)