import { Block } from 'payload/types'

export const Projects1_3: Block = {
  slug: 'projects1_3',
  imageURL: '/images/blocks/Projects1_3.jpg',
  labels: {
    singular: 'Projects1_3 Block',
    plural: 'Projects1_3 Blocks',
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
      name: 'card',
      label: 'Card',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'heading',
          label: 'Heading',
          type: 'text',
          required: true,
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
    },
  ],
}
