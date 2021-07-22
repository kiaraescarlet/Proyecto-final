const logicaDB = require('./logicaDB');

/** crear egresos */
const crearUsuario = async (req,res) => {
 
    let usuario  = req.body;

    try{
        let respuesta = await  logicaDB.crearUsuarioDB(usuario);
        res.status(200).json({
            'usuario' : respuesta 

        });
    } catch (error) {
    res.status(500).json({
        error

    });
    } 
}
/** FIN crear egresos */

/** obterner usuario */

const obtenerUsuario = async (req,res) => {
    try {
        let respuesta = await logicaDB.obtenerUsuarioDB();
        res.status(200).json({
            'usuario' : respuesta
        });
    } catch (Error) {
        res.status(500).json({
            Error
    
        });


    }
}

/** FIN obterner usuario */
module.exports = {
    crearUsuario,
    obtenerUsuario,
}




