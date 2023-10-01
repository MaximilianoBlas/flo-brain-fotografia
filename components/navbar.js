import Image from "next/image";
import React from "react";
// import Link from "next/link";
import { container, logoContainer, logoQuote, navBar, navbarButton, navbarLineDiv } from "../styles/_navbar.module.scss";
import logoPng from "../public/LOGO-SIN-FONDO-BORDERLESS.png";
// import { motion } from "framer-motion";

export default function Navbar({ windowWidth }) {
  const scrollToY = (e) => {
    //console.log("im scrollin'");
    if (windowWidth && windowWidth < 850) {
      e.target.id === "about"
        ? window.scrollTo({ top: 655, behavior: "smooth" })
        : e.target.id === "services"
        ? window.scrollTo({ top: 1055, behavior: "smooth" })
        : e.target.id === "gallery"
        ? window.scrollTo({ top: 1495, behavior: "smooth" })
        : e.target.id === "contact"
        ? window.scrollTo({ top: 2855, behavior: "smooth" })
        : console.log("scrollToY is failing");
    } else {
      console.log("U r pressing desktop navBar!");
      e.target.id === "about"
        ? window.scrollTo({ top: 852, behavior: "smooth" })
        : e.target.id === "services"
        ? window.scrollTo({ top: 1285, behavior: "smooth" })
        : e.target.id === "gallery"
        ? window.scrollTo({ top: 2016, behavior: "smooth" })
        : e.target.id === "contact"
        ? window.scrollTo({ top: 2847, behavior: "smooth" })
        : null;
    }
  };

  return (
    <div className={container}>
      {/* <motion. */}
      <div
        className={logoContainer}
        // initial={{ x: 300, opacity: 0 }}
        // animate={{
        //   x: 0,
        //   opacity: 1,
        // }}
        // transition={{ duration: 1, delay: 1 }}
      >
        <Image src={logoPng} fill={true} style={{ objectFit: "contain" }} priority alt="Flo Barin Fotografía Logo" />
        {/* </motion. */}
      </div>
      <span className={logoQuote}>{`"Congelando recuerdos para toda la vida"`}</span>
      <div className={navBar}>
        <button id="about" className={navbarButton} onClick={scrollToY}>
          Sobre nosotras
        </button>
        <div className={navbarLineDiv}></div>
        <button id="services" className={navbarButton} onClick={scrollToY}>
          Servicios
        </button>
        <div className={navbarLineDiv}></div>
        <button id="gallery" className={navbarButton} onClick={scrollToY}>
          Galería
        </button>
        <div className={navbarLineDiv}></div>
        <button id="contact" className={navbarButton} onClick={scrollToY}>
          Contacto
        </button>
      </div>
    </div>
  );
}
