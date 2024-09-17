import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/miwebo", (req, res)=>{

    console.log("he recibido una solicitud get desde react");
    res.text().send("Alberto traga pene");
})

app.listen(port, ()=>{
    console.log("servidor iniciado");
})