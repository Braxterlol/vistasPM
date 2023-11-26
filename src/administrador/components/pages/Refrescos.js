import React, { useState } from 'react';
import Coca_cola from '../../img/coca-cola.jpeg';
import Card from '../moleculas/Cards';
import Icon_agregar from '../../img/icono_agregar.png';
import '../../css/App.css';
import '../../css/Cards.css';
import Swal from 'sweetalert2';

const Datos = {
  Cards: [
    {
      id: 1,
      estatus: "Disponible",
      imagenSrc: Coca_cola,
      imagenWidth: "210",
      imagenHeight: "200",
      color1: "titulo_blanco",
      className: "card-btn1",
      Tex_btn: "Editar",
      Tex_btn1: "Eliminar",
      Eliminar_btn: "card-btn",
      titulo: "coca-cola",
      clase:"img1",
    },
    {
      id: 2,
      estatus: "Disponible",
      imagenSrc: Coca_cola,
      imagenWidth: "210",
      imagenHeight: "200",
      color1: "titulo_blanco",
      className: "card-btn1",
      Tex_btn: "Editar",
      Tex_btn1: "Eliminar",
      Eliminar_btn: "card-btn",
      titulo: "Sprite",
      clase:"img1",
    },
    {
      id: 3,
      estatus: "Disponible",
      imagenSrc: Coca_cola,
      imagenWidth: "210",
      imagenHeight: "200",
      color1: "titulo_blanco",
      className: "card-btn1",
      Tex_btn: "Editar",
      Tex_btn1: "Eliminar",
      Eliminar_btn: "card-btn",
      titulo: "Pepsi cola",
      clase:"img1",
    },
    
  ],
};

function Refrescos() {
  const [cards, setCards] = useState(Datos.Cards);

  const handleDeleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  }

  const handleDete = (id) => {
    Swal.fire({
      title: '¿Eliminar tarjeta?',
      text: '¿Estás seguro de que deseas eliminar esta tarjeta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteCard(id);
      }
    });
  };

  return (
    <section className="product-card-container">
      {cards.map((card, index) => (
        <Card key={card.id} {...card} onDelete={() => handleDete(card.id)} />
      ))}
    </section>
  );
}

export default Refrescos;
