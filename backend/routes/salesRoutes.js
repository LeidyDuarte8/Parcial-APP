const express = require('express');
const Sale = require('../models/Sale');

const router = express.Router();

// Crear una venta
router.post('/', async (req, res) => {
  try {
    const sale = new Sale(req.body);
    await sale.save();
    res.status(201).json({ message: 'Venta registrada correctamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al registrar la venta', error: err.message });
  }
});

// Obtener todas las ventas
router.get('/', async (req, res) => {
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener las ventas', error: err.message });
  }
});

module.exports = router;
