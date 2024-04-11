import { Block } from "payload/types";

export const Ct02_45: Block = {
  slug: "ct02_45",
  labels: {
    singular: "Ct02_45 Block",
    plural: "Ct02_45 Blocks",
  },
  fields: [
    {
      name: "features",
      label: "Features",
      type: "array",
      required: true,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
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
        description: "background image",
      },
    },
  ],
};
