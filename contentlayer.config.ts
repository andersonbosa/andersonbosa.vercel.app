import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

const POSTS_ROOT = 'src/content/posts'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true
        },
        date: {
            type: 'date',
            required: true
        },
        tags: {
            type: 'list',
            of: { type: 'string' },
            default: []
        },
        url: {
            type: 'string',
            required: true,
            default: ''
        },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (post) => post._raw.flattenedPath.replace('/posts', ''),
        },
        url: {
            type: 'string',
            resolve: (post) => `/posts/${post._raw.flattenedPath}`,
        },
    },
}))

export default makeSource({
    contentDirPath: POSTS_ROOT,
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})