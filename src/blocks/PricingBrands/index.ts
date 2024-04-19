import { Block } from 'payload/types'

export const PricingBrands: Block = {
  slug: 'pricingBrands',
  imageURL: '/images/blocks/PricingBrands.jpg',
  labels: {
    singular: 'PricingBrands Block',
    plural: 'PricingBrands Blocks',
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
