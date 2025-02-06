'use client'

import { useCallback } from "react"
import { useIsMobile } from "../hooks/is-mobile.hook"
import { useTheme } from "@mui/material"


function useScrollToTarget() {
    const isMobile = useIsMobile(useTheme())

    const cb = (cssSelector: string): void => {
        const target: HTMLElement | null = document.querySelector(cssSelector)
        if (!target) return

        const targetPosition = isMobile
            ? target.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (target.offsetHeight / 4)
            : target.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (target.offsetHeight / 2)

        console.log(targetPosition)

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        })
    }

    const scrollToTarget = useCallback(cb, [])

    return scrollToTarget
}

export { useScrollToTarget }