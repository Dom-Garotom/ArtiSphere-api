import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from "express";
import TagsDB from "../db/models/tagsModels"

export const getTags = async (req: Request, res: Response) => {
    try {
        const db = await TagsDB.findAll();
        res.status(200).json(db)
    } catch (error) {
        res.status(500).json({ menssage: error })

    }
}

export const createTags = async (req: Request, res: Response) => {
    try {
        const { content, color } = req.body;

        const dataTag = {
            id: uuidv4(),
            content: content,
            color: color
        }

        TagsDB.create(dataTag)

        res.status(200).json(dataTag)
    } catch (error) {
        res.status(500).json({ menssage: error })
    }
}