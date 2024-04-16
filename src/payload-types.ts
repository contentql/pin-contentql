/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User
    media: Media
    pages: Page
    'payload-preferences': PayloadPreference
    'payload-migrations': PayloadMigration
  }
  globals: {
    header: Header
    footer: Footer
  }
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string
  user_name?: string | null
  roles?: ('admin' | 'user' | 'seller')[] | null
  updatedAt: string
  createdAt: string
  email: string
  resetPasswordToken?: string | null
  resetPasswordExpiration?: string | null
  salt?: string | null
  hash?: string | null
  _verified?: boolean | null
  _verificationToken?: string | null
  loginAttempts?: number | null
  lockUntil?: string | null
  password: string | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string
  alt?: string | null
  updatedAt: string
  createdAt: string
  url?: string | null
  filename?: string | null
  mimeType?: string | null
  filesize?: number | null
  width?: number | null
  height?: number | null
  sizes?: {
    square?: {
      url?: string | null
      width?: number | null
      height?: number | null
      mimeType?: string | null
      filesize?: number | null
      filename?: string | null
    }
    sixteenByNineMedium?: {
      url?: string | null
      width?: number | null
      height?: number | null
      mimeType?: string | null
      filesize?: number | null
      filename?: string | null
    }
    thumbnail?: {
      url?: string | null
      width?: number | null
      height?: number | null
      mimeType?: string | null
      filesize?: number | null
      filename?: string | null
    }
    card?: {
      url?: string | null
      width?: number | null
      height?: number | null
      mimeType?: string | null
      filesize?: number | null
      filename?: string | null
    }
    tablet?: {
      url?: string | null
      width?: number | null
      height?: number | null
      mimeType?: string | null
      filesize?: number | null
      filename?: string | null
    }
  }
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string
  name: string
  slug: string
  layout?:
    | (
        | {
            title: string
            subtitle: string
            background_image: string | Media
            id?: string | null
            blockName?: string | null
            blockType: 'hero5'
          }
        | {
            caption: string
            title: string
            subtitle: string
            heading: string
            points: {
              point: string
              id?: string | null
            }[]
            background_image: string | Media
            id?: string | null
            blockName?: string | null
            blockType: 'lnk1_23'
          }
        | {
            caption: string
            title: string
            paragraphs: {
              paragraph: string
              id?: string | null
            }[]
            background_image: string | Media
            id?: string | null
            blockName?: string | null
            blockType: 'ct01_28'
          }
        | {
            title: string
            subtitle: string
            heading: string
            paragraph: string
            points: {
              point: string
              id?: string | null
            }[]
            background_image: string | Media
            id?: string | null
            blockName?: string | null
            blockType: 'ct02_44'
          }
        | {
            caption: string
            title: string
            subtitle: string
            points: {
              point: string
              id?: string | null
            }[]
            features: {
              title: string
              description: string
              id?: string | null
            }[]
            id?: string | null
            blockName?: string | null
            blockType: 'features12_10'
          }
        | {
            statistics: {
              integer: number
              character: string
              description: string
              id?: string | null
            }[]
            id?: string | null
            blockName?: string | null
            blockType: 'statistic1_19'
          }
        | {
            title: string
            subtitle: string
            background_image: string | Media
            id?: string | null
            blockName?: string | null
            blockType: 'lnk2_22'
          }
        | {
            title: string
            subtitle: string
            features: {
              title: string
              description: string
              id?: string | null
            }[]
            id?: string | null
            blockName?: string | null
            blockType: 'features11_10'
          }
        | {
            title: string
            subtitle: string
            features: {
              title: string
              description: string
              feature_image_light: string | Media
              feature_image_dark: string | Media
              id?: string | null
            }[]
            id?: string | null
            blockName?: string | null
            blockType: 'features2_21'
          }
        | {
            features: {
              s_no: number
              title: string
              description: string
              id?: string | null
            }[]
            background_image: string | Media
            id?: string | null
            blockName?: string | null
            blockType: 'ct04_16'
          }
        | {
            features: {
              title: string
              description: string
              id?: string | null
            }[]
            background_image: string | Media
            id?: string | null
            blockName?: string | null
            blockType: 'ct02_45'
          }
        | {
            title: string
            subtitle: string
            reviews: {
              review: string
              name: string
              designation: string
              reviewer_image: string | Media
              id?: string | null
            }[]
            id?: string | null
            blockName?: string | null
            blockType: 'reviews2_8'
          }
        | {
            title: string
            description: string
            id?: string | null
            blockName?: string | null
            blockType: 'banner7_7'
          }
        | {
            title: string
            button1_text: string
            button2_text: string
            sub_title1: string
            sub_title2: string
            background_image: string | Media
            id?: string | null
            blockName?: string | null
            blockType: 'hero21'
          }
        | {
            title: string
            sub_title: string
            heading1: string
            paragraph1: string
            heading2: string
            paragraph2: string
            points: {
              point: string
              id?: string | null
            }[]
            background_image: string | Media
            id?: string | null
            blockName?: string | null
            blockType: 'lnk1_21'
          }
        | {
            caption: string
            title: string
            sub_title: string
            heading: string
            points: {
              point: string
              id?: string | null
            }[]
            background_image: string | Media
            id?: string | null
            blockName?: string | null
            blockType: 'ct02_38'
          }
        | {
            title: string
            sub_title: string
            features: {
              title: string
              description: string
              feature_image_light: string | Media
              feature_image_dark: string | Media
              id?: string | null
            }[]
            id?: string | null
            blockName?: string | null
            blockType: 'features2_19'
          }
        | {
            caption: string
            title: string
            sub_title: string
            heading: string
            description: string
            background_image: string | Media
            id?: string | null
            blockName?: string | null
            blockType: 'wswrapper_10'
          }
        | {
            title: string
            id?: string | null
            blockName?: string | null
            blockType: 'brands1_17'
          }
        | {
            title: string
            sub_title: string
            features: {
              title: string
              description: string
              id?: string | null
            }[]
            id?: string | null
            blockName?: string | null
            blockType: 'features11_8'
          }
        | {
            title: string
            sub_title: string
            heading: string
            paragraph: string
            points: {
              point: string
              id?: string | null
            }[]
            background_image: string | Media
            id?: string | null
            blockName?: string | null
            blockType: 'ct02_39'
          }
        | {
            caption: string
            title: string
            sub_title: string
            points: {
              point: string
              id?: string | null
            }[]
            features: {
              title: string
              description: string
              id?: string | null
            }[]
            id?: string | null
            blockName?: string | null
            blockType: 'features12_8'
          }
        | {
            caption: string
            title: string
            subtitle: string
            points: {
              point: string
              id?: string | null
            }[]
            background_image: string | Media
            id?: string | null
            blockName?: string | null
            blockType: 'ct02_40'
          }
        | {
            statistics: {
              integer: number
              character: string
              description: string
              id?: string | null
            }[]
            id?: string | null
            blockName?: string | null
            blockType: 'statistic1_17'
          }
        | {
            features: {
              s_no: number
              title: string
              description: string
              id?: string | null
            }[]
            background_image: string | Media
            id?: string | null
            blockName?: string | null
            blockType: 'ct04_15'
          }
        | {
            title: string
            sub_title: string
            reviews: {
              review: string
              name: string
              designation: string
              reviewer_image: string | Media
              id?: string | null
            }[]
            id?: string | null
            blockName?: string | null
            blockType: 'reviews1_11'
          }
        | {
            title: string
            sub_title: string
            questions: {
              question_number: number
              question: string
              answer: string
              id?: string | null
            }[]
            id?: string | null
            blockName?: string | null
            blockType: 'faqs3_13'
          }
        | {
            title: string
            sub_title: string
            background_image: string | Media
            id?: string | null
            blockName?: string | null
            blockType: 'banner13_9'
          }
      )[]
    | null
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string
  user: {
    relationTo: 'users'
    value: string | User
  }
  key?: string | null
  value?:
    | {
        [k: string]: unknown
      }
    | unknown[]
    | string
    | number
    | boolean
    | null
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string
  name?: string | null
  batch?: number | null
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string
  logo_pink: string | Media
  logo_pink_white: string | Media
  logo_white: string | Media
  product_links: {
    title: string
    description: string
    path: string
    id?: string | null
  }[]
  explore_path: string
  resources1_links: {
    title: string
    description: string
    path: string
    id?: string | null
  }[]
  resources2_links: {
    title: string
    description: string
    path: string
    id?: string | null
  }[]
  templates_path: string
  pricing_path: string
  updatedAt?: string | null
  createdAt?: string | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string
  logo_pink: string | Media
  logo_pink_white: string | Media
  footer_title1: string
  title1_links: {
    footer_name: string
    footer_path: string
    id?: string | null
  }[]
  footer_title2: string
  title2_links: {
    footer_name: string
    footer_path: string
    id?: string | null
  }[]
  footer_title3: string
  title3_links: {
    footer_name: string
    footer_path: string
    id?: string | null
  }[]
  newsletter_title: string
  copyright_description: string
  updatedAt?: string | null
  createdAt?: string | null
}

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
