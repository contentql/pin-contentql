import { Block } from "payload/types";

export const Ct02_44: Block = {
  slug: "ct02_44",
  labels: {
    singular: "Ct02_44 Block",
    plural: "Ct02_44 Blocks",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "textarea",
    },
    {
      name: "heading",
      label: "Heading",
      type: "text",
    },
    {
      name: "paragraph",
      label: "Paragraph",
      type: "textarea",
    },
    {
      name: "points",
      label: "Points",
      type: "array",
      fields: [
        {
          name: "point",
          label: "Point",
          type: "textarea",
        },
      ],
    },
  ],
};
