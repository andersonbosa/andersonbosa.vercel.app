import { Box } from '@mui/material'
import { Contacts } from '../components/contact/contact'

interface ContactViewProps {

}

export const ContactsView: React.FC<ContactViewProps> = () => {
  return (
    <Box id='contacts'>
      <Contacts />
    </Box>
  )
}
