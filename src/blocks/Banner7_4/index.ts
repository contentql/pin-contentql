import { Block } from 'payload/types'

export const Banner7_4: Block = {
  slug: 'banner7_4',
  imageURL: '/images/blocks/Banner7_4.jpg',
  labels: {
    singular: 'Banner7_4 Block',
    plural: 'Banner7_4 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: true,
    },
  ],
}
