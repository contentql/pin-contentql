import { Block } from 'payload/types'

export const PostsWrapper_1: Block = {
  slug: 'postsWrapper_1',
  imageURL: '/images/blocks/PostsWrapper_1.jpg',
  labels: {
    singular: 'PostsWrapper_1 Block',
    plural: 'PostsWrapper_1 Blocks',
  },
  fields: [
    {
      name: 'blogs',
      label: 'Blogs',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'blog_image',
          label: 'Blog Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Blog image',
          },
        },
        {
          name: 'caption',
          label: 'Caption',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'bloger_name',
          label: 'Bloger Name',
          type: 'text',
          required: true,
        },
        {
          name: 'date',
          label: 'Date',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
