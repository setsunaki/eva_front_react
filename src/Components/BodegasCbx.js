import React, { useState, useEffect } from 'react';
import { Global } from '../helpers/Global'
import { Peticion } from '../helpers/Peticion'

const BodegasCbx = ({ onSelect }) => {
    const [bodegas, setBodegas] = useState([]);
  
    useEffect(() => {
      conseguirBodegas();
    }, []);

    const conseguirBodegas = async() =>{
      const {datos} = await Peticion(Global.url+"bodegas");
      
      if(datos.status === "success"){
        setBodegas(datos.Bodegas);
      }else{
        setBodegas([]);
      }
    }

    console.log(bodegas);
  
    return (
      <select onChange={(e) => onSelect('bodega', e.target.value)}>
        <option value="">Seleccione una bodega</option>
        {bodegas.map((bodega) => (
          <option key={bodega.id} value={bodega.id}>
            {bodega.nombre}
          </option>
        ))}
      </select>
    );
  };
  
export default BodegasCbx;