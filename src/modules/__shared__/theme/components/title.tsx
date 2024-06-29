import { Typography } from '@mui/material'
import { FunctionComponent } from 'react'

interface TitleProps {
  children: React.ReactNode
}

const Title: FunctionComponent<TitleProps> = (props) => {
  return (
    <Typography
      variant='h1'
    >
      {props.children}
    </Typography>
  )
}

export default Title