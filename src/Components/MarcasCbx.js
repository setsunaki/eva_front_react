import React, { useState, useEffect } from 'react';
import { Global } from '../helpers/Global'
import { Peticion } from '../helpers/Peticion'

const MarcasCbx = ({ onSelect }) => {
    const [marcas, setMarcas] = useState([]);
  
    useEffect(() => {
        conseguirMarcas();
    }, []);

    const conseguirMarcas = async() =>{
      const {datos} = await Peticion(Global.url+"marcas");
    
      if(datos.status === "success"){
        setMarcas(datos.Marcas);
      }else{
        setMarcas([]);
      }
    }

    return (
      <select onChange={(e) => onSelect('marca', e.target.value)}>
        <option value="">Seleccione una marca</option>
        {marcas.map((marca) => (
          <option key={marca.id} value={marca.id}>
            {marca.nombre}
          </option>
        ))}
      </select>
    );
  };
  
export default MarcasCbx;