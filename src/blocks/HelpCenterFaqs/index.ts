import { Block } from 'payload/types'

export const HelpCenterFaqs: Block = {
  slug: 'helpCenterFaqs',
  imageURL: '/images/blocks/HelpCenterFaqs.jpg',
  labels: {
    singular: 'HelpCenterFaqs Block',
    plural: 'HelpCenterFaqs Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'links',
      label: 'Links',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'link_text',
          label: 'Link Text',
          type: 'text',
          required: true,
        },
      ],
    },

    {
      name: 'questions',
      label: 'Questions',
      required: true,
      type: 'array',
      fields: [
        {
          name: 'question',
          label: 'Question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          label: 'Answer',
          type: 'array',
          required: true,
          fields: [
            {
              name: 'answer_paragraph',
              label: 'Answer Paragraph',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
