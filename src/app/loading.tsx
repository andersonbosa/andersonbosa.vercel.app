
import { Box, CircularProgress } from '@mui/material'

export default function Loading(): React.ReactNode {
  return (
    <Box
      display="flex"
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box>
        <CircularProgress sx={{ color: '#D8804E' }} />
      </Box>
      <Box>Improving your experience...</Box>
    </Box>
  )
}
