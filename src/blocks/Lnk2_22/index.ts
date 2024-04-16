import { Block } from 'payload/types'

export const Lnk2_22: Block = {
  slug: 'lnk2_22',
  labels: {
    singular: 'Lnk2_22 Block',
    plural: 'Lnk2_22 Blocks',
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
