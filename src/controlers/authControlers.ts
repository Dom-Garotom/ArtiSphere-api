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

        res.status(201).json({
            success: true,
            mensage: "Usuário registrado com sucesso"
        })

    } catch (errr) {
        res.status(500).send(errr)
    }
}


export const loginUser = (req: Request, res: Response) => {
    try {
        const { email, senha }: User = req.body;

        const data = dbUser.find((item: User) => item.email === email && item.senha === senha)

        if (data) {
            res.status(200).json({
                "success": true,
                "message": "Usuário válido"
            })
            return
        }

        throw new Error;


    } catch (errr) {
        res.status(400).json({
            "success": false,
            "message": "Usuário ou senha inválidos."
        })
    }
}
