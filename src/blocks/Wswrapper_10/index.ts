import { Block } from "payload/types";

export const Wswrapper_10: Block = {
  slug: "wswrapper_10",
  labels: {
    singular: "Wswrapper Block",
    plural: "Wswrapper Blocks",
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
      name: "heading",
      label: "Heading",
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
      name: "background_image",
      label: "Background Image",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Background Image",
      },
    },
  ],
};
