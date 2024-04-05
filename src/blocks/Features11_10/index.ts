import { Block } from "payload/types";

export const Features11_10: Block = {
  slug: "features11_10",
  labels: {
    singular: "Features11_10 Block",
    plural: "Features11_10 Blocks",
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
      name: "features",
      label: "Features",
      type: "array",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
        },
      ],
    },
  ],
};
