import { Articles } from "../types/articles"
import {v4 as uuidv4} from "uuid"
import { Request, Response }  from "express"
import { db } from "../utils/db"



export const createArticles = (req : Request, res : Response) => {
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
}


export const deleteArticles = (req : Request, res : Response) => {
    const {id}  = req.params;

    const item = db.findIndex( (item : Articles) => item.id === id);
 
    if (item != -1){
        db.splice(item, 1);
        res.status(201).send("Item removido com sucesso!");
        return
    }

    res.status(400).send("Id não encontrado");

}