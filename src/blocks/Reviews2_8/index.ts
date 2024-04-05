import { Block } from "payload/types";

export const Reviews2_8: Block = {
  slug: "reviews2_8",
  labels: {
    singular: "Reviews2_8 Block",
    plural: "Reviews2_8 Blocks",
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
      name: "reviews",
      label: "Reviews",
      type: "array",
      fields: [
        {
          name: "review",
          label: "Review",
          type: "textarea",
        },
        {
          name: "name",
          label: "Name",
          type: "text",
        },
        {
          name: "designation",
          label: "Designation",
          type: "text",
        },
      ],
    },
  ],
};
