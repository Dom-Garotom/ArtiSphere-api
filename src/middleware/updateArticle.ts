import { Request, Response, NextFunction } from "express";
import { articleSchema } from "../schemas/articlesSchema"
import { z } from "zod";

export const middlewareUpdateArticle = (req: Request, res: Response, next: NextFunction) => {
    try {
        articleSchema.parse(req.body)
        next();
    } catch (error){
        
        // verifica se o erro do middleware e gerado pelo zod ou pelo sistema - instanceof
        if (error instanceof z.ZodError){
            res.status(400).json({
                valid : false,
                error : error.errors.map(er => ({
                    location: er.path,
                    mensage: er.message
                }))
            })
        }

        res.status(400).send(error)
    }
}