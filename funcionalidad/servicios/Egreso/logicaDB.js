const Egreso = require('./Egreso.model');

/** crear egresos */
const  crearEgresoDB = async (egreso) => {
        let respuesta = await Egreso.create(egreso);
        return respuesta; 

}
/** FIN crear egresos */

/** obterner egresos */

const obtenerEgresoDB = async (id_usuario) => { 
        let respuesta = await Egreso.find(id_usuario);
        return respuesta;
}

/** FIN obterner egresos */



module.exports = {  
    
    crearEgresoDB,
    obtenerEgresoDB,
    
   
} 