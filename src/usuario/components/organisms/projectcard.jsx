import React, { useState } from "react";
import Swal from "sweetalert2";
import "../../css/projectcard.css";

function ProjectCardRe({ name, description, img, alt, title, onAccept, price }) {
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
      text: `Deseas aceptar ${counter} unidades de ${name}?`,
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
        Swal.fire({
          title: "¡Aceptado!",
          icon: "success",
          showClass: {
            popup: "animate__animated animate__bounceIn",
          },
        });
        onAccept(counter);
        console.log(`Se aceptaron ${counter} unidades de ${name}`);
      }
    });
  };

  return (
    <div className="card">
      <div className="card-img-container">
        <img className="card-img1" loading="lazy" src={img} alt={alt} title={title} />
      </div>
      <div className="card-text-re">
        <h2 className="card-titulo">{name}</h2>
        <p>{description}</p>
        <p>Precio: ${price}</p> {/* Mostramos el precio aquí */}
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
