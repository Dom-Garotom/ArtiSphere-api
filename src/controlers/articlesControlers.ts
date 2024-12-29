import { Articles } from "../types/articles"
import { v4 as uuidv4 } from "uuid"
import { Request, Response } from "express"
import ArticleDb from "../db/models/articleModels";


export const getArticles = async (req: Request, res: Response) => {
    const db = await ArticleDb.findAll();
    res.status(200).json(db)
}

export const createArticles = async (req: Request, res: Response) => {
    const { id } = req.params
    const { article, title, imageUrl, num_likes , num_comments }: Articles = req.body

    const data = {
        id: uuidv4(),
        person_id : id,
        title,
        article,
        num_likes,
        num_comments,
        imageUrl,
    }

    await ArticleDb.create(data)
    console.log(data);

    res.status(201).json({ message: "Item criado com sucesso" })
}


export const updateArticles = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const { article, title, imageUrl, num_likes }: Articles = req.body

        const existingArticle = await ArticleDb.findByPk(id)

        if (!existingArticle) {
            res.status(404).json({ message: "Item inexistente" })
        }

        const [update] = await ArticleDb.update(
            { article, title, imageUrl, num_likes },
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

        const existingArticle = await ArticleDb.findByPk(id)

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