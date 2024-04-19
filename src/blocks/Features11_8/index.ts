import { Block } from 'payload/types'

export const Features11_8: Block = {
  slug: 'features11_8',
  imageURL: '/images/blocks/Features11_8.jpg',
  labels: {
    singular: 'Features11_8 Block',
    plural: 'Features11_8 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    { name: 'sub_title', label: 'Sub Title', type: 'text', required: true },
    {
      name: 'features',
      label: 'Features',
      required: true,
      type: 'array',
      fields: [
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
      ],
    },
  ],
}
