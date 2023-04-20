const guardarTestimonial = (req, res) => {
    // Validar 
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if (nombre.trim() === '') {
        console.log('El nombr esta vacio')
    }

    if (correo.trim() === '') {
        console.log('El nombr esta vacio')
    }
    
    if (mensaje.trim() === '') {
        console.log('El nombr esta vacio')
    }

}

export{
    guardarTestimonial
}