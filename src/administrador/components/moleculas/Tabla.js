import React from 'react';
import Titulo from '../atoms/Titulo';
import '../../css/Pedidos.css';


import Button from '../atoms/Boton';

export default function Tabla(props) {

  return (
    <div className='central'>
        <div>
        <Titulo titulo="Nombre del producto"/>
        <Titulo titulo="Unidades Vendidas"/>
        <Titulo titulo="Precio por unidad"/>
        <Titulo titulo="Total"/>
        
        </div>
       
        
    
   
  
 </div>

  );
}
