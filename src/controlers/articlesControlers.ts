import { Articles } from "../types/articles"
import { v4 as uuidv4 } from "uuid"
import { Request, Response } from "express"
import { db } from "../utils/db"
import { dataBase } from "../db/config/config"
import { articleModel } from "../db/models/articleModels"



export const createArticles = async  (req: Request, res: Response) => {
    const { article, title, imageUrl, likes }: Articles = req.body

    const data = {
        id: uuidv4(),
        title,
        article,
        likes,
        imageUrl,
    }

    db.push(data)

    await articleModel.create(data)

    res.status(201).send({ article, title, imageUrl, likes })
}


export const updateArticles = (req: Request, res: Response) => {
    try {
        const { id, article, title, imageUrl, likes }: Articles = req.body

        const newArticle = {
            id,
            title,
            article,
            likes,
            imageUrl,
        }

        const oldArticle = db.findIndex((item: Articles) => item.id === id);

        if (oldArticle !== -1) {
            db.splice(oldArticle, 1);
            db.push(newArticle),
                res.status(200).send("Item atualizado com sucesso")
            return
        }

        res.status(404).send("Item inexistente")
    } catch (error) {
        res.status(500).send(error)
    }
}


export const deleteArticles = (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const item = db.findIndex((item: Articles) => item.id === id);

        if (item != -1) {
            db.splice(item, 1);
            res.status(200).send("Item removido com sucesso!");
            return
        }

        res.status(400).send("Id não encontrado");

    } catch (error) {
        res.status(500).send(error)
    }
}