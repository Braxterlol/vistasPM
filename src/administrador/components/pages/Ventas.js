import React from 'react';
import InfoVentas from '../organismos/Info_ventas';

const Data = {
  InfoVentas: [
    {
      nmProducto: "Nombre del producto",
      unidades: "Unidades Vendidas",
      precio: "Precio por unidad",
      total: "Total",
    },
    {
      productoInfo: "Taco de lengua",
      unidadesInfo: "5",
      precioInfo: "12",
      totalfinal:"60"
    },
    {
      productoInfo: "coca cola",
      unidadesInfo: "2",
      precioInfo: "25",
      totalfinal:"50"
    },
    {
      totalfinal:"300"
    },
  ],
};

function Ventas() {
  return (
    <div>
      {Data.InfoVentas.map((datos, index) => (
        <InfoVentas key={index} datos={datos} />
      ))}
    </div>
  );
}

export default Ventas;
