import { Block } from 'payload/types'

export const Ct01_18: Block = {
  slug: 'ct01_18',
  imageURL: '/images/blocks/Ct01_18.jpg',
  labels: {
    singular: 'Ct01_18 Block',
    plural: 'Ct01_18 Blocks',
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
      label: 'paragraph',
      type: 'textarea',
      required: true,
    },
    {
      name: 'points',
      label: 'Points',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'point',
          label: 'Point',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'background_image',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Background Image',
      },
    },
  ],
}
