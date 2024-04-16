import { Block } from 'payload/types'

export const Statistic1_19: Block = {
  slug: 'statistic1_19',
  labels: {
    singular: 'Statistic1_19 Block',
    plural: 'Statistic1_19 Blocks',
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
