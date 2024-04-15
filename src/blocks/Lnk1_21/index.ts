import { Block } from "payload/types";

export const Lnk1_21: Block = {
  slug: "lnk1_21",
  labels: {
    singular: "Lnk1_21 Block",
    plural: "Lnk1_21 Blocks",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "sub_title",
      label: "Sub Title",
      type: "text",
      required: true,
    },
    {
      name: "heading1",
      label: "Heading 1",
      type: "text",
      required: true,
    },
    {
      name: "paragraph1",
      label: "paragraph 1",
      type: "textarea",
      required: true,
    },
    {
      name: "heading2",
      label: "Heading 2",
      type: "text",
      required: true,
    },
    {
      name: "paragraph2",
      label: "paragraph 2",
      type: "textarea",
      required: true,
    },
    {
      name: "points",
      label: "Points",
      type: "array",
      required: true,
      fields: [
        {
          name: "point",
          label: "Point",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "background_image",
      label: "Background Image",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Background Image",
      },
    },
  ],
};
