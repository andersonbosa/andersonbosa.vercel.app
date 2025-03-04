import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail'

export const meta = {
  title: 'Anderson Bosa | Software Engineer',
  subtitle: 'I build secure digital experiences!',
  description: 'Coding since Tibia 8 was released, developer and cyber security analyst. Hungry to learn, glad to share.',
  creator: 'Anderson Bosa < https://github.com/andersonbosa >'
}
interface INavItem {
  id: string
  label: string
  href: string
}

export const NAV_ITEMS: INavItem[] = [
  { id: 'blog', label: 'Blog', href: '/blog', },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'projects', label: 'Projects', href: '/#projects', },
  { id: 'contacts', label: 'Contact', href: '/#contacts', },
]

export const contacts = [
  {
    icon: GitHubIcon,
    link: 'https://github.com/andersonbosa'
  },
  {
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/andersonbosa/'
  },
  {
    icon: MailIcon,
    link: 'mailto:andersonbosa0@gmail.com'
  },
]