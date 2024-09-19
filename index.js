import express from "express";
import cors from "cors"

const app = express();
const port = process.env.PORT || 3000;

app.use(cors(
    {
        origin: "https://rifa-pro-fondos-git-main-leonidasgarcias-projects.vercel.app/"
    }
))

app.get("/api/", (req, res)=>{

    console.log("he recibido una solicitud get desde react");
    res.send("Alberto traga pene");
})

app.listen(port, ()=>{
    console.log("servidor iniciado");
})