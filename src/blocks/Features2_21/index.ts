import { Block } from "payload/types";

export const Features2_21: Block = {
  slug: "features2_21",
  labels: {
    singular: "Features2_21 Block",
    plural: "Features2_21 Blocks",
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
