import bcrypto from "bcrypt"

export const gerarHash = async (senha: string) => {
    try {
        const salts = 11;
        const hash = await bcrypto.hash(senha, salts)
        return hash;

    } catch (erro) {
        console.error("Não foi possivel gerao o hash " + erro);
    }
}

export const verificarSenha = async (senha: string, senhaDoBanco: string) => {
    try {
        const result = await bcrypto.compare(senha, senhaDoBanco)
        return result
    } catch (erro) {
        console.error("Erro ao verificar a senha : " + erro)
        return false
    }
}