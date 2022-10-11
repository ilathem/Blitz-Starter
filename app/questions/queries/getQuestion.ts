import { NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const GetQuestion = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetQuestion), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  // const question = await db.question.findFirst({ where: { id } })
  // changing this to tell prisma that we want to query for nested relations
  const question = await db.question.findFirst({
    where: { id },
    include: { choices: true },
  })

  if (!question) throw new NotFoundError()

  return question
})
