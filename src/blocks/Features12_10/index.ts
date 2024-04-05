import { Block } from "payload/types";

export const Features12_10: Block = {
  slug: "features12_10",
  labels: {
    singular: "Features12_10 Block",
    plural: "Features12_10 Blocks",
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
