import React, { useState } from 'react';
import BodegasCbx from './Components/BodegasCbx';
import MarcasCbx from './Components/MarcasCbx';
import ModelosCbx from './Components/ModelosCbx';
import Grilla from './Components/Grilla';

function App() {
  const [filtro, setFiltro] = useState({
    bodega: '',
    marca: '',
    modelo: '',
  });

  console.log("filtro: ", filtro);
  const handleSelect = (campo, valor) => {
    setFiltro({
      ...filtro,
      [campo]: valor,
    });
  };

  return (
    <>
      <article className='Home'>
        <h1>Lista de dispositivos</h1>
        <div className='Cbox'>
          <BodegasCbx onSelect={handleSelect} />
          <MarcasCbx onSelect={handleSelect} />
          <ModelosCbx onSelect={handleSelect} marcaId={filtro.marca} />
        </div>
        <div className='Grilla'> 
          <Grilla bodegaId={filtro.bodega} modeloId = {filtro.modelo} marcaId = {filtro.marca}/>
        </div>
      </article>
    </>
  );
}

export default App;
