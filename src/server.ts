import express from "express";

const server = express()
server.use(express.json())

server.get("/", (req, res) => {
})

server.listen(3000, () => {
    console.log("Estamos no ar meus amigos");
})