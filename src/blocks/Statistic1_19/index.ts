import { Block } from "payload/types";

export const Statistic1_19: Block = {
  slug: "statistic1_19",
  labels: {
    singular: "Statistic1_19 Block",
    plural: "Statistic1_19 Blocks",
  },
  fields: [
    {
      name: "integer",
      label: "Integer",
      type: "number",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
    },
  ],
};
