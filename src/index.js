import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/saludo", (req, res)=>{

    const obj = {
        nombre:"leo",
        edad:19
    }

    console.log("he recibido una solicitud get desde react");
    res.send(JSON.stringify(obj));
})

app.listen(port, ()=>{
    console.log("servidor iniciado");
})