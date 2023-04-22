//ruta para comidas
const express = require('express')
const router = express.Router();
const comidaController = require('../controllers/comidaController')
//api comidas
router.post('/', comidaController.crearComida);
router.get('/', comidaController.obtenerComidas);
router.put('/:id', comidaController.actualizarComida);
router.get('/:id', comidaController.obtenerComida);
router.delete('/:id', comidaController.eliminarComida);

module.exports = router;