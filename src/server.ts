import express from "express";
import RoutesArticles from "./rotas/artigos";
import RoutesAuth from "./rotas/auth";
import conexaoComBancoDeDados from './utils/conexao';

const server = express()
server.use(express.json())
server.use("/articles", RoutesArticles)
server.use("/", RoutesAuth);

conexaoComBancoDeDados()

server.listen(3000, () => {
    console.log("Estamos no ar meus amigos");
})

