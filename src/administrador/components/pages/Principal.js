import React, { useState, useEffect } from 'react';
import Taco from '../../img/logo.png';
import Card from '../moleculas/Cards';
import '../../css/App.css';
import '../../css/Cards.css';
import axios from 'axios';

function Principal() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/productos/tipo/a');
        setCards(response.data.data);
      } catch (error) {
        console.error('Error al obtener los tacos:', error);
      }
    };

    fetchData();
  }, []); 

  const handleEditCardStatus = async (id, newEstatus) => {
    try {
      console.log('ID del Producto que se pasa a onEditStatus:', id);
      console.log('Nuevo estado:', newEstatus);

      if (newEstatus === undefined) {
        console.error('El nuevo estado es indefinido. No se realizará la solicitud PUT.');
        return;
      }
      const response = await axios.put(`http://localhost:4000/productos/${id}`, { estatus: newEstatus });
      console.log('Respuesta del servidor:', response);

      setCards(prevCards => prevCards.map(card => (card.ProductoID === id ? { ...card, estatus: newEstatus } : card)));
    } catch (error) {
      console.error('Error al actualizar el estado del taco:', error);
      console.error('Respuesta del servidor (error):', error.response);
    }
  };

  return (
    <section className='product-card-container'>
      {cards.map((card) => (
        <Card
          key={card.ProductoID}
          estatus={card.estatus}
          imagenSrc={Taco} 
          imagenWidth={210} 
          imagenHeight={200} 
          color1={"titulo_blanco"}
          className={"card-btn1"}
          Tex_btn={"Editar"}
          Eliminar_btn={card.Eliminar_btn}
          titulo={card.nombre}
          clase={card.clase}
          onEditStatus={(newEstatus) => handleEditCardStatus(card.ProductoID, newEstatus)}
        />
      ))}
    </section>
  );
}

export default Principal;
