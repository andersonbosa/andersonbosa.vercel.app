'use client'

import { Theme, useMediaQuery } from '@mui/material'
import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeConfig } from '../theme/config'

const LIGHT_THEME_KEY = 'light'
const DARK_THEME_KEY = 'dark'

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [theme, setTheme] = useState<Theme>(ThemeConfig.themes.light)

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const isCurrentlyDark = prevTheme === ThemeConfig.themes.dark
            const newTheme = isCurrentlyDark ? ThemeConfig.themes.light : ThemeConfig.themes.dark
            const newThemeKey = isCurrentlyDark ? LIGHT_THEME_KEY : DARK_THEME_KEY

            localStorage.setItem('theme', newThemeKey)
            document.documentElement.classList.toggle(DARK_THEME_KEY, newTheme === ThemeConfig.themes.dark)

            return newTheme
        })
    }

    useEffect(() => {
        const savedThemeKey = localStorage.getItem('theme')

        if (savedThemeKey === DARK_THEME_KEY || savedThemeKey === LIGHT_THEME_KEY) {
            const initialTheme = savedThemeKey === DARK_THEME_KEY ? ThemeConfig.themes.dark : ThemeConfig.themes.light
            setTheme(initialTheme)
            document.documentElement.classList.toggle(DARK_THEME_KEY, savedThemeKey === DARK_THEME_KEY)
        } else {
            const initialTheme = prefersDarkMode ? ThemeConfig.themes.dark : ThemeConfig.themes.light
            setTheme(initialTheme)
            document.documentElement.classList.toggle(DARK_THEME_KEY, prefersDarkMode)
        }
    }, [prefersDarkMode])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useMuiTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeContextProvider')
    }
    return context
}