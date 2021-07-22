const logicaDB = require('./logicaDB');

/** crear egresos */
const crearEgreso = async (req,res) => {
 
let egreso = req.body;

try{
    let respuesta = await  logicaDB.crearEgresoDB(egreso);
    res.status(200).json({ 
        'egreso' : respuesta 

    });
} catch (error) {
 res.status(500).json({
     error

 });
}
}

/** FIN crear egresos */


/** obterner egresos */
const obtenerEgreso = async (req,res) => {
    try {
        let respuesta = await logicaDB.obtenerEgresoDB();
        res.status(200).json({
            'egreso' : respuesta
        });
    } catch (error) {
        res.status(500).json({
            error
    
        });
    }
} 
 /** FIN obterner egresos */

/** obtener egresos por ususario */

const obtenerEgresoUsuario = async (req,res) => {
       try {
        let respuesta = await logicaDB.obtenerEgresoDB();
        res.status(200).json({
            'egresos_usuario' : respuesta
        });
    } catch ( ERROR ) {
        res.status(500).json({
          ERROR
    
        });
    }
} 
/** fin obtener egresos por ususario*/

module.exports = {
    crearEgreso,
    obtenerEgreso,
    obtenerEgresoUsuario, 
}




