import React from 'react';
import { MdOutlineContentCopy } from "react-icons/md";
import { BsPhone, BsInstagram } from "react-icons/bs";
import "../../css/styles.css";

function Modal({ modalVisible, cerrarModal, copiarUsuario, txtIdioma }) {
  const { titulo, parrafo1, parrafo2, boton } = txtIdioma.modal;
  return (
    <div className={modalVisible ? "modal modal--show" : "modal"}>
      <div className="modal-container">
        <div className="modal-content">
          <h2 className="modal-titulo">{titulo}</h2>
          <p>{parrafo1}</p>
          <p>{parrafo2}</p>
          <div className="modal-social-container">
            <div className="modal-social">
              <BsPhone className="social-icon" />
              <span className="social-links telefono">Teléfono: +1 123 456 7890</span>
              <MdOutlineContentCopy
                className="modal-copyicon"
                onClick={() => copiarUsuario("+11234567890")}
              />
            </div>
            <div className="modal-social">
              <BsInstagram className="social-icon" />
              <a
                className="social-links"
                href="https://www.instagram.com/emanuel_mtz.04/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram: Taqueria_TAPILULA
              </a>
              <MdOutlineContentCopy
                className="modal-copyicon"
                onClick={() => copiarUsuario("emanuel_mtz.04")}
              />
            </div>
          </div>
          <button className="boton-cerrar" onClick={cerrarModal}>
            {boton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
