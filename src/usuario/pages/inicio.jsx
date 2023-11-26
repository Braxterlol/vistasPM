import React from "react";
import Logo from "../assets/logo.png";
import "../css/styles.css";


function Inicio({ txtIdioma }) {
  const { Subtitulo } = txtIdioma.inicio;

  return (
    <section id="inicio">
      <div className="inicio-container">
        <div className="inicio-text">
          <h1 className="inicio-titulo">
            Taqueria "TAPILULA" <span className="saludar">👋</span>
          </h1>
          <h2 className="inicio-subtitulo">{Subtitulo}</h2>
        </div>
      </div>
      <figure>
        <img className="inicio-logo" src={Logo} alt="Foto" title="Logo" />
      </figure>
    </section>
  );
}

export default Inicio;
