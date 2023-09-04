import Image from "next/image";

import styles from "@/styles/_deployableDesktopNavBar.module.scss";

import logo from "../public/media/logo-footer-cropped.png";

export default function DeployableDesktopNavBar({ yAxis }) {
  return (
    <nav className={styles.deployableDesktopNavBarNav} style={{ opacity: yAxis > 390 ? 1 : 0 }}>
      <div className={styles.logoContainer}>
        <Image src={logo} fill={true} style={{ objectFit: "contain" }} alt="Logo Flo Brain Fotografía" />
      </div>
      <button className={styles.deployableDesktopNavBarButtons}>Sobre nosotras</button>
      <div className={styles.DeployableDesktopNavLines}></div>
      <button className={styles.deployableDesktopNavBarButtons}>Servicios</button>
      <div className={styles.DeployableDesktopNavLines}> </div>
      <button className={styles.deployableDesktopNavBarButtons}>Galeria</button>
      <div className={styles.DeployableDesktopNavLines}></div>
      <button className={styles.deployableDesktopNavBarButtons}>Contacto</button>
    </nav>
  );
}
