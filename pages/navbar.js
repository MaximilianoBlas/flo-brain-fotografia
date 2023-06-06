import React from "react";
import navbar from "../styles/_navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={navbar.navbarMainContainer}>
      <Link href="/" className={navbar.navbarLink}>
        <div className={navbar.navbarContainer}>Inicio</div>
      </Link>
      <Link href="/servicios" className={navbar.navbarLink}>
        <div className={navbar.navbarContainer}>Servicios</div>
      </Link>
      <Link href="/portafolio" className={navbar.navbarLink}>
        <div className={navbar.navbarContainer}>Portafolio</div>
      </Link>
      <Link href="/quienesSomos" className={navbar.navbarLink}>
        <div className={navbar.navbarContainer}>¿ Quienes Somos?</div>
      </Link>
      <Link href="/contacto" className={navbar.navbarLink}>
        <div className={navbar.navbarContainer}>Contacto</div>
      </Link>
    </div>
  );
}
