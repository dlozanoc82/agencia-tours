import express from "express";

const app = express();

//Definir Puerto
const port = process.env.PORT || 4000;

//req-lo que enviamos 
//res- lo que express nos responde
app.get('/', (req, res) =>{
    res.send('Inicio');
});

app.get('/nosotros', (req, res) =>{
    res.send('Nosotros');
});

app.get('/contacto', (req, res) =>{
    res.send('Contacto');
});

app.listen(port, () => {
    console.log(`El servidor esta funcinando en el puerto ${port}`)
});