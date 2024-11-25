import { Request, Response } from "express";
import UserDB from "../db/models/userModels";
import { User } from "../types/user";
import { v4 as uuidv4 } from "uuid"
import { gerarHash, verificarSenha } from "../utils/hash";
import { gerarToken } from "../utils/token";

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email, senha }: User = req.body;
        const hash = await gerarHash(senha);
        const password = hash;

        if (!password) {
            throw new Error("Não foi possivel gerar o hash");
        }

        const data = {
            id: uuidv4(),
            name,
            email,
            senha: password
        }

        const registerEmail = await UserDB.findOne({
            where: { email : email}
        })

        if (registerEmail){
            throw new Error("Esse email já está sendo ultilizado");
        }

        UserDB.create(data)

        const token = gerarToken(data.id)

        res.status(201).json({
            success: true,
            mensage: "Usuário registrado com sucesso",
            token: token
        })

    } catch (error : any) {
        res.status(500).json({ menssage: error.message })
    }
}


export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, senha }: User = req.body;

        const user = await UserDB.findOne({
            where : { email : email},
        });

  
        if (!user) {
            res.status(400).json({
                "success": false,
                "message": "Usuário ou senha inválido"
            })
            return
        }

        const isValid = await verificarSenha(senha, user.senha) 

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
        res.status(500).json({
            "success": false,
            "message": error.message || "Erro ao tentar fazer login"
        })
    }
}
