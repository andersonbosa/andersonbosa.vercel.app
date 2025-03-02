import { Theme } from '@mui/material'
import { useEffect, useState } from 'react'
import { ThemeConfig } from '../theme/config'

const LAST_VISIT_KEY = 'lastVisitTimestamp'
const FAKE_LOADING_DURATION = 123
const VISIT_THRESHOLD = 60 * 60 * 1000

export const useThemeLoading = () => {
    // SUGGESTION remover esse comportamento, nao acho mais legal rsrs
    // TODO FIX está sempre usando valor padrão, ignorando a lógica do installFakeLoading
    const [useFakeLoading, setUseFakeLoading] = useState(false)
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

    const installFakeLoading = () => {
        const lastVisitTimestamp = localStorage.getItem(LAST_VISIT_KEY)
        const now = Date.now()

        if (!lastVisitTimestamp || now - parseInt(lastVisitTimestamp, 10) > VISIT_THRESHOLD) {
            const timer = setTimeout(() => setUseFakeLoading(false), FAKE_LOADING_DURATION)
            return () => clearTimeout(timer)
        } else {
            setUseFakeLoading(false)
        }

        localStorage.setItem(LAST_VISIT_KEY, now.toString())
    }

    useEffect(installPreferredColorScheme, [])
    useEffect(installFakeLoading, [])

    return { currentThemeMode, useFakeLoading, handleThemeChange }
}