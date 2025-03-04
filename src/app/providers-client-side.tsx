'use client'

import { ThemeContextProvider } from "@/modules/__shared__/contexts/theme.context"
import { MuiThemeProvider } from "@/modules/__shared__/theme/provider"

export const ProvidersClientSide = (
    { children, }: Readonly<{ children: React.ReactNode }>
) => {
    return (
        <>
            <ThemeContextProvider>
                <MuiThemeProvider>
                    {children}
                </MuiThemeProvider>
            </ThemeContextProvider>
        </>
    )
}