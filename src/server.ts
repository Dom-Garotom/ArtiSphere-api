import express from "express";
import RoutesArticles  from "./rotas/artigos";
import RoutesAuth from "./rotas/auth";

const server = express()
server.use(express.json())
server.use( "/articles" , RoutesArticles )
server.use( "/" , RoutesAuth )

 

server.listen(3000, () => {
    console.log("Estamos no ar meus amigos");
})


/*
   
    criar a rota de autenticação com jwt
    criar a rota de criar conta 

    conectar o banco de dados da aplicação

    rotas de likes com websoket ou delay de 10s no front

*/