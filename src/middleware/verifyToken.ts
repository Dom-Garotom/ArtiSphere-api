import { NextFunction, Request, Response } from "express"; 
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"

dotenv.config()

export const middlewareVerificarToken = (req: Request, res: Response, next: NextFunction) => {
    try{
        const secret = process.env.ACCESS_TOKEN_SECRET

        if (!secret) {
            throw new Error;
        }
    
        const header = req.headers["authorization"];
        const token = header && header.split(" ")[1];
    
        if (!token) {
            throw new Error;
        }
    
        jwt.verify(token, secret, (error, payload) => {
            error && res.status(503).send("Token inválido")
            return;
        })
    
        next();
    
    } catch {
        res.status(500)
    }

}