import React, { useState } from "react";
import Swal from "sweetalert2";
import "../../css/projectcard.css";

function ProjectCardRe({ name, description, img, alt, title, precio, onAccept }) {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleAccept = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: `Deseas aceptar ${counter} unidades de ${name} por un total de $${counter * precio}?`, // Muestra el total basado en el precio y la cantidad
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, aceptar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#007bff",
      cancelButtonColor: "#dc3545",
      showClass: {
        popup: "animate__animated animate__fadeIn",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        onAccept(counter); // Pasar solo el contador (quantity) como argumento
        Swal.fire({
          title: "¡Aceptado!",
          icon: "success",
          showClass: {
            popup: "animate__animated animate__bounceIn",
          },
        });
        console.log(`Se aceptaron ${counter} unidades de ${name} por un total de $${counter * precio}`);
      }
    });
  };
  
  return (
    <div className="card">
      <div className="card-img-container-re">
        <img className="card-img" loading="lazy" src={img} alt={alt} title={title} />
      </div>
      <div className="card-text-re">
        <h2 className="card-titulo">{name}</h2>
        <p>{description}</p>
        <p>Precio: ${precio}</p> {/* Muestra el precio */}
        <div className="card-buttons">
          <button onClick={handleDecrement}>-</button>
          <span>{counter}</span>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleAccept}>Aceptar</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardRe;
