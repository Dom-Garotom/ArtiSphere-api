import { Request, Response } from "express";
import { User } from "../types/user";
import { dbUser } from "../utils/db"
import { v4 as uuidv4 } from "uuid"
import { gerarHash, verificarSenha } from "../utils/hash";
import { gerarToken } from "../utils/token";

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email, senha }: User = req.body;
        const hash = await gerarHash(senha);
        const password = hash 

        if (!password) {
            throw new Error("Não foi possivel gerar o hash");
        }

        const data = {
            id: uuidv4(),
            name,
            email,
            senha: password
        }

        dbUser.push(data);

        const token = gerarToken(data)

        res.status(201).json({
            success: true,
            mensage: "Usuário registrado com sucesso",
            token : token
        })

    } catch (errr) {
        res.status(500).send(errr)
    }
}


export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, senha }: User = req.body;

        const user = dbUser.find((item: User) => item.email === email)

        if (!user) {
            res.status(400).json({
                "success": false,
                "message": "Usuário ou senha inválido"
            })
            return
        } 

        const isValid = await verificarSenha(senha, user?.senha)

        if (!isValid) {
            res.status(400).json({
                "success": false,
                "message": "Usuário ou senha inválido"
            })

            return
        }

        res.status(200).json({
            "success": true,
            "message": "Usuário válido"
        })

    } catch (error: any) {
        res.status(400).json({
            "success": false,
            "message": error.message || "Erro ao tentar fazer login"
        })
    }
}
