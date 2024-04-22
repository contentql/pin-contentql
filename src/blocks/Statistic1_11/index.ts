import { Block } from 'payload/types'

export const Statistic1_11: Block = {
  slug: 'statistic1_11',
  imageURL: '/images/blocks/Statistic1_11.jpg',
  labels: {
    singular: 'Statistic1_11 Block',
    plural: 'Statistic1_11 Blocks',
  },
  fields: [
    {
      name: 'statistics',
      label: 'Statistics',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'integer',
          label: 'Integer',
          type: 'number',
          required: true,
        },
        {
          name: 'character',
          label: 'Character',
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
    },
  ],
}
