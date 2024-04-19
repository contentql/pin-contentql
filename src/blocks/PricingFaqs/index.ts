import { Block } from 'payload/types'

export const PricingFaqs: Block = {
  slug: 'pricingFaqs',
  imageURL: '/images/blocks/PricingFaqs.jpg',
  labels: {
    singular: 'PricingFaqs Block',
    plural: 'PricingFaqs Blocks',
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
      name: 'questions',
      label: 'Questions',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'question_number',
          label: 'Question number',
          type: 'number',
          required: true,
        },
        {
          name: 'question',
          label: 'Question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          label: 'Answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}