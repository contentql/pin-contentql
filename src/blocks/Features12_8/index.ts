import { Block } from "payload/types";

export const Features12_8: Block = {
  slug: "features12_8",
  labels: {
    singular: "Features12_8 Block",
    plural: "Features12_8 Blocks",
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
      name: "sub_title",
      label: "Sub Title",
      type: "text",
      required: true,
    },
    {
      name: "points",
      label: "Points",
      type: "array",
      required: true,
      fields: [
        { name: "point", label: "Point", type: "textarea", required: true },
      ],
    },
    {
      name: "features",
      label: "Features",
      required: true,
      type: "array",
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
  ],
};
