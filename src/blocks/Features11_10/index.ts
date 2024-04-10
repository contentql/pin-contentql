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
      required: true,
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "textarea",
      required: true,
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
        {
          name: "feature_image",
          label: "Feature Image",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: {
            description: "feature image",
          },
        },
      ],
    },
  ],
};
