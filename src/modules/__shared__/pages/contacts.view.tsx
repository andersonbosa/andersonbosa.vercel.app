import { Box } from '@mui/material'
import { BlankSpace } from '../components/blank-space'
import { Contacts } from '../components/contact/contact'

interface ContactViewProps {

}

export const ContactsView: React.FC<ContactViewProps> = () => {
  return (
    <Box id='contacts'>
      <BlankSpace />
      <Contacts />
    </Box>
  )
}
