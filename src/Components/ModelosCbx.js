import React, { useState, useEffect } from 'react';
import { Global } from '../helpers/Global'
import { Peticion } from '../helpers/Peticion'

const ModelosCbx = ({ onSelect, marcaId }) => {
    const [modelos, setModelos] = useState([]);
    if(marcaId === ''){
        marcaId = 0;
    }
    useEffect(() => {
        conseguirModelos(marcaId);
   
    }, [marcaId]);

    const conseguirModelos = async() =>{
      const {datos} = await Peticion(Global.url+"marca/"+marcaId+"/modelo");

      if(datos.status === "success"){
        setModelos(datos.Modelo);
      }else{
        setModelos([]);
      }
    }

    return (
      <select onChange={(e) => onSelect('modelo', e.target.value)}>
        <option value="">Seleccione un modelo</option>
        {modelos.map((modelo) => (
          <option key={modelo.id} value={modelo.id}>
            {modelo.nombre}
          </option>
        ))}
      </select>
    );
  };
  
export default ModelosCbx;