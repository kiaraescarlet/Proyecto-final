const express = require ('express');
const router = express.Router();
const controlador = require('../servicios/Egreso/controlador');

router.post('/crear-egreso' , controlador.crearEgreso);

router.get('/obtener-egresos', controlador.obtenerEgreso);

router.get('/obtener-egresos-usuario/:id_usuario', controlador.obtenerEgresoUsuario);

module.exports = router

