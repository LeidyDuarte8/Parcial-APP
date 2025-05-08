const Venta = require('../models/Venta');

exports.actualizarUser = async (req, res) => {
  try {
    const ventas = await Venta.find({ nombre: req.user.nombre });
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
