import { getPayloadClient } from '../get-payload'
import { SlugValidator } from '../lib/validators/slug-validator'
import { publicProcedure, router } from '../trpc/trpc'

export const pageRouter = router({
  getLayouts: publicProcedure.input(SlugValidator).query(async ({ input }) => {
    const payload = await getPayloadClient()

    try {
      const { slug } = input
      const details = await payload.find({
        collection: 'pages',
        where: {
          slug: {
            equals: slug,
          },
        },
      })
      return details.docs.at(0)?.layout
    } catch (error) {}
  }),
})
