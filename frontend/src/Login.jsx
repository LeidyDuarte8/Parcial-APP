// src/Login.jsx
import React, { useState } from 'react';
import api from './api';  // <–– importas tu cliente configurado

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, password });
      console.log(res.data); 
      // aquí podrías guardar el token: localStorage.setItem('token', res.data.token)
      // y redirigir según res.data.role (user o admin)
    } catch (err) {
      console.error('Error en login:', err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* … tu formulario … */}
    </form>
  );
}

export default Login;
