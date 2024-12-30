import { z } from "zod";

export const commentsSchema = z.object({
    article_id: z.string().uuid(),
    person_id: z.string().uuid(),
    content: z.string({ message: "O conteúdo do comentário tem que ser uma string " })
    .min(10, "O conteudo do comentário deve ter pelo menos 10 caracteres"),
})

