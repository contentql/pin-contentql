import { Block } from 'payload/types'

export const Lnk1_25: Block = {
  slug: 'lnk1_25',
  imageURL: '/images/blocks/Lnk1_25.jpg',
  labels: {
    singular: 'Lnk1_25 Block',
    plural: 'Lnk1_25 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'textarea',
      required: true,
    },
    {
      name: 'heading1',
      label: 'Heading1',
      type: 'text',
      required: true,
    },
    {
      name: 'description1',
      label: 'Description1',
      type: 'text',
      required: true,
    },
    {
      name: 'heading2',
      label: 'Heading2',
      type: 'text',
      required: true,
    },
    {
      name: 'description2',
      label: 'Description2',
      type: 'text',
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
      name: 'background_image',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'background image',
      },
    },
  ],
}
