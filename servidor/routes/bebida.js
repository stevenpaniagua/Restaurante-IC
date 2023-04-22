//ruta para bebidas
const express = require('express')
const router = express.Router();
const bebidaController = require('../controllers/bebidaController')
//api bebidas
router.post('/', bebidaController.crearBebida);
router.get('/', bebidaController.obtenerBebidas);
router.put('/:id', bebidaController.actualizarBebida);
router.get('/:id', bebidaController.obtenerBebida);
router.delete('/:id', bebidaController.eliminarBebida);

module.exports = router;