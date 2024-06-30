import { Typography } from '@mui/material'
import { FunctionComponent } from 'react'

interface TitleProps {
  children: React.ReactNode
}

export const Title: FunctionComponent<TitleProps> = (props) => {
  return (
    <Typography
      variant='h1'
      sx={{
        fontSize: '3rem',
        textTransform: 'uppercase',
      }}
    >
      {props.children}
    </Typography>
  )
}

export default Title