import { Block } from 'payload/types'

export const Features13_6: Block = {
  slug: 'features13_6',
  imageURL: '/images/blocks/Features13_6.jpg',
  labels: {
    singular: 'Features13_6 Block',
    plural: 'Features13_6 Blocks',
  },
  fields: [
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
      name: 'paragraph',
      label: 'Paragraph',
      type: 'textarea',
      required: true,
    },
    {
      name: 'points',
      label: 'Points',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'point',
          label: 'Point',
          type: 'textarea',
          required: true,
        },
      ],
    },

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
