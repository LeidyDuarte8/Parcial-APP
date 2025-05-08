const express = require('express');
const router = express.Router();
const { nuevaVenta } = require('../controllers/ventaController');

router.post('/nueva', nuevaVenta);

module.exports = router;
