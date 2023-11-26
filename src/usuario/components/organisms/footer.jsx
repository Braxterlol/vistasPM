import React from 'react';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'; 
import FooterButton from '../molecules/footerboton';
import taqueriaLogo from '../../assets/inconos.png';
import '../../css/styles.css';

function Footer() {
  return (
    <footer>
      <p className="footer-titulo">Redes Sociales "TAQUERIA TAPILULA"</p>
      <div className="footer-buttons">
        <FooterButton
          link={"https://github.com/settings/profile"}
          titulo="Github"
          icono={FaGithub}
        />
        <FooterButton
          link={"https://www.instagram.com/emanuel_mtz.04/"}
          titulo="Instagram"
          icono={FaInstagram}
        />
        <FooterButton
          link={"https://www.facebook.com/tu_pagina_de_facebook"}
          titulo="Facebook"
          icono={FaFacebook} 
        />
      </div>
      <p className="footer-direccion">Dirección: 161 Cedro Sur, Patria Nueva, 29045 Tuxtla</p>
      <div className="footer-empresa">
      <img src={taqueriaLogo} alt="Logo de la empresa" />
        <p>TACO FÁCIL</p>
      </div>
    </footer>
  );
}

export default Footer;
