import { Theme } from '@mui/material'
import { useEffect, useState } from 'react'
import { ThemeConfig } from '../theme/config'


export const useThemeLoading = () => {
    const [currentThemeMode, setCurrentThemeMode] = useState<Theme>(ThemeConfig.themes.default)

    const handleThemeChange = () => {
        setCurrentThemeMode(
            currentThemeMode.palette.mode === 'light'
                ? ThemeConfig.themes.dark
                : ThemeConfig.themes.light
        )
    }

    const installPreferredColorScheme = () => {
        const handleColorSchemeChange = (event: MediaQueryListEvent) => {
            setCurrentThemeMode(event.matches ? ThemeConfig.themes.dark : ThemeConfig.themes.light)
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        handleColorSchemeChange({ matches: mediaQuery.matches } as MediaQueryListEvent)
        mediaQuery.addEventListener('change', handleColorSchemeChange)
        return () => mediaQuery.removeEventListener('change', handleColorSchemeChange)
    }

    useEffect(installPreferredColorScheme, [])

    return { currentThemeMode, handleThemeChange }
}