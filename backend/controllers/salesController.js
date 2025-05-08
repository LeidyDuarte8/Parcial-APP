const Sale = require('../models/salesModel');

// Registrar una nueva venta
exports.nuevaVenta = async (req, res) => {
  const { value, product, cardDetails } = req.body;
  try {
    const sale = new Sale({
      value, product, cardDetails, status: 'Pending', createdAt: new Date(),
    });
    await sale.save();
    res.status(201).json({ message: 'Venta registrada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar estado de una venta
exports.actualizarVenta = async (req, res) => {
  const { id, status } = req.body;
  try {
    const sale = await Sale.findById(id);
    if (!sale) return res.status(404).json({ error: 'Venta no encontrada' });

    sale.status = status;
    await sale.save();
    res.json({ message: 'Estado de venta actualizado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
