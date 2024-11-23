import { z } from "zod"
import { registerSchema } from "../schemas/registerSchema"

export type User = z.infer<typeof registerSchema> & {
    id : string,
}