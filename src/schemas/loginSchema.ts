import { z } from "zod";

const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/;

export const loginSchema = z.object({
    email : z.string().email("Informe um email válido"),
    senha : z.string().min(8 , "A senha deve ter no minímo oito caracteres").regex(regex , "A senha deve ter letras maiúsculas e minúsculas e caracteres especiais")
})