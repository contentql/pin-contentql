import { Block } from 'payload/types'

export const Features5_1: Block = {
  slug: 'features5_1',
  labels: { singular: 'Features5_1 Block', plural: 'Features5_1 Blocks' },
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
      name: 'heading1',
      label: 'Heading 1',
      type: 'text',
      required: true,
    },
    {
      name: 'description1',
      label: 'Description 1',
      type: 'text',
      required: true,
    },
    {
      name: 'image1',
      label: 'Image 1',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'left side Image',
      },
    },
    {
      name: 'heading2',
      label: 'Heading 2',
      type: 'text',
      required: true,
    },
    {
      name: 'description2',
      label: 'Description 2',
      type: 'text',
      required: true,
    },
    {
      name: 'image2',
      label: 'Image 2',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'right side Image',
      },
    },
  ],
}
