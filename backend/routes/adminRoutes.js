const express = require('express');
const router = express.Router();
const { actualizarAdmin } = require('../controllers/adminController');

router.put('/actualizar-venta', actualizarAdmin);

module.exports = router;
