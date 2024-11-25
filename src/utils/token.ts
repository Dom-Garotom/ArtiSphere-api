import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
import { User } from "../types/user"

dotenv.config()

export const gerarToken = ( id : string) => {

    const payload = {
        sub : id,
        iss: "ArtiSphere",
        aud: "ArtiSphere",
        iat: Math.floor(Date.now() / 1000),
    }

    const secret = process.env.ACCESS_TOKEN_SECRET
    
    if (!secret){
        return
    }
    
    const token = jwt.sign(payload , secret)

    if (token){
        return token
    }

    throw new Error("Erro ao gerar o token");
}


