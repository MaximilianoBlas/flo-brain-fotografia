import React from 'react';
import navbar from "../styles/_navbar.module.scss";


export default function Navbar() {
  return (
      <div className={navbar.navbarMainContainer}>
          <div className={navbar.navbarContainer}>Inicio</div>
          <div className={navbar.navbarContainer}>Servicios</div>
          <div className={navbar.navbarContainer}>Portafolio</div>
          <div className={navbar.navbarContainer}>¿ Quienes Somos?</div>
          <div className={navbar.navbarContainer}>Contacto</div>
      </div>
  );
}
