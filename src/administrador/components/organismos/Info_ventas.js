import React from 'react';
import Titulo from '../atoms/Titulo';
import '../../css/tabla.css';

export default function InfoPedidos(props) {
  console.log(props);
  return (
    <div className="table-container">
      <div className="tabla">
        <div className="encabezado fila">
          <div className="celda">
            <Titulo titulo={props.datos.nmProducto} />
          </div>
          <div className="celda">
            <Titulo titulo={props.datos.unidades} />
          </div>
          <div className="celda">
            <Titulo titulo={props.datos.precio} />
          </div>
          <div className="celda">
            <Titulo titulo={props.datos.total} />
          </div>
        </div>

        <div className="contenido fila">
          <div className="celda">
            <Titulo titulo={props.datos.productoInfo} />
          </div>
          <div className="celda">
            <Titulo titulo={props.datos.unidadesInfo} />
          </div>
          <div className="celda">
            <Titulo titulo={props.datos.precioInfo} />
          </div>
          <div className="celda">
            <Titulo titulo={props.datos.totalfinal} />
          </div>
        </div>
      </div>
    </div>
  );
}
