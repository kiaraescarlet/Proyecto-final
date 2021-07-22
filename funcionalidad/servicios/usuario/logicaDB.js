const Usuario = require('./usuario.model');


/** crear usuario */
const  crearUsuarioDB = async (usuario) => {

 let respuesta = await Usuario.create(usuario);

    return respuesta; 

}

/** FIN crear usuario */

/** obterner usuario */

const obtenerUsuarioDB = async () => {
    
    let respuesta = await Usuario.find();
    return respuesta;
}
/** FIN obterner usuario */

module.exports = {  
    
    crearUsuarioDB,
    obtenerUsuarioDB,
} 