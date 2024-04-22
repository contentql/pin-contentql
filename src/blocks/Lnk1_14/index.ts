import { Block } from 'payload/types'

export const Lnk1_14: Block = {
  slug: 'lnk1_14',
  imageURL: '/images/blocks/Lnk1_14.jpg',
  labels: {
    singular: 'Lnk1_14 Block',
    plural: 'Lnk1_14 Blocks',
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
