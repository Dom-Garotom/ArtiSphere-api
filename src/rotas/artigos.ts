import express from 'express';
import { middlewareCreateArticle } from '../middleware/createArticle';
import { createArticles, deleteArticles, getArticles, getArticlesById, updateArticles } from '../controlers/articlesControlers';
import { middlewareUpdateArticle } from '../middleware/updateArticle';

const router = express.Router()

router.get("/", getArticles)

router.get("/:articleID", getArticlesById)

router.post("/create/:id", middlewareCreateArticle , createArticles )

router.put("/update/:id", middlewareUpdateArticle, updateArticles  )

router.delete("/delete/:id", deleteArticles )

export default router;