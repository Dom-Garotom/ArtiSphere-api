import express, { Request, Response } from 'express';
import { db } from '../utils/db';
import { middlewareCreateArticle } from '../middleware/createArticle';
import { createArticles, deleteArticles, updateArticles } from '../controlers/articlesControlers';
import { middlewareUpdateArticle } from '../middleware/updateArticle';

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).send(db)
})

router.post("/create", middlewareCreateArticle , createArticles )

router.put("/update", middlewareUpdateArticle, updateArticles  )

router.delete("/delete/:id", deleteArticles )

export default router;