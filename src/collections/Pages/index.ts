import { Banner3_6 } from '../../blocks/Banner3_6'
import { Banner7_7 } from '../../blocks/Banner7_7'
import { Banner13_1 } from '../../blocks/Banner13_1'
import { Banner13_3 } from '../../blocks/Banner13_3'
import { Banner13_9 } from '../../blocks/Banner13_9'
import { Brands1_1 } from '../../blocks/Brands1_1'
import { Brands1_17 } from '../../blocks/Brands1_17'
import { Brands1_22 } from '../../blocks/Brands1_22'
import { Ct01_7 } from '../../blocks/Ct01_7'
import { Ct01_8 } from '../../blocks/Ct01_8'
import { Ct01_12 } from '../../blocks/Ct01_12'
import { Ct01_28 } from '../../blocks/Ct01_28'
import { Ct01_36 } from '../../blocks/Ct01_36'
import { Ct01_37 } from '../../blocks/Ct01_37'
import { Ct02_1 } from '../../blocks/Ct02_1'
import { Ct02_2 } from '../../blocks/Ct02_2'
import { Ct02_19 } from '../../blocks/Ct02_19'
import { Ct02_20 } from '../../blocks/Ct02_20'
import { Ct02_21 } from '../../blocks/Ct02_21'
import { Ct02_38 } from '../../blocks/Ct02_38'
import { Ct02_39 } from '../../blocks/Ct02_39'
import { Ct02_40 } from '../../blocks/Ct02_40'
import { Ct02_44 } from '../../blocks/Ct02_44'
import { Ct02_45 } from '../../blocks/Ct02_45'
import { Ct02_51 } from '../../blocks/Ct02_51'
import { Ct03_4 } from '../../blocks/Ct03_4'
import { Ct04_15 } from '../../blocks/Ct04_15'
import { Ct04_16 } from '../../blocks/Ct04_16'
import { Faqs3_1 } from '../../blocks/Faqs3_1'
import { Faqs3_13 } from '../../blocks/Faqs3_13'
import { Features2_1 } from '../../blocks/Features2_1'
import { Features2_5 } from '../../blocks/Features2_5'
import { Features2_9 } from '../../blocks/Features2_9'
import { Features2_19 } from '../../blocks/Features2_19'
import { Features2_21 } from '../../blocks/Features2_21'
import { Features5_1 } from '../../blocks/Features5_1'
import { Features5_4 } from '../../blocks/Features5_4'
import { Features6_1 } from '../../blocks/Features6_1'
import { Features7_5 } from '../../blocks/Features7_5'
import { Features11_8 } from '../../blocks/Features11_8'
import { Features11_10 } from '../../blocks/Features11_10'
import { Features11_14 } from '../../blocks/Features11_14'
import { Features11_15 } from '../../blocks/Features11_15'
import { Features12_1 } from '../../blocks/Features12_1'
import { Features12_5 } from '../../blocks/Features12_5'
import { Features12_8 } from '../../blocks/Features12_8'
import { Features12_10 } from '../../blocks/Features12_10'
import { Features12_11 } from '../../blocks/Features12_11'
import { Features13_1 } from '../../blocks/Features13_1'
import { Hero5 } from '../../blocks/Hero5'
import { Hero10 } from '../../blocks/Hero10'
import { Hero15 } from '../../blocks/Hero15'
import { Hero21 } from '../../blocks/Hero21'
import { Hero23 } from '../../blocks/Hero23'
import { Hero25 } from '../../blocks/Hero25'
import { Hero27 } from '../../blocks/Hero27'
import { Integrations2_1 } from '../../blocks/Integrations2_1'
import { Lnk1_5 } from '../../blocks/Lnk1_5'
import { Lnk1_10 } from '../../blocks/Lnk1_10'
import { Lnk1_21 } from '../../blocks/Lnk1_21'
import { Lnk1_23 } from '../../blocks/Lnk1_23'
import { Lnk1_25 } from '../../blocks/Lnk1_25'
import { Lnk1_27 } from '../../blocks/Lnk1_27'
import { Lnk2_1 } from '../../blocks/Lnk2_1'
import { Lnk2_5 } from '../../blocks/Lnk2_5'
import { Lnk2_22 } from '../../blocks/Lnk2_22'
import { Lnk2_26 } from '../../blocks/Lnk2_26'
import { Lnk3_1 } from '../../blocks/Lnk3_1'
import { Newsletter1_2 } from '../../blocks/Newsletter1_2'
import { PricingBanner } from '../../blocks/PricingBanner'
import { PricingBrands } from '../../blocks/PricingBrands'
import { PricingFaqs } from '../../blocks/PricingFaqs'
import { PricingPlans } from '../../blocks/PricingPlans'
import { PricingTables } from '../../blocks/PricingTables'
import { PricingTitle } from '../../blocks/PricingTitle'
import { Rating1_1 } from '../../blocks/Rating1_1'
import { Rating1_11 } from '../../blocks/Rating1_11'
import { Reviews1_1 } from '../../blocks/Reviews1_1'
import { Reviews1_6 } from '../../blocks/Reviews1_6'
import { Reviews1_11 } from '../../blocks/Reviews1_11'
import { Reviews1_13 } from '../../blocks/Reviews1_13'
import { Reviews2_8 } from '../../blocks/Reviews2_8'
import { Statistic1_1 } from '../../blocks/Statistic1_1'
import { Statistic1_5 } from '../../blocks/Statistic1_5'
import { Statistic1_10 } from '../../blocks/Statistic1_10'
import { Statistic1_17 } from '../../blocks/Statistic1_17'
import { Statistic1_19 } from '../../blocks/Statistic1_19'
import { TemplateDesigns } from '../../blocks/TemplateDesigns'
import { TemplatePlain } from '../../blocks/TemplatePlain'
import { TemplateSearch } from '../../blocks/TemplateSearch'
import { Templates } from '../../blocks/Templates'
import { Wswrapper_10 } from '../../blocks/Wswrapper_10'
import { CollectionConfig } from 'payload/types'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
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
        Hero15,
        Features6_1,
        Features5_1,
        Statistic1_1,
        Lnk2_1,
        Features12_1,
        Ct02_1,
        Lnk3_1,
        Brands1_1,
        Features2_1,
        Ct02_2,
        TemplateDesigns,
        Reviews1_1,
        Rating1_1,
        Integrations2_1,
        Faqs3_1,
        Banner13_1,
        Hero27,
        Lnk1_27,
        Lnk1_25,
        Ct01_36,
        Features7_5,
        Ct02_51,
        Lnk2_26,
        Brands1_22,
        Features12_11,
        Ct01_37,
        Reviews1_13,
        Rating1_11,
        Banner3_6,
        Hero10,
        Features11_15,
        Lnk1_10,
        Ct02_19,
        Statistic1_10,
        Features2_9,
        Ct02_20,
        Ct02_21,
        Features12_5,
        Ct01_12,
        Ct03_4,
        Reviews1_6,
        Banner13_3,
        Newsletter1_2,
        Hero25,
        TemplateSearch,
        TemplatePlain,
        Templates,
        PricingTitle,
        PricingTables,
        PricingBrands,
        PricingPlans,
        PricingFaqs,
        PricingBanner,
        Hero23,
        Statistic1_5,
        Features11_14,
        Lnk1_5,
        Features2_5,
        Lnk2_5,
        Ct01_7,
        Ct01_8,
        Features13_1,
        Features5_4,
      ],
    },
  ],
}
