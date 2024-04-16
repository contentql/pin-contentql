import { CollectionConfig } from "payload/types";
import { Banner13_9 } from "../../blocks/Banner13_9";
import { Banner7_7 } from "../../blocks/Banner7_7";
import { Brands1_17 } from "../../blocks/Brands1_17";
import { Ct01_28 } from "../../blocks/Ct01_28";
import { Ct02_38 } from "../../blocks/Ct02_38";
import { Ct02_39 } from "../../blocks/Ct02_39";
import { Ct02_40 } from "../../blocks/Ct02_40";
import { Ct02_44 } from "../../blocks/Ct02_44";
import { Ct02_45 } from "../../blocks/Ct02_45";
import { Ct04_15 } from "../../blocks/Ct04_15";
import { Ct04_16 } from "../../blocks/Ct04_16";
import { Faqs3_13 } from "../../blocks/Faqs3_13";
import { Features11_10 } from "../../blocks/Features11_10";
import { Features11_8 } from "../../blocks/Features11_8";
import { Features12_10 } from "../../blocks/Features12_10";
import { Features12_8 } from "../../blocks/Features12_8";
import { Features2_19 } from "../../blocks/Features2_19";
import { Features2_21 } from "../../blocks/Features2_21";
import { Hero21 } from "../../blocks/Hero21";
import { Hero5 } from "../../blocks/Hero5";
import { Lnk1_21 } from "../../blocks/Lnk1_21";
import { Lnk1_23 } from "../../blocks/Lnk1_23";
import { Lnk2_22 } from "../../blocks/Lnk2_22";
import { Reviews1_11 } from "../../blocks/Reviews1_11";
import { Reviews2_8 } from "../../blocks/Reviews2_8";
import { Statistic1_17 } from "../../blocks/Statistic1_17";
import { Statistic1_19 } from "../../blocks/Statistic1_19";
import { Wswrapper_10 } from "../../blocks/Wswrapper_10";

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [
        Hero5,
        Lnk1_23,
        Ct01_28,
        Ct02_44,
        Features12_10,
        Statistic1_19,
        Lnk2_22,
        Features11_10,
        Features2_21,
        Ct04_16,
        Ct02_45,
        Reviews2_8,
        Banner7_7,
        Hero21,
        Lnk1_21,
        Ct02_38,
        Features2_19,
        Wswrapper_10,
        Brands1_17,
        Features11_8,
        Ct02_39,
        Features12_8,
        Ct02_40,
        Statistic1_17,
        Ct04_15,
        Reviews1_11,
        Faqs3_13,
        Banner13_9,
      ],
    },
  ],
};
