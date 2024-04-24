import { Block } from 'payload/types'

export const Features2_12: Block = {
  slug: 'features2_12',
  imageURL: '/images/blocks/Features2_12.jpg',
  labels: {
    singular: 'Features2_12 Block',
    plural: 'Features2_12 Blocks',
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
      required: true,
      type: 'array',
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
        {
          name: 'feature_image_light',
          label: 'Feature Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'feature image light',
          },
        },
        {
          name: 'feature_image_dark',
          label: 'Feature Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'feature image dark',
          },
        },
      ],
    },
  ],
}
