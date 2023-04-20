const guardarTestimonial = (req, res) => {
    // Validar 
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if (nombre.trim() === '') {
        errores.push({mensaje: 'El nombre esta vacio'})
    }

    if (correo.trim() === '') {
        errores.push({mensaje: 'El correo esta vacio'})
    }
    
    if (mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje esta vacio'})
    }

}

export{
    guardarTestimonial
}