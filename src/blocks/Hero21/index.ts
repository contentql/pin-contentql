import { Block } from "payload/types";

export const Hero21: Block = {
  slug: "hero21",
  labels: {
    singular: "Hero21_Block",
    plural: "Hero21_Blocks",
  },
  fields: [
    { name: "title", label: "Title", type: "text", required: true },
    {
      name: "button1_text",
      label: "Button 1 Text",
      type: "text",
      required: true,
    },
    {
      name: "Button2_text",
      label: "Button 2 Text",
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