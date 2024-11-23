import { Request, Response } from "express";
import { User } from "../types/user";
import { dbUser } from "../utils/db"
import { v4 as uuidv4 } from "uuid"

export const registerUser = (req: Request, res: Response) => {
    try {
        const { name, email, senha }: User = req.body;

        const data = {
            id: uuidv4(),
            name,
            email,
            senha
        }

        dbUser.push(data);

        res.status(201).send("Usuário registrado com sucesso")
    } catch (errr) {
        res.status(500).send(errr)
    }
}
