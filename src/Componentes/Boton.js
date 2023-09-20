import React from 'react';
import '../Hojas-De-Estilo/Boton.css'

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  };

  if (esOperador(props.children)){
    return (
      <button className={ `boton operador`} onClick={() => props.click(props.children)}>
        { props.children }
      </button>
    );
  }else {
    return(
      <button className={ `boton`} onClick={() => props.click(props.children)}>
        { props.children }
      </button>
    )
  }
};

export default Boton