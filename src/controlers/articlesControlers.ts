import { Articles } from "../types/articles"
import { v4 as uuidv4 } from "uuid"
import { Request, Response } from "express"
import ArticleDb from "../db/models/articleModels";
import ArticleTagsDB from "../db/models/articlesTagsModels";
import TagsDB from "../db/models/tagsModels";
import CommentsDb from "../db/models/commentsModels";


export const getArticles = async (req: Request, res: Response) => {
    try {
        const db = await ArticleDb.findAll({
            include: [{
                model: TagsDB,
                through: {
                    attributes: []
                },
                attributes: ["id", "content", "color"]
            },
            {
                model: CommentsDb,
            }]
        });

        res.status(200).json(db)
    } catch (error) {
        res.status(502).json({
            status: "Error",
            message: "Error when get articles ",
            erro : error
        })
    }
}

export const createArticles = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const articleId = uuidv4();
        const { article, title, imageUrl, num_likes, num_comments, tags }: Articles = req.body

        const dataArticle = {
            id: articleId,
            person_id: id,
            title,
            article,
            num_likes,
            num_comments,
            imageUrl,
        }

        await ArticleDb.create(dataArticle)

        if (tags && tags.length > 0) {
            await Promise.all(
                tags.map(async (item) => {
                    await ArticleTagsDB.create({
                        id: uuidv4(),
                        tags_id: item,
                        article_id: dataArticle.id,
                    })
                })
            )
        }


        res.status(201).json({ message: "Item criado com sucesso" })
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Infelizmente não foi possivel criar o seu artigo"
        })
    }
}


export const updateArticles = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { article, title, imageUrl }: Articles = req.body

        const existingArticle = await ArticleDb.findByPk(id)

        if (!existingArticle) {
            res.status(404).json({ message: "Item inexistente" })
        }

        const [update] = await ArticleDb.update(
            { article, title, imageUrl },
            { where: { id } }
        )

        if (update > 0) {
            res.status(200).json({ message: "Artigo atualizado com sucesso" })
            return
        }

        res.status(400).json({ message: "Erro ao atualizar o artigo" })
        return


    } catch (error: any) {
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
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}