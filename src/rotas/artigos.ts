import express, { Request, Response } from 'express';
import { db } from '../utils/db';
import { Articles } from '../types/articles';
import {v4 as uuidv4 } from "uuid"
import { middlewareCreateArticle } from '../middleware/createArticle';

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).send(db)
})

router.post("/create", middlewareCreateArticle , (req : Request, res : Response) => {
    const {article , title , imageUrl , likes} : Articles = req.body

    const data = {
        id : uuidv4(),
        title,
        article,
        likes,
        imageUrl,
    }

    db.push( data )

    res.status(201).send({article , title , imageUrl , likes})
})

export default router;