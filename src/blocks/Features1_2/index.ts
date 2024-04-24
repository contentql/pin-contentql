import { Block } from 'payload/types'

export const Features1_2: Block = {
  slug: 'features1_2',
  imageURL: '/images/blocks/Features1_2.jpg',
  labels: {
    singular: 'Features1_2 Block',
    plural: 'Features1_2 Blocks',
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
