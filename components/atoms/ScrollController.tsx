'use client'

import { ArrowDown, ArrowUpToLine } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import ToolTip from '../theme/ToolTip'


interface ScrollControllerProps {
}

function ScrollController ({ }: ScrollControllerProps): React.JSX.Element {
  const t = useTranslations('ScrollController')

  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const scrollToBottom = () => {
    scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth'
    })
  }

  useEffect(
    () => {
      // Function to verify that the page was rolled down
      const handleScroll = () => {
        // Height in pixels to consider that the page was rolled down
        const threshold = window.innerHeight - 128
        if (window.scrollY > threshold) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }

      // Adds a scroll event listener when the component is assembled
      window.addEventListener('scroll', handleScroll)

      // Removes the scroll event listener when the component is dismantled
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },
    []
  )

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-3 right-3 -- flex flex-col" >
          <ToolTip tip={t('tooltip_up')} className='tooltip-left'>
            <button
              className="relative -- scale-75 -- btn btn-circle md:btn-outline btn-neutral"
              onClick={scrollToTop}
            >
              <ArrowUpToLine />
            </button>
          </ToolTip>
          <button
            className="relative -- scale-75 -- btn btn-circle btn-outline btn-neutral -- hidden md:flex"
            onClick={scrollToBottom}
          >
            <ArrowDown />
          </button>
        </div>
      )}
    </>
  )
}

export default ScrollController
