import { Block } from "payload/types";

export const Ct01_28: Block = {
  slug: "ct01_28",
  labels: {
    singular: "Ct01_28 Block",
    plural: "Ct01_28 Blocks",
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
      name: "paragraphs",
      label: "Paragraphs",
      type: "array",
      fields: [
        {
          name: "paragraph",
          label: "Paragraph",
          type: "textarea",
        },
      ],
    },
  ],
};
