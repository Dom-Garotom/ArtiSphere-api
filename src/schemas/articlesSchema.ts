import { z } from "zod";

export const articleSchema = z.object({
    id: z.string().uuid(),
    title: z.string().min(5),
    article: z.string(),
    num_likes: z.number().default(0),
    num_comments: z.number().default(0),
    imageUrl: z.optional(z.string().url()),
})


export const createArticleSchema = z.object({
    id: z.optional(z.string().uuid()),
    title: z.string().min(5, {message : "O titulo do artigo deve ter pelo menos 5 caracteres"}),
    article: z.string({message : "Você deve informar um artigo"}),
    num_likes: z.optional(z.number().default(0)),
    num_comments: z.optional(z.number().default(0)),
    imageUrl: z.optional(z.string().url()),
})