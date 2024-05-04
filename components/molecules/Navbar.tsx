'use client'


import { AVAIABLE_LANGUAGES, } from '@/constants'
import ThemeToggle from '../atoms/ThemeToggle'
import Button from '../theme/Button'
import LanguagePicker from './LanguagePicker'

interface NavbarProps { }

function Navbar(props: NavbarProps): React.JSX.Element {
  return (
    <nav className="navbar p-[7px] -- flex justify-between min-h-[var(--navbar-height)] -- bg-base-100">
      <Button>
        <div className="px-2 lg:flex-none">
          <a href='/' className="text-lg font-bold">ANB</a>
        </div>
      </Button>

      <div className="flex justify-end ">
        <div className="flex items-stretch">
          <ThemeToggle />
          <LanguagePicker availableLanguages={AVAIABLE_LANGUAGES} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
