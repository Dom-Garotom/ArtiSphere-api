import { z } from 'zod';
import { NextFunction, Request, Response } from "express";
import { loginSchema } from '../schemas/loginSchema';

export const  middlewareLoginUser = ( req : Request , res : Response ,next : NextFunction) =>{
    try{
        loginSchema.parse(req.body);
        next()
    } catch (error){
        if (error instanceof z.ZodError){
            res.status(400).json({
                valid: false,
                error: error.errors.map( er => ({
                    location: er.path,
                    message: er.message
                }))
            })
            
        }

        res.status(500).send(error)
    }
}