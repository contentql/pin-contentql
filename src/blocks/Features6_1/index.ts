import { Block } from 'payload/types'

export const Features6_1: Block = {
  slug: 'features6_1',
  labels: {
    singular: 'Features6_1 Block',
    plural: 'Features6_1 Blocks',
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
      name: 'features',
      label: 'Features',
      type: 'array',
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
      ],
    },
  ],
}
