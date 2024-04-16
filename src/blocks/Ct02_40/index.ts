import { Block } from "payload/types";

export const Ct02_40: Block = {
  slug: "ct02_40",
  labels: {
    singular: "Ct02_40 Block",
    plural: "Ct02_40 Blocks",
  },
  fields: [
    {
      name: "caption",
      label: "Caption",
      type: "text",
      required: true,
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "text",
      required: true,
    },
    {
      name: "points",
      label: "Points",
      required: true,
      type: "array",
      fields: [
        {
          name: "point",
          label: "Point",
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
