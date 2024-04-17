import { Block } from 'payload/types'

export const Rating1_11: Block = {
  slug: 'rating1_11',
  imageURL: '/images/blocks/Rating1_11.jpg',
  labels: {
    singular: 'Rating1_11 Block',
    plural: 'Rating1_11 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'ratings',
      label: 'Ratings',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'background_image',
          label: 'Background Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'rating image',
          },
        },
        {
          name: 'rating',
          label: 'Rating',
          type: 'number',
          required: true,
        },
        {
          name: 'rating_out_of',
          label: 'Rating Out Of',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
}
