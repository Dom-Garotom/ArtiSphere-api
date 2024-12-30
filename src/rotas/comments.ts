import express from 'express';
import { createComments } from '../controlers/commentsControlers';
import { middlewareComments } from '../middleware/comments';


const RouterComments = express.Router()

RouterComments.post("/comments" , middlewareComments , createComments)
// router.put("/comments/:id")
// router.delete("/comments/:id")

export default RouterComments;