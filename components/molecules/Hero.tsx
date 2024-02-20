'use client'

import { MY_CONTACTS } from '@/constants'
import { useTranslations } from 'next-intl'

import LucideIcon, { LucideIconType } from '@/components/atoms/LucideIcon'
import ContactsDisplay from '@/components/molecules/ContactsDisplay'
import next from 'next'
import Link from 'next/link'

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
  const t = useTranslations('Hero')

  const handleScrollDown = (): void => {
    const nextSection: HTMLElement | null = document.getElementById('afterTheHeroHeader')

    if (!nextSection) {
      console.error('Could not find the next section')
      return
    }

    nextSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hero  " style={{ height: 'calc(100vh - var(--navbar-height))' }}>
      <div
        className="hero-overlay -- bg-base-100 "
      >
      </div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 -- text-5xl font-bold -- text-primary">
            {t('title')}
          </h1>
          <p className="mb-8">
            Job titles animated. Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque
            aut repudiandae et a id nisi.
          </p>
          <div className="mb-5 -- flex justify-between flex-wrap gap-y-[1rem] " >
            <ContactsDisplay contacts={MY_CONTACTS} className='bg-neutral text-neutral-content' />
          </div>

          <br />
          <br />

          <div className="flex justify-center" >
            <span onClick={handleScrollDown}>
              <LucideIcon
                name="ChevronDown"
                size={64}
                additionalClassName='cursor-pointer bounce-animation -- text-neutral'
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
