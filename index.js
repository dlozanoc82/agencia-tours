import express from "express";
import router from "./routes/index.js";

const app = express();

//Definir Puerto
const port = process.env.PORT || 4000;

//Habilitar Pug
app.set('view engine', 'pug');

//Agregar Router
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcinando en el puerto ${port}`)
});