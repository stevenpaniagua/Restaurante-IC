//ruta para bebidas
const express = require('express')
const router = express.Router();
const facturaController = require('../controllers/facturaController')
//api bebidas
router.post('/', facturaController.crearFactura);
router.get('/', facturaController.obtenerFacturas);
router.put('/:id', facturaController.actualizarFactura);
router.get('/:id', facturaController.obtenerFactura);
router.delete('/:id', facturaController.eliminarFactura);

module.exports = router;