// src/Compras.jsx
import React, { useState } from 'react';
import api from './api';

function Compras() {
  const [product, setProduct] = useState('');
  const [value, setValue] = useState('');

  const handlePurchase = async () => {
    try {
      // creas la venta en “Pending”
      const res = await api.post('/sales/sale', { product, value, cardDetails: {} });
      console.log('Venta creada:', res.data);
      // aquí podrías navegar a la vista de pago y pasar estos datos
    } catch (err) {
      console.error('Error al crear venta:', err.response?.data || err.message);
    }
  };

  return (
    <>
      {/* campos para product y value */}
      <button onClick={handlePurchase}>Pagar</button>
    </>
  );
}

export default Compras;
