import express, { Request, Response } from 'express';
import { db } from '../utils/db';
import { Articles } from '../types/articles';
import {v4 as uuidv4 } from "uuid"
import { middlewareCreateArticle } from '../middleware/createArticle';
import { createArticles, deleteArticles } from '../controlers/articlesControlers';

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).send(db)
})

router.post("/create", middlewareCreateArticle , createArticles )

router.delete("/delete/:id", deleteArticles )

export default router;