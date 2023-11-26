import React, { useState, useEffect } from "react";
import Axios from "axios";
import ProjectCard from "../components/organisms/projectcard";
import Taco1 from "../assets/tacotodos.jpg";
import Taco2 from "../assets/cabeza.jpg";
import Taco3 from "../assets/vapor.webp";

import "../css/styles.css";

function Tacos({ txtIdioma, carrito, setCarrito }) {
  const [tacos, setTacos] = useState([]);

  useEffect(() => {

    Axios.get("http://localhost:4000/productos/tipo/a")
      .then((response) => {
        console.log(response.data);
        setTacos(response.data.data); // Asumiendo que los datos están en una propiedad 'data'
      })
      .catch((error) => {
        console.error("Error al obtener los tacos:", error);
      });
  }, []);

  const handleAccept = (tacoId, tacoName, tacoImg, quantity, price) => {
    const existingTaco = carrito.find((taco) => taco.id === `taco_${tacoId}`);
  
    if (existingTaco) {
      const updatedCarrito = carrito.map((taco) =>
        taco.id === `taco_${tacoId}` ? { ...taco, quantity: taco.quantity + quantity } : taco
      );
      setCarrito(updatedCarrito);
    } else {
      setCarrito([
        ...carrito,
        {
          id: `taco_${tacoId}`,
          name: tacoName,
          quantity,
          img: Taco1,
          price,
        },
      ]);
    }
  };

  return (
    <section id="tacos">
      <div className="cards">
        {tacos.map((taco) => (
          <ProjectCard
            key={taco.ProductoID}
            name={taco.nombre}
            description={taco.descripcion}
            img={Taco1} 
            price={taco.precio}
            onAccept={(quantity) => handleAccept(taco.ProductoID, taco.nombre, Taco1, quantity, taco.precio)}
          />
        ))}
      </div>
    </section>
  );
}

export default Tacos;
