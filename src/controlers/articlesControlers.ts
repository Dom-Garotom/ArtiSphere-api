import { Articles } from "../types/articles"
import { v4 as uuidv4 } from "uuid"
import { Request, Response } from "express"
import { articleDb } from "../db/models/articleModels"


export const getArticles = async (req: Request, res: Response) => {
    const db = await articleDb.findAll();
    res.status(200).json(db)
}

export const createArticles = async (req: Request, res: Response) => {
    const { article, title, imageUrl, likes }: Articles = req.body

    const data = {
        id: uuidv4(),
        title,
        article,
        likes,
        imageUrl,
    }

    await articleDb.create(data)

    res.status(201).json({ message: "Item criado com sucesso" })
}


export const updateArticles = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const { article, title, imageUrl, likes }: Articles = req.body

        const existingArticle = await articleDb.findByPk(id)

        if (!existingArticle) {
            res.status(404).json({ message: "Item inexistente" })
        }

        const [update] = await articleDb.update(
            { article, title, imageUrl, likes },
            { where: { id } }
        )

        if (update > 0) {
            res.status(200).json({ message: "Artigo atualizado com sucesso" })
            return
        }

        res.status(400).json({ message: "Erro ao atualizar o artigo" })
        return


    } catch (error : any) {
        res.status(500).send(error.message)
    }
}


export const deleteArticles = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const existingArticle = await articleDb.findByPk(id)

        if (!existingArticle) {
            res.status(404).json({ message: "Item inexistente" })
            return
        }

        await existingArticle?.destroy()

        res.status(200).json({ message: "Item removido com sucesso!" })
        return
    } catch (error : any) {
        res.status(500).send(error.message)
    }
}