import React from 'react';
import Titulo from '../atoms/Titulo';
import '../../css/Pedidos.css';


import Button from '../atoms/Boton';

export default function InfoPedidos(props) {

  return (
    <div className='central'>
        <Titulo titulo={"Pedidos entrantes"} className='Titulo1'/>
    
    <div className='contenedor_principal'>
      
  <div className='contenedor_secun'>
    
    <Titulo titulo={"nombre del producto"} className='Titulo' /> 
    <Titulo titulo={"cantidad"} className='Titulo' /> 
    <Titulo titulo={"estatus"} className='Titulo' />
    <Titulo titulo={"Accion"} className='Titulo' /> 
  </div>
  <div className='header'>
  <Titulo titulo={props.datos[0].titulo5} className='Titulo' />
  <Titulo titulo={props.datos[0].titulo7} className='Titulo' />
  
  <Titulo titulo={props.datos[0].titulo6} className='Titulo' />
  <Titulo titulo={props.datos[0].titulo9} className='Titulo' />
  <div>
  <Button className={props.datos[0].clase_btn1} text={props.datos[0].text} />
  <Button className={props.datos[0].clase_btn} text={props.datos[0].text1} />
  </div>
  </div>
  </div>
  
</div>

  );
}
