import React from 'react';
import '../Hojas-De-Estilo/Logo.css'
import logo from '../Imagenes/logo.png';

const Logo = () => (
  <div className='logo-contenedor'>
    <img className='logo' src={logo} alt='Logo de Ramiro' />
  </div>
);

export default Logo