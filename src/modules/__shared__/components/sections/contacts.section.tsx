import { Box } from '@mui/material'
import { BlankSpace } from '../blank-space'
import { Contacts } from '../contact/contact'

interface ContactSectionProps {

}

export const ContactsSection: React.FC<ContactSectionProps> = () => {
  return (
    <Box id='contacts'>
      <BlankSpace />
      <Contacts />
    </Box>
  )
}
