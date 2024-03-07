import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Soy el server");
});

app.listen(port, ()=>{
    console.log(`el servidor corre en el puerto ${port}`);
});