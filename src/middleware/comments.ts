import { Request, Response, NextFunction } from "express";
import { commentsSchema } from "../schemas/commentsSchema";
import ArticleDb from "../db/models/articleModels";
import { ZodError } from "zod";
import UserDB from "../db/models/userModels";

export const middlewareComments = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dataComments = req.body;
        commentsSchema.parse(dataComments);

        const hasArticleId = await ArticleDb.findByPk(dataComments.article_id)
        const hasPersonId = await UserDB.findByPk(dataComments.person_id)

        if (!hasArticleId) {
            res.status(400).json({
                status: "Error",
                message: "this article not exist"
            })
        }

        if (!hasPersonId) {
            res.status(400).json({
                status: "Error",
                message: "You are not logged"
            })
        }
        
        next();
        
    } catch (error) {

        if (error instanceof ZodError) {
            res.status(400).json({
                status: "Error",
                message: error.message
            })
        }

        res.status(400).json({
            status: "Error",
            message: error
        })

    }
}