import express from "express";
import RoutesArticles from "./rotas/artigos";
import RoutesAuth from "./rotas/auth";
import conexaoComBancoDeDados from './utils/conexao';
import swaggerUi from "swagger-ui-express"
import YAML from "yamljs"

const server = express()
server.use(express.json())
server.use("/articles", RoutesArticles)
server.use("/", RoutesAuth);


// docs api
const swaggerDocument = YAML.load('./src/docs/api.yaml');
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

conexaoComBancoDeDados()

server.listen(3000, () => {
    console.log("Estamos no ar meus amigos");
    console.log(`Documentação disponível em http://localhost:3000/docs`)
})
