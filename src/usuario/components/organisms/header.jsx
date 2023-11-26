import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";
import Modal from "../../components/organisms/modal";
import { useNavigate } from "react-router-dom"; 
import "../../css/styles.css";

function Header({
  cambiarModo,
  darkMode,
  txtIdioma,
  bodyOverflowHidden,
}) {
  const { INICIO, TACOS, REFRESCOS, Contacto } = txtIdioma.header;
  const { copiado, copiadoerror } = txtIdioma.otros;

  const [modalVisible, setModalVisible] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);
  const [mostrarIdiomas, setMostrarIdiomas] = useState(false);

  const navigate = useNavigate(); // Obtiene la función de navegación
  
  

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    bodyOverflowHidden();
  };

  const toggleCarrito = () => {
    navigate("/carrito");
    toggleMenu(); 
  };

  const copiarUsuario = (usuario) => {
    try {
      navigator.clipboard.writeText(usuario);
      console.log(copiado + usuario);
    } catch (error) {
      console.log(copiadoerror + error);
    }
  };

  const handleRefrescoClick = () => {
    navigate("/refrescos");
    toggleMenu(); 
  };

  const handleTacosClick = () => {
    navigate("/tacos"); 
    toggleMenu(); 
  };

  const handleInicioClick = () => {
    navigate("/user#inicio"); 
    toggleMenu(); 
  };

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setMenuMobile(!menuMobile);
      bodyOverflowHidden();
    }
  };

  return (
    <header>
      <h2 className="header-titulo">{"TACO FACIL"}</h2>
      <nav className={menuMobile ? "show-nav" : null}>
        <ul>
        <li>
          <a href="#inicio" onClick={handleInicioClick}>
            {INICIO}
          </a>
        </li>
          <li>
          <a href="#tacos" onClick={handleTacosClick}>
            {TACOS}
          </a>
        </li>
          <li>
            <a href="#refresco" onClick={handleRefrescoClick}>
              {REFRESCOS}
            </a>
          </li>
        </ul>
      </nav>
      <div className="botones-header">
        <button
          className={"boton-contacto " + (menuMobile ? "show-btn" : "")}
          onClick={() => {
            toggleModal();
            toggleMenu();
          }}
        >
          {Contacto}
        </button>
        <button
          className={`dark-mod-boton ${darkMode ? "dark-mode" : ""} ${
            menuMobile ? "show-btn" : ""
          }`}
          onClick={cambiarModo}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
        <div>
        <button
            className={"boton-carrito " + (menuMobile ? "show-btn" : "")}
            style={{ color: darkMode ? "white" : "black" }}
            onClick={() => toggleCarrito()}
          >
            <FaShoppingCart /> 
          </button>
        </div>
      </div>
      <div
        className={menuMobile ? "hamburguesa hamburguesa--show" : "hamburguesa"}
        onClick={toggleMenu}
      >
        <span className="linea"></span>
        <span className="linea"></span>
        <span className="linea"></span>
      </div>
      <Modal
        modalVisible={modalVisible}
        cerrarModal={toggleModal}
        copiarUsuario={copiarUsuario}
        txtIdioma={txtIdioma}
      />
    </header>
  );
}

export default Header;