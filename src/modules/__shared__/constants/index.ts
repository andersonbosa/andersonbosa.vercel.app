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