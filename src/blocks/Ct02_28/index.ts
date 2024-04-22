import { Block } from 'payload/types'

export const Ct02_28: Block = {
  slug: 'ct02_28',
  imageURL: '/images/blocks/Ct02_28.jpg',
  labels: {
    singular: 'Ct02_28 Block',
    plural: 'Ct02_28 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'sub_title',
      label: 'Sub Title',
      type: 'text',
      required: true,
    },
    {
      name: 'heading',
      label: 'Heading',
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
