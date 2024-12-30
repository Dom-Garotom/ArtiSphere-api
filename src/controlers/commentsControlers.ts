import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Comments } from "../types/comments";
import CommentsDb from "../db/models/commentsModels";


export const createComments = async (req: Request, res: Response) => {
    try {
        const { article_id, person_id, content }: Comments = req.body;
        const id = uuidv4();

        await CommentsDb.create({
            id: id,
            article_id: article_id,
            person_id: person_id,
            content: content,
        })

        res.status(201).json({
            status: "sucess",
            message: "Comments create with sucess"
        })

    } catch (error) {
        res.status(502).json({
            status: "Error",
            message: "Error when creating comment "
        })
    }
}


export const deleteComments = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const comment = await CommentsDb.findByPk(id);

        if (!comment) {
            res.status(404).json({
                status: "error",
                message: "Comments not exist"
            })
        }

        await comment?.destroy();

        res.status(200).json({
            status: "sucess",
            message: "Comments deleted with sucess"
        })

    } catch (error) {
        res.status(502).json({
            status: "Error",
            message: "Error when delete comment "
        })
    }
}




export const updateComments = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { content }: Comments = req.body

        const comment = await CommentsDb.findByPk(id);

        if (!comment) {
            res.status(404).json({
                status: "error",
                message: "Comments not exist"
            })
        }

        await comment?.update({
            content: content
        })

        res.status(200).json({
            status: "sucess",
            message: "Comments updated with sucess"
        })

    } catch (error) {
        res.status(502).json({
            status: "Error",
            message: "Error when update comment "
        })
    }
}