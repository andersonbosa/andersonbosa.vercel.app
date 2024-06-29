import { Typography } from '@mui/material'
import { FunctionComponent } from 'react'

interface SideTitleProps {
  children: React.ReactNode
}

export const SideTitle: FunctionComponent<SideTitleProps> = (props) => {
  return (
    <Typography
      variant='h2'
      sx={{
        fontSize: '2.1rem',
        fontWeight: 'bold',
        transform: 'rotate(-90deg)',
        transformOrigin: 'left',
        position: 'absolute',
        top: '50%',
        left: '-10px',
        marginTop: '-10px',
      }}
    >
      {props.children}
    </Typography>
  )
}

export default SideTitle