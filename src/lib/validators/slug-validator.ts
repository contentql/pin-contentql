import { z } from 'zod'

export const SlugValidator = z.object({
  slug: z.string(),
})

export type TSlugValidator = z.infer<typeof SlugValidator>
