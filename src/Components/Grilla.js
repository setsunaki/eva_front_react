import React, { useState, useEffect } from 'react';
import { Global } from '../helpers/Global'
import { Peticion } from '../helpers/Peticion'

const Grilla = ({ bodegaId, modeloId, marcaId}) => {
    console.log("Grilla renderizada");
    const [dispositivos, setDispositivos] = useState([]);
  
    useEffect(() => {
        conseguirDispositivos(bodegaId, modeloId, marcaId);
    }, [bodegaId, modeloId, marcaId]);

    const conseguirDispositivos = async() =>{
      
      let endPoint = Global.url + "dispositivos";

      if (bodegaId && bodegaId !== '' ) {
        endPoint += `/${bodegaId}/bodega`;
      } else if (modeloId && modeloId !== '') {
        endPoint += `/${modeloId}/modelo`;
      } else if (marcaId && marcaId !==''){
        endPoint += `/${marcaId}/marca`;
      }

      const { datos } = await Peticion(endPoint);
      
      if(datos.status === "success"){
        setDispositivos(datos.Dispositivos);
      }else{
        setDispositivos([]);
      }
      console.log("dispositivos: ", datos);
    }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Bodega</th>
        </tr>
      </thead>
      <tbody>
        
        {dispositivos.map((dispositivo) => (
          <tr key={dispositivo.id}>
            <td>{dispositivo.id}</td>
            <td>{dispositivo.nombre}</td>
            <td>{dispositivo.modelo.marca.nombre}</td>
            <td>{dispositivo.modelo.nombre}</td>
            <td>{dispositivo.bodega.nombre}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grilla;