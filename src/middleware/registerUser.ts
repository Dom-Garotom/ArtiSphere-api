import { z } from 'zod';
import { NextFunction, Request, Response } from "express";
import { registerSchema } from "../schemas/registerSchema";

export const middlewareRegisterUser = (req: Request, res: Response, next: NextFunction) => {
    try {
        registerSchema.parse(req.body)
        next()
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({
                valid: false,
                error: error.errors.map( er => ({
                    location: er.path,
                    error: er.message
                }) )
            })
        }
 
        res.status(400).send(error)
    }

}