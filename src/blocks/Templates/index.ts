import { Block } from 'payload/types'

export const Templates: Block = {
  slug: 'templates',
  imageURL: '/images/blocks/Templates.jpg',
  labels: {
    singular: 'Templates Block',
    plural: 'Templates Blocks',
  },
  fields: [
    {
      name: 'template_title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'link1_text',
      label: 'Link 1 Text',
      type: 'text',
      required: true,
    },
    {
      name: 'link2_text',
      label: 'Link 2 Text',
      type: 'text',
      required: true,
    },
  ],
}
