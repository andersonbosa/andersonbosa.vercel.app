
import { Box, CircularProgress } from '@mui/material'

export default function Loading (): React.ReactNode {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress sx={{ color: '#D8804E' }} />
    </Box>
  )
}
