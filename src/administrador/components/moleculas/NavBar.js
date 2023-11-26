import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import  '../../css/App.css'
import Logo from '../atoms/Imagen';
import Titulo from '../atoms/Titulo';
import Boton from '../atoms/Boton';
import { Link } from 'react-router-dom';

function NavBar(props) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="contenedor1">
      <Logo logosrc={props.datos[0].logosrc} logoWidth={props.datos[0].logoWidth} logoHeight={props.datos[0].logoHeight} />
      <Titulo className={props.datos[0].titulo1} titulo={props.datos[0].titulo} />
      <nav ref={navRef}>
        {props.datos.slice(1).map((dato, index) => (
          <Link to={dato.redirecciones} key={index}>
            <Boton className={dato.ClassName} text={dato.text} />
          </Link>
        ))}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
export default NavBar;