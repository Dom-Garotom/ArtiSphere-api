import express from 'express';
import { db } from '../utils/db';

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).send(db)
})

export default router;