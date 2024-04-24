import { authRouter } from '../routers/auth-router'
import { pageRouter } from '../routers/pages-router'

import { router, userProcedure } from './trpc'

export const appRouter = router({
  anyApiRoute: userProcedure.query(() => {
    return { name: 'akhil' }
  }),

  auth: authRouter,
  pages: pageRouter,
})

export type AppRouter = typeof appRouter
