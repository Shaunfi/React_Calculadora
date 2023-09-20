import './App.css';
import Logo from './Componentes/Logo.js'
import Boton from './Componentes/Boton.js';
import Pantalla from './Componentes/Pantalla.js';
import BotonClear from './Componentes/Boton-Clear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcular = () => {
    if (input) {
      setInput(evaluate(input));
    }else {
      alert('Ingrese valores para realizar calculos.')
    };
  };

  return (
    <div className="App">
      <Logo />
      <div className='contenedor'>
        <Pantalla input={input} />

        <div className='fila'>
          <Boton click={ agregarInput }>7</Boton>
          <Boton click={ agregarInput }>8</Boton>
          <Boton click={ agregarInput }>9</Boton>
          <Boton click={ agregarInput }>*</Boton>
        </div>
        <div className='fila'>
          <Boton click={ agregarInput }>4</Boton>
          <Boton click={ agregarInput }>5</Boton>
          <Boton click={ agregarInput }>6</Boton>
          <Boton click={ agregarInput }>-</Boton>
        </div>
        <div className='fila'>
          <Boton click={ agregarInput }>1</Boton>
          <Boton click={ agregarInput }>2</Boton>
          <Boton click={ agregarInput }>3</Boton>
          <Boton click={ agregarInput }>+</Boton>
        </div>
        <div className='fila'>
          <Boton click={ calcular }>=</Boton>
          <Boton click={ agregarInput }>0</Boton>
          <Boton click={ agregarInput }>.</Boton>
          <Boton click={ agregarInput }>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear click={() => setInput('') }>
            C
          </BotonClear>
        </div>
      </div>
    </div>
  );
};

export default App;