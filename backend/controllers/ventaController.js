const Venta = require('../models/Venta');

exports.nuevaVenta = async (req, res) => {
  try {
    const {
      valor, producto, nombre, cedula, telefono,
      tarjetaNumero, tarjetaVencimiento, tarjetaCCV
    } = req.body;

    let estado = 'Declinado';
    if (tarjetaNumero === '9946685421144000' &&
        tarjetaVencimiento === '06/2028' &&
        tarjetaCCV === '986') {
      estado = 'Aceptado';
    }

    const nuevaVenta = new Venta({
      valor, producto, nombre, cedula, telefono,
      tarjetaNumero, tarjetaVencimiento, tarjetaCCV, estado
    });

    await nuevaVenta.save();
    res.status(201).json(nuevaVenta);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
