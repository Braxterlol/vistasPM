// App.js

import React from 'react';
import InfoPedidos from '../organismos/Info_pedidos'; // Asegúrate de que la ruta sea correcta

import Titulo from '../atoms/Titulo';

const Data = {
    InfoPedidos: [
      {
        titulo: "Pedidos entrantes", // titulo de la tabla
       

        titulo6: "5",
        titulo7: "Tacos de asada",
       
        titulo9: "Preparando",
        text:"Listo",
        text1:"Cancelar",
       
       clase:"product-thumb",
       clase_btn:"card-btn",
       clase_btn1:"card-verd",
        
      },
     
    ],
  };
  

function Pedidos() {
  return (
    
      <InfoPedidos datos={Data.InfoPedidos} ></InfoPedidos>
    
  );
}

export default Pedidos;
