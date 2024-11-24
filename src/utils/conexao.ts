import { dataBase } from "../db/config/config";
import { articleModel } from "../db/models/articleModels";

const conexaoComBancoDeDados = async () => {
    try {
        await dataBase.authenticate();
        console.log("Conexão com o banco de dados bem-sucedida!");


        await dataBase.sync({alter: true});
        console.log("Banco de dados sincronizado com sucesso!");

    } catch (error) {
        console.error("Erro ao conectar ou sincronizar o banco:", error);
    }
}; 


export default conexaoComBancoDeDados;