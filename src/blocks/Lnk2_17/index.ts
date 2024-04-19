import { Block } from 'payload/types'

export const Lnk2_17: Block = {
  slug: 'lnk2_17',
  imageURL: '/images/blocks/Lnk2_17.jpg',
  labels: {
    singular: 'Lnk2_17 Block',
    plural: 'Lnk2_17 Blocks',
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
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'paragraph',
      label: 'paragraph',
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
        description: 'Background Image',
      },
    },
  ],
}
