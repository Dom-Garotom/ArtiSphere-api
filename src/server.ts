import express from "express";
import RoutesArticles  from "./rotas/artigos";

const server = express()
server.use(express.json())
server.use( "/articles" , RoutesArticles )

 

server.listen(3000, () => {
    console.log("Estamos no ar meus amigos");
})