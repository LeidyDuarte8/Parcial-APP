const Venta = require('../models/Venta');

exports.actualizarAdmin = async (req, res) => {
  try {
    const { id, estado } = req.body;
    const venta = await Venta.findByIdAndUpdate(id, { estado }, { new: true });
    res.json(venta);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
