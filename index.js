/** Declaraciones e instancias */

const express = require('express');
var cors = require('cors');
var router = express.Router();
const app = express();
require('dotenv').config();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

/** fin Declaraciones e instancias */

const port = process.env.Puerto;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** conexion DB Mongoose  */

mongoose.connect(process.env.DB_SERVICE , {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log('Conectado a la DB')


});

/** FIN conexion DB Mongoose  */

/**Rutas Servicios */


const usuario = require ('./funcionalidad/rutas/usuario');
router.use('/usuario',usuario)

const egreso = require ('./funcionalidad/rutas/Egreso');
router.use('/egreso',egreso)

router.get('/', (req, res) => {
  res.send('')
}) 

/** Fin Rutas Servicios */

//prefijo

app.use('/backend_final', router)

app.listen(port, () => {
  console.log(`El servidor corre en http://localhost:${port}`)
})
