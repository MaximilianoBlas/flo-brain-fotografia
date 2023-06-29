import Image from "next/image";
import React from "react";
import { container, logoContainer, logoQuote, navBar, navbarButton, navbarLineDiv } from "../styles/_navbar.module.scss";
import logoPng from "../public/LOGO-SIN-FONDO-BORDERLESS.png";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
      <div className={container}>
          <motion.div
              className={logoContainer}
              initial={{ x: 300, opacity: 0 }}
              animate={{
                  x: 0,
                  opacity: 1,
              }}
              transition={{ duration: 1, delay: 1 }}
          >
              <Image
                  src={logoPng}
                  fill={true}
                  alt="Flo Barin Fotografía Logo"
              />
          </motion.div>
          <span className={logoQuote}>
              "Congelando recuerdos para toda la vida"
          </span>
          <div className={navBar}>
              <button className={navbarButton}>Quiénes somos</button>
              <div className={navbarLineDiv}></div>
              <button className={navbarButton}>Servicios</button>
              <div className={navbarLineDiv}></div>
              <button className={navbarButton}>Galería</button>
              <div className={navbarLineDiv}></div>
              <button className={navbarButton}>Contacto</button>
          </div>
      </div>
  );
}
