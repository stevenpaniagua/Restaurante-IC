//ruta para bebidas
const express = require('express')
const router = express.Router();
const restauranteController = require('../controllers/restauranteController')
//api bebidas
router.post('/', restauranteController.crearRestaurante);
router.get('/', restauranteController.obtenerRestaurantes);
router.put('/:id', restauranteController.actualizarRestaurante);
router.get('/:id', restauranteController.obtenerRestaurante);
router.delete('/:id', restauranteController.eliminarRestaurante);

module.exports = router;