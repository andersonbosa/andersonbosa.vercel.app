import { PostsProvider } from "@/modules/__shared__/contexts/post.context"


export const ProvidersServerSide = (
    { children, }: Readonly<{ children: React.ReactNode }>
) => {
    return (
        <>
            <PostsProvider>
                {children}
            </PostsProvider>
        </>
    )
}