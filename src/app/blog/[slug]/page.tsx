import { MainLayout } from '@/modules/__shared__/components/layouts/main-layout'
import { PostCard } from '@/modules/__shared__/components/post/post-card'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'


export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: any) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    if (!post) {
        return {}
    }
    return { title: post.title }
}

interface PostPageProps { params: { slug: string } }

export default function Page({ params }: PostPageProps) {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    if (!post) {
        notFound()
    }

    return (<MainLayout><PostCard post={post} /></MainLayout>)
}
