import express from "express";

const router = express.Router();

router.get('/', (req, res) =>{
    res.render('inicio', {
        pagina: 'Inicio'
    });
});

router.get('/nosotros', (req, res) =>{
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
});

router.get('/viajes', (req, res) =>{
    res.render('nosotros',{
        pagina: 'Viajes'
    });
});

router.get('/Testimoniales', (req, res) =>{
    res.render('nosotros',{
        pagina: 'Testimoniales'
    });
});


export default router;