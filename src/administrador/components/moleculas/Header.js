import React from 'react';
import Imagen from '../atoms/Imagen';
import Titulo from '../atoms/Titulo';
import Button from '../atoms/Boton';
import '../../css/Cards.css';
import { Link } from 'react-router-dom'; 

export default function Cards(props) {
  return (
    <div>
         <Imagen className='' logosrc={props.imagenSrc} logoWidth={props.imagenWidth} logoHeight={props.imagenHeight} />
         <Titulo className='product-brand' titulo={props.titulo} />
         <Link to="/Informacion">
      <Button className='card-btn' text="Ver más" onClick={() => console.log("Botón clickeado")} /> </Link>

    </div>

  );
}
