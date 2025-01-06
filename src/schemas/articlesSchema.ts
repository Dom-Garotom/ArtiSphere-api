import { z } from "zod";

export const articleSchema = z.object({
    title: z.string().min(5),
    article: z.string(),
    num_likes: z.number().default(0),
    num_comments: z.number().default(0),
    imageUrl: z.optional(z.string().url()),
    tags: z.array(z.string()).optional(),
})


export const createArticleSchema = z.object({
    title: z.string().min(5, { message: "O titulo do artigo deve ter pelo menos 5 caracteres" }),
    article: z.string({ message: "Você deve informar um artigo" }),
    imageUrl: z.optional(z.string().url()),
    tags: z.optional(z.array(z.string())),
})