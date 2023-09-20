import React from 'react';
import '../Hojas-De-Estilo/Boton-Clear.css'
import Boton from './Boton';

const BotonClear = (props) => (
    <button className='clear' onClick={() => props.click('') }>
        {props.children}
    </button>
);

export default BotonClear