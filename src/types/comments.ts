import { z } from "zod";
import { commentsSchema } from "../schemas/commentsSchema";

export type Comments = z.infer<typeof commentsSchema> & {
    id : string 
}
