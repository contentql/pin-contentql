import { Block } from "payload/types";

export const Hero5: Block = {
  slug: "hero5",
  labels: {
    singular: "Hero5 Block",
    plural: "Hero5 Blocks",
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
      name: "background_image",
      label: "Background Image",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "background image",
      },
    },
  ],
};
