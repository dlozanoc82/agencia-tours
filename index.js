import express from "express";
import router from "./routes/index.js";

const app = express();

//Definir Puerto
const port = process.env.PORT || 4000;

//Habilitar Pug
app.set('view engine', 'pug');

//Obtener año actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.nowYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Tours";
    return next();
});

//Agregar Router
app.use('/', router);

//Definir la carpeta publica
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`El servidor esta funcinando en el puerto ${port}`)
});