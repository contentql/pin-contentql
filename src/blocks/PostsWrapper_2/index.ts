import { Block } from 'payload/types'

export const PostsWrapper_2: Block = {
  slug: 'postsWrapper_2',
  imageURL: '/images/blocks/PostsWrapper_2.jpg',
  labels: {
    singular: 'PostsWrapper_2 Block',
    plural: 'PostsWrapper_2 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
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
