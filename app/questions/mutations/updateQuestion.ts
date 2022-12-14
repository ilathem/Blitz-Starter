import { resolver } from "@blitzjs/rpc"
import db from "db"
import { z } from "zod"

const UpdateQuestion = z.object({
  id: z.number(),
  text: z.string(),
  choices: z.array(z.object({ id: z.number().optional(), text: z.string() })),
})

export default resolver.pipe(
  resolver.zod(UpdateQuestion),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    // const question = await db.question.update({ where: { id }, data })
    const question = await db.question.update({
      where: { id },
      data: {
        ...data,
        choices: {
          upsert: data.choices.map((choice) => ({
            // Appears to be a prisma bug
            // because '|| 0' shouldn't be needed
            // maybe this is patched?
            where: { id: choice.id },
            create: { text: choice.text },
            update: { text: choice.text },
          })),
        },
      },
      include: { choices: true },
    })

    return question
  }
)
