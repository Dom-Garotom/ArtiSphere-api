import { Request, Response } from "express";
import { User } from "../types/user";
import { dbUser } from "../utils/db"
import { v4 as uuidv4 } from "uuid"
import { gerarHash, verificarSenha } from "../utils/hash";

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email, senha }: User = req.body;
        const hash = await gerarHash(senha);
        const password = hash

        if (password) {
            const data = {
                id: uuidv4(),
                name,
                email,
                senha: password
            }

            dbUser.push(data);

            res.status(201).json({
                success: true,
                mensage: "Usuário registrado com sucesso"
            })
            return;
        }

        throw new Error("Não foi possivel gerar o hash");


    } catch (errr) {
        res.status(500).send(errr)
    }
}


export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, senha }: User = req.body;

        const user = dbUser.find((item: User) => item.email === email)

        if (!user) {
            throw new Error("Usuário ou senha inválidos.");
        }

        const isValid = await verificarSenha(senha, user?.senha)

        if (!isValid) {
            throw new Error("Usuário ou senha inválidos.");
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
