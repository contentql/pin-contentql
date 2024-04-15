import { Block } from "payload/types";

export const Reviews1_11: Block = {
  slug: "reviews1_11",
  labels: {
    singular: "Reviews1_11 Block",
    plural: "Reviews1_11 Blocks",
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
      type: "text",
      required: true,
    },
    {
      name: "reviews",
      label: "Reviews",
      required: true,
      type: "array",
      fields: [
        {
          name: "review",
          label: "Review",
          type: "textarea",
          required: true,
        },
        {
          name: "name",
          label: "Name",
          type: "text",
          required: true,
        },
        {
          name: "designation",
          label: "Designation",
          type: "text",
          required: true,
        },
        {
          name: "reviewer_image",
          label: "Reviewer Image",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: {
            description: "reviewer image",
          },
        },
      ],
    },
  ],
};