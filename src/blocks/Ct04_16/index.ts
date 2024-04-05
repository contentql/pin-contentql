import { Block } from "payload/types";

export const Ct04_16: Block = {
  slug: "ct04_16",
  labels: {
    singular: "Ct04_16 Block",
    plural: "Ct04_16 Blocks",
  },
  fields: [
    {
      name: "features",
      label: "Features",
      type: "array",
      fields: [
        {
          name: "s_no",
          label: "S_No",
          type: "number",
        },
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
