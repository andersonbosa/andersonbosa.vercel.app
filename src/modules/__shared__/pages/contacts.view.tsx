import { Box } from '@mui/material'
import { Contacts } from '../components/contact/contact'
import { BlankSpace } from '../components/blank-space'

interface ContactViewProps { }

export const ContactsView: React.FC<ContactViewProps> = () => {
  return (
    <Box id='contacts'>
      <BlankSpace />
      <Contacts />
    </Box>
  )
}
