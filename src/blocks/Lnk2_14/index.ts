import { Block } from 'payload/types'

export const Lnk2_14: Block = {
  slug: 'lnk2_14',
  imageURL: '/images/blocks/Lnk2_14.jpg',
  labels: {
    singular: 'Lnk2_14 Block',
    plural: 'Lnk2_14 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'text',
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
