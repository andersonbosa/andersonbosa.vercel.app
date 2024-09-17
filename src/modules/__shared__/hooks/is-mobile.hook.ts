import { Theme, useMediaQuery } from '@mui/material'

export const useIsMobile = (t: Theme) => {
  const isMobile = useMediaQuery(t.breakpoints.down('md'))
  return isMobile
}

