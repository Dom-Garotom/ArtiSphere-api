import express from "express";
import RoutesArticles from "./rotas/artigos";
import RoutesAuth from "./rotas/auth";
import conexaoComBancoDeDados from './utils/conexao';
import swaggerUi from "swagger-ui-express"
import YAML from "yamljs"
import RoutesTags from "./rotas/tags";
import RouterComments from "./rotas/comments";
import RouterFilter from "./rotas/filter";
import insertSeeds from "./utils/insertSeeds";
import cors from "cors"

const server = express();
server.use(express.json());
server.use("/articles", RoutesArticles);
server.use("/", RoutesAuth);
server.use("/", RoutesTags);
server.use("/", RouterComments);
server.use("/", RouterFilter);
server.use(cors({
    origin: "*",
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

// docs api
const swaggerDocument = YAML.load('./src/docs/api.yaml');
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

conexaoComBancoDeDados();
insertSeeds();

server.listen(3000, () => {
    console.log("Estamos no ar meus amigos");
    console.log(`Documentação disponível em http://localhost:3000/docs`)
})
