import Image from "next/image";
import ContactButtons from "./contactButtons";

import styles from "@/styles/_deployableDesktopNavBar.module.scss";

import logo from "../public/media/logo-footer-cropped.png";

export default function DeployableDesktopNavBar({ yAxis, windowWidth }) {
  const onDeployableNavBarClickHandler = (e) => {
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
  };
  return (
    <nav className={styles.deployableDesktopNavBarNav} style={{ opacity: yAxis >= 390 ? 1 : 0 }}>
      <ContactButtons yAxis={yAxis} windowWidth={windowWidth} />
      <div className={styles.logoContainer}>
        <Image src={logo} fill={true} style={{ objectFit: "contain" }} alt="Logo Flo Brain Fotografía" />
      </div>
      <button id="about" className={styles.deployableDesktopNavBarButtons} onClick={onDeployableNavBarClickHandler}>
        Sobre nosotras
      </button>
      <div className={styles.DeployableDesktopNavLines}></div>
      <button id="services" className={styles.deployableDesktopNavBarButtons} onClick={onDeployableNavBarClickHandler}>
        Servicios
      </button>
      <div className={styles.DeployableDesktopNavLines}> </div>
      <button id="gallery" className={styles.deployableDesktopNavBarButtons} onClick={onDeployableNavBarClickHandler}>
        Galeria
      </button>
      <div className={styles.DeployableDesktopNavLines}></div>
      <button id="contact" className={styles.deployableDesktopNavBarButtons} onClick={onDeployableNavBarClickHandler}>
        Contacto
      </button>
    </nav>
  );
}
