import { Block } from "payload/types";

export const Lnk1_23: Block = {
  slug: "lnk1_23",
  labels: {
    singular: "Lnk1_23 Block",
    plural: "Lnk1_23 Blocks",
  },
  fields: [
    {
      name: "caption",
      label: "Caption",
      type: "text",
    },
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
