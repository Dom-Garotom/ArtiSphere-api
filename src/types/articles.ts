import { articleSchema } from './../schemas/articlesSchema';
import { z } from "zod";

export type Articles = z.infer<typeof articleSchema>