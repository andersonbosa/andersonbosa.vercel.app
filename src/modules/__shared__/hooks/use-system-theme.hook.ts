import { useEffect, useState } from 'react'

const useSystemTheme = () => {
  
  const getSystemTheme = () => {
    if (typeof window === undefined) {
      return
    }
    return window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState(getSystemTheme)

  useEffect(
    () => {
      if (typeof window === undefined) {
        return
      }

      const mediaQuery = window?.matchMedia('(prefers-color-scheme: dark)')

      const handleChange = (event: MediaQueryListEvent) => {
        setTheme(event.matches ? 'dark' : 'light')
      }

      mediaQuery.addEventListener('change', handleChange)

      return () => {
        mediaQuery.removeEventListener('change', handleChange)
      }
    },
    []
  )

  return theme
}

export { useSystemTheme }
