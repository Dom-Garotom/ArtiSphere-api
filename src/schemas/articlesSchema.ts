import { z } from "zod";

export const articleSchema = z.object({
    id: z.string().uuid(),
    title: z.string().min(5),
    article: z.string(),
    likes: z.optional(z.number().default(0)),
    imageUrl: z.optional(z.string().url()),
})