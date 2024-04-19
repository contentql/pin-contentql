import { Block } from 'payload/types'

export const Hero11: Block = {
  slug: 'hero11',
  imageURL: '/images/blocks/Hero11.jpg',
  labels: {
    singular: 'Hero11 Block',
    plural: 'Hero11 Blocks',
  },
  fields: [
    { name: 'title', label: 'Title', type: 'text', required: true },
    {
      name: 'sub_title',
      label: 'Sub Title',
      type: 'text',
      required: true,
    },
    {
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
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
