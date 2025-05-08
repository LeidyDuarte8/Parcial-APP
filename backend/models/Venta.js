const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  valor: { type: Number, required: true },
  producto: { type: String, required: true },
  nombre: { type: String, required: true },
  cedula: { type: String, required: true },
  telefono: { type: String, required: true },
  tarjetaNumero: { type: String, required: true },
  tarjetaVencimiento: { type: String, required: true },
  tarjetaCCV: { type: String, required: true },
  fechaCompra: { type: Date, default: Date.now },
  estado: { type: String, enum: ['Aceptado', 'Declinado'], default: 'Declinado' }
});

module.exports = mongoose.model('Venta', ventaSchema);
