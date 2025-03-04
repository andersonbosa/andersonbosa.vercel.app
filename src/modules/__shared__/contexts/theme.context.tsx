'use client'

import { Theme, useMediaQuery } from '@mui/material'
import { createContext, useContext, useEffect, useState } from 'react'
import { darkTheme } from '../theme/dark/dark.theme'
import { lightTheme } from '../theme/light/light.theme'

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    // TODO: preserve on localstorage the prefered
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [theme, setTheme] = useState<Theme>(prefersDarkMode ? darkTheme : lightTheme)

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const isCurrentlyDark = prevTheme.palette.mode === 'dark'
            return isCurrentlyDark ? lightTheme : darkTheme
        })
    }

    useEffect(() => {
        setTheme(prefersDarkMode ? darkTheme : lightTheme)
    }, [prefersDarkMode])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useCustomTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useCustomTheme must be used within a ThemeContextProvider')
    }
    return context
}