import express from 'express';
import { middlewareCreateArticle } from '../middleware/createArticle';
import { createArticles, deleteArticles, getArticles, updateArticles } from '../controlers/articlesControlers';
import { middlewareUpdateArticle } from '../middleware/updateArticle';

const router = express.Router()

router.get("/", getArticles)

router.post("/create", middlewareCreateArticle , createArticles )

router.put("/update/:id", middlewareUpdateArticle, updateArticles  )

router.delete("/delete/:id", deleteArticles )

export default router;