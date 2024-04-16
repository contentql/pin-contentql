import { Block } from 'payload/types'

export const Rating1_1: Block = {
  slug: 'rating1_1',
  labels: {
    singular: 'rating1_1 Block',
    plural: 'rating1_1 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
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
}
