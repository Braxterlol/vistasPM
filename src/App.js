import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bebidas from './administrador/components/pages/Refrescos';
import PaginaPrincipal from './administrador/components/pages/Principal';
import Pedidos from './administrador/components/pages/Pedidos'
import Ventas from './administrador/components/pages/Ventas'
import NavBar from './administrador/components/moleculas/NavBar';
import Logo from './administrador/img/logo.png';
import Carrito from "./usuario/pages/carrito";
import './index.css'

import Login from "./login";
import Header from "./usuario/components/organisms/header";
import Inicio from "./usuario/pages/inicio";
import Tacos from "./usuario/pages/tacos";
import Refrescos from "./usuario/pages/refresco";
import Footer from "./usuario/components/organisms/footer";

import idiomas from "./informacion";
const Datos = {
  NavBar: [
    {
      logosrc: Logo,
      logoWidth: "170",
      logoHeight: "110",
      titulo1: "titulo_blanco",
      titulo: "Taco Facil",
      ClassName: "boton4",
    },
    {
      redirecciones: "/admin",
      text: "Tacos",
      ClassName: "card-btn2",
    },
    {
      redirecciones: "/Bebidas",
      text: "Refresco",
      ClassName: "card-btn2",
    },
    {
      redirecciones: "/ventas",
      text: "Ventas",
      ClassName: "card-btn2",
    },
    {
      redirecciones: "/pedidos",
      text: "Pedidos",
      ClassName: "card-btn2",
    },
  ],
};

function App() {
  const [idioma, setIdioma] = useState(() => {
    const idiomaGuardado = localStorage.getItem("Idioma");
    return idiomaGuardado || "es";
  });

  const [darkMode, setDarkMode] = useState(false);


  const [txtIdioma, setTxtIdioma] = useState(idiomas[idioma]);
  const [menuMobile, setMenuMobile] = useState(false);
  const [carrito, setCarrito] = useState([]); // Added carrito state

  const bodyOverflowHidden = () => {
    document.body.classList.toggle("overflow--hidden");
  };

  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
    localStorage.setItem("Idioma", nuevoIdioma);
    setTxtIdioma(idiomas[nuevoIdioma]);
  };

  const cambiarModo = () => {
    const modo = !darkMode;
    setDarkMode(modo);
    localStorage.setItem("ModoOscuro", modo);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuMobile(!menuMobile);
    bodyOverflowHidden();
  };
  const [userRole, setUserRole] = useState(() => {
    const role = localStorage.getItem('UserRole');
    return role || null;
  });
// Estado para almacenar el rol del usuario después del inicio de sesión

  
const handleLogin = async (role) => {
  setUserRole(role);
  localStorage.setItem('UserRole', role);
};

  return (
    <Router>
     
        {/* Dependiendo del rol del usuario, se muestra el NavBar o el Header */}
        {userRole === 'admin' ? (
          <NavBar datos={Datos.NavBar} />
          
          
        ) : userRole === 'user' ? (
          <Header
            cambiarModo={cambiarModo}
            darkMode={darkMode}
            cambiarIdioma={cambiarIdioma}
            txtIdioma={txtIdioma}
            bodyOverflowHidden={bodyOverflowHidden}
            toggleMenu={toggleMenu}
          />
        ) : null}

        <main className={`App ${darkMode ? 'dark-mode' : ''}`}>
          <Routes>
            {/* Dependiendo del rol, se muestra la página correspondiente */}
            {userRole === 'admin' ? (
              <Route path="/admin" element={<PaginaPrincipal />} />
            ) : userRole === 'user' ? (
              <Route path="/user" element={<Inicio txtIdioma={txtIdioma} />} />
            ) : (
              <Route path="/" element={<Login onLogin={handleLogin} />} />
            )}
            {/* Resto de rutas */}
            <Route path="/Bebidas" element={<Bebidas />} />
            <Route path="/Pedidos" element={<Pedidos />} />
            <Route path="/ventas" element={<Ventas />} />
            {/* ... */}
            <Route
            path="/tacos"
            element={<Tacos txtIdioma={txtIdioma} carrito={carrito} setCarrito={setCarrito} />}
          />
          <Route
            path="/refrescos"
            element={<Refrescos txtIdioma={txtIdioma} setCarrito={setCarrito} />}
          />
          <Route
            path="/carrito"
            element={<Carrito carrito={carrito} setCarrito={setCarrito} txtIdioma={txtIdioma} />}
          />
        
        
          </Routes>
        </main>
        <Footer txtIdioma={txtIdioma} />
    </Router>
  );
}
export default App;
