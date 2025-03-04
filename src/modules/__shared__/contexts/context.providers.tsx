'use client'

import { MuiThemeProvider } from "../theme/provider"
import { PostsProvider } from "./post.context"
import { ThemeContextProvider } from "./theme.context"

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ThemeContextProvider>
                <MuiThemeProvider>
                    <PostsProvider>
                        {children}
                    </PostsProvider>
                </MuiThemeProvider>
            </ThemeContextProvider>
        </>
    )
}