import { useEffect, useState } from 'react'

const useSystemTheme = () => {

  const getSystemTheme = () => window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  const watchPreferedColorScheme = () => {
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
  }

  const [theme, setTheme] = useState(getSystemTheme ?? 'light')
  useEffect(watchPreferedColorScheme, [])

  return { theme }
}

export { useSystemTheme }
