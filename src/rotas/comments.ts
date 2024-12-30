import express from 'express';
import { createComments, deleteComments, updateComments } from '../controlers/commentsControlers';
import { middlewareComments } from '../middleware/comments';


const RouterComments = express.Router()

RouterComments.post("/comments" , middlewareComments , createComments)
RouterComments.delete("/comments/:id" , deleteComments)
RouterComments.put("/comments/:id" , updateComments)

export default RouterComments;