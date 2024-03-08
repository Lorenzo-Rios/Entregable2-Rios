import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({ accessToken: 'TEST-905919541089682-030219-a837a742bd14ee8f7878ba223f9d15b2-186113869'});

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Soy el server");
});

app.post("/create_preference", async (req, res)=>{
    try{
        const body = {
            items: [
                {
                    title: req.body.title,
                    unit_price: Number(req.body.price),
                    quantity: Number(req.body.quantity),
                    currency_id: "ARS",
                },
            ],
            back_urls: {
                success: "https://www.instagram.com/lolorioss_/",
                failure: "https://www.instagram.com/lolorioss_/",
                pending: "https://www.instagram.com/lolorioss_/",
            },
            auto_return: "aproved",
        };
        const preference = new Preference(client);
        const result = await preference.create({ body });
        res.json({
            id: result.id,
        });
    }catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia :("
        });
    };
});

app.listen(port, ()=>{
    console.log(`el servidor corre en el puerto ${port}`);
});