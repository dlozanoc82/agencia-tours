import { Viaje } from "../models/Viaje.js";


const paginaInicio = (req, res) =>{
    res.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginaNosotros =(req, res) =>{
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) =>{

    //Consultar BD
    const viajes = await Viaje.findAll();

    res.render('viajes',{
        pagina: 'Próximos Viajes',
        viajes
    });
}

const paginaTestimoniales = (req, res) =>{
    res.render('testimoniales',{
        pagina: 'Testimoniales'
    });
}

//Muestra en viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const {viaje} = req.params;
    
    try {
        const resultado = await Viaje.findOne({where: {viaje}});
        res.render('viaje', {
            pagina: 'Información del Viaje',
            resultado
        })
    } catch (error) {
        console.log(error);
    }
}

export{
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}