import { Block } from 'payload/types'

export const Lnk1_17: Block = {
  slug: 'lnk1_17',
  imageURL: '/images/blocks/Lnk1_17.jpg',
  labels: {
    singular: 'Lnk1_17 Block',
    plural: 'Lnk1_17 Blocks',
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
      label: 'Subtitle',
      type: 'textarea',
      required: true,
    },
    {
      name: 'background_image',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'background image',
      },
    },
  ],
}
