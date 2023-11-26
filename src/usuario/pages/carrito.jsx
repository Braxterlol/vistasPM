import React, { useState } from "react";
import Swal from 'sweetalert2';
import "../css/styles.css"; 

function Carrito({ carrito, txtIdioma, setCarrito }) {
  const [editingItem, setEditingItem] = useState(null);
  const [editedQuantity, setEditedQuantity] = useState(1);

  const handleEliminar = (itemName) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCarrito = carrito.filter((item) => item.name !== itemName);
        setCarrito(updatedCarrito);
        setEditingItem(null);
        Swal.fire('¡Eliminado!', 'El elemento ha sido eliminado.', 'success');
      }
    });
  };

  const handleGuardarEdicion = (itemName) => {
    const updatedCarrito = carrito.map((item) =>
      item.name === itemName ? { ...item, quantity: editedQuantity } : item
    );
    setCarrito(updatedCarrito);
    setEditingItem(null);
  };

  const handleEditar = (itemName, currentQuantity) => {
    setEditingItem(itemName);
    setEditedQuantity(currentQuantity);
  };

  const handleAceptar = async () => {
    try {
      const total = carrito.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
      const nuevoPedido = {
        fecha: new Date(),
        estado: 'pendiente',
        detalles: carrito.map(item => ({
          ProductoID: parseInt(item.id.split('_')[1]),
          cantidad: item.quantity,
          precio_unitario: item.price,
        })),
      };
  
      const responsePedido = await fetch('http://localhost:4000/pedidos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoPedido),
      });
  
      if (!responsePedido.ok) {
        throw new Error('Error al crear el pedido');
      }
  
      const pedidoCreado = await responsePedido.json();
  
      setCarrito([]);
  
      Swal.fire({
        icon: 'success',
        title: '¡Pedido aceptado!',
        text: 'Gracias por tu compra.',
        confirmButtonText: 'Aceptar',
      });
    } catch (error) {
      console.error('Error al procesar el pedido:', error);
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Ocurrió un error al procesar el pedido.',
        confirmButtonText: 'Aceptar',
      });
    }
  };
  

  return (
    <div className="carrito-container">
      <h2 className="carrito-title">{txtIdioma.carritoTitulo}</h2>
      {carrito.length === 0 ? (
        <p className="carrito-empty">{txtIdioma.carritoVacio}</p>
      ) : (
        <ul className="carrito-list">
          {carrito.map((item) => (
            <li key={item.id} className="carrito-item">
              <div>
                <img
                  src={item.img}
                  alt={item.alt}
                  className="carrito-item-img"
                />
                <div className="carrito-item-details">
                  <span className="carrito-item-name">{item.name}</span>
                  <span className="carrito-item-quantity">Cantidad: {item.quantity}</span>
                  <span className="carrito-item-price">Precio unitario: ${item.price}</span>
                  <span className="carrito-item-total-price">Precio total: ${item.price * item.quantity}</span>
                </div>
                <div className="carrito-buttons">
                  <button onClick={() => handleEliminar(item.name)}>Eliminar</button>
                  {editingItem === item.name ? (
                    <>
                      <input
                        type="number"
                        value={editedQuantity}
                        onChange={(e) => setEditedQuantity(e.target.value)}
                        className="carrito-input"
                      />
                      <button onClick={() => handleGuardarEdicion(item.name)}>Guardar</button>
                    </>
                  ) : (
                    <button onClick={() => handleEditar(item.name, item.quantity)}>Editar</button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {carrito.length > 0 && (
        <div>
          <p className="carrito-total">Total: ${carrito.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</p>
          <button onClick={handleAceptar} className="carrito-aceptar-btn">
            Aceptar
          </button>
        </div>
      )}
    </div>
  );
}

export default Carrito;
