import { Block } from 'payload/types'

export const Ct01_17: Block = {
  slug: 'ct01_17',
  imageURL: '/images/blocks/Ct01_17.jpg',
  labels: {
    singular: 'Ct01_17 Block',
    plural: 'Ct01_17 Blocks',
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
      name: 'heading',
      label: 'Heading',
      type: 'text',
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
