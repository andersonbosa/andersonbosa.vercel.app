'use client'

import { useCallback } from "react"


function useScrollToTarget() {
    const cb = (cssSelector: string): void => {
        const target: HTMLElement | null = document.querySelector(cssSelector)
        if (!target) return
        target.scrollIntoView({ behavior: "smooth", })
    }

    const scrollToTarget = useCallback(cb, [])

    return scrollToTarget
}

export { useScrollToTarget }
