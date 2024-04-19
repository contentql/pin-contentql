import { Block } from 'payload/types'

export const Brands1_17: Block = {
  slug: 'brands1_17',
  imageURL: '/images/blocks/Brands1_17.jpg',
  labels: {
    singular: 'Brands1_17 Block',
    plural: 'Brands1_17 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
  ],
}
