import { Block } from 'payload/types'

export const Banner13_9: Block = {
  slug: 'banner13_9',
  imageURL: '/images/blocks/Banner13_9.jpg',
  labels: {
    singular: 'Banner13_9 Block',
    plural: 'Banner13_9 Blocks',
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
      name: 'background_image',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Background Image',
      },
    },
  ],
}
