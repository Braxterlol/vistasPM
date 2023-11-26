import React, { useState, useEffect } from "react";
import Axios from "axios";
import ProjectCardRe from "../components/organisms/projectcardRe";
import Refresco1 from "../assets/coca lata.jpg";
import "../css/styles.css";

function Refrescos({ txtIdioma, carrito, setCarrito }) {
  const [refrescosB, setRefrescosB] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/productos/tipo/b")
      .then((response) => {
        setRefrescosB(response.data.data); // Asumiendo que los datos están en una propiedad 'data'
      })
      .catch((error) => {
        console.error("Error al obtener los refrescos tipo B:", error);
      });
  }, []);

  const handleAccept = (refrescoId, refrescoName, refrescoImg, refrescoAlt, quantity, price) => {
    const existingDrink = carrito && carrito.find((drink) => drink.id === refrescoId);

    if (existingDrink) {
      const updatedCarrito = carrito.map((drink) =>
        drink.id === refrescoId ? { ...drink, quantity: drink.quantity + quantity } : drink
      );
      setCarrito(updatedCarrito);
    } else {
      const newDrink = {
        id: refrescoId,
        name: refrescoName,
        quantity,
        img: refrescoImg,
        alt: refrescoAlt,
        price,
      };
      setCarrito((prevCarrito) => [...prevCarrito, newDrink]);
    }
  };

  return (
    <section id="refrescos">
      <div className="cards">
        {refrescosB.map((refresco) => (
          <ProjectCardRe
            key={refresco.ProductoID}
            name={refresco.nombre}
            description={refresco.descripcion}
            img={Refresco1}
            alt={refresco.alt}
            title={refresco.title}
            precio={refresco.precio}
            onAccept={(quantity) =>
              handleAccept(
                `refresco_${refresco.ProductoID}`,
                refresco.nombre,
                Refresco1,
                refresco.alt,
                quantity,
                refresco.precio
              )
            }
          />
        ))}
      </div>
    </section>
  );
}

export default Refrescos;
