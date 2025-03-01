import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true },
        tags: { type: 'list', of: { type: 'string' }, default: [] },
        category: { type: 'string', required: true, default: 'pessoal' },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (post) => post._raw.flattenedPath.replace('posts/', ''),
        },
    },
}))

export default makeSource({
    contentDirPath: 'src/content',
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})