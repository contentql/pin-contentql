import { Block } from 'payload/types'

export const Banner7_7: Block = {
  slug: 'banner7_7',
  labels: {
    singular: 'Banner7_7 Block',
    plural: 'Banner7_7 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
  ],
}
