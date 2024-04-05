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
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "textarea",
    },
  ],
};
