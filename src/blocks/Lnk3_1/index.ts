import { Block } from 'payload/types'

export const Lnk3_1: Block = {
  slug: 'lnk3_1',
  labels: {
    singular: 'Lnk3_1 Block',
    plural: 'Lnk3_1 Blocks',
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
