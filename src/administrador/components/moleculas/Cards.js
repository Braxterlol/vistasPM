import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Imagen from '../atoms/Imagen';
import Titulo from '../atoms/Titulo';
import Button from '../atoms/Boton';
import axios from 'axios';

export default function Cards(props) {
  const [newEstatus, setNewEstatus] = useState(props.estatus);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setNewEstatus(props.estatus);
  }, [props.estatus]);

  const handleEditCardStatus = async (id, newEstatus) => {
    try {
      // Mapeamos el estatus legible a los valores de la base de datos
      const databaseValue = newEstatus === 'Disponible' ? 1 : 2;

      // Realiza la solicitud PUT al backend para actualizar el estado del taco
      const response = await axios.put(`http://localhost:4000/productos/${id}`, { estatus: databaseValue });
      console.log('Estado actualizado correctamente:', response.data);

      // Actualiza el estado local después de una actualización exitosa en el servidor
      const updatedCards = cards.map((card) => {
        if (card.ProductoID === id) {
          return { ...card, estatus: newEstatus }; // Actualizamos con el estatus legible
        }
        return card;
      });
      setCards(updatedCards);
    } catch (error) {
      console.error('Error al actualizar el estado del taco:', error);
    }
  };

  const handleEditClick = () => {
    const swalPromise = Swal.fire({
      title: 'Edita el estatus',
      html: `
        <select id="estatus" class="swal2-select">
          <option value="disponible" ${newEstatus === 'Disponible' ? 'selected' : ''}>Disponible</option>
          <option value="agotado" ${newEstatus === 'Agotado' ? 'selected' : ''}>Agotado</option>
        </select>
      `,
      showCancelButton: true,
      confirmButtonText: 'Guardar Cambios',
      cancelButtonText: 'Cancelar',
    });

    swalPromise.then((result) => {
      if (result.isConfirmed) {
        const estatus = document.getElementById('estatus').value;

        if (newEstatus !== estatus) {
          setNewEstatus(estatus);
          handleEditCardStatus(props.ProductoID, estatus);
          Swal.fire('Cambios guardados', '', 'success');
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Edición cancelada', '', 'info');
      }
    });
  };

  return (
    <div className='product-card'>
      <div className='product-image'>
        <Titulo className={props.color1} titulo={newEstatus} />
        <Imagen className={props.clase} logosrc={props.imagenSrc} logoWidth={props.imagenWidth} logoHeight={props.imagenHeight} />
      </div>
      <div className='product-info'>
        <Titulo titulo={props.titulo} />
      </div>
      <div>
        <Button className={props.className} text={props.Tex_btn} onClick={handleEditClick} />
      </div>
    </div>
  );
}
