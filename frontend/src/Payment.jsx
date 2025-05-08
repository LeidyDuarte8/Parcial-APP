// src/Payment.jsx
import React, { useState, useEffect } from 'react';
import api from './api';

function Payment({ saleId, product, value }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [ccv, setCcv] = useState('');

  const handlePayment = async () => {
    try {
      const res = await api.put('/sales/sale', {
        id: saleId,
        status: (
          cardNumber === '9946 6854 2114 4000' &&
          expiryDate === '06/2028' &&
          ccv === '986'
        ) ? 'Accepted' : 'Declined'
      });
      console.log('Respuesta de pago:', res.data);
      // aquí podrías mostrar mensaje al usuario
    } catch (err) {
      console.error('Error en pago:', err.response?.data || err.message);
    }
  };

  return (
    <div>
      <h3>Pago de {product} (${value})</h3>
      {/* inputs para cardNumber, expiryDate, ccv */}
      <button onClick={handlePayment}>Confirmar Pago</button>
    </div>
  );
}

export default Payment;
