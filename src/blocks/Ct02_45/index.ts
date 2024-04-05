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
