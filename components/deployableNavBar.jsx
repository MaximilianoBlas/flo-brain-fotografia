import {
  deployableNavBarButton,
  lines,
  // deployableNavBarContainer,
  deployableNavBar,
  // emptyDeployableNavBarSpace,
  navBarButtons,
  //navBarButtonsFirst,
  //navBarButtonsLast,
  closeButton,
  lineContainer,
  closeButtonLineU,
  closeButtonLineD,
} from "@/styles/_deployablenavbar.module.scss";
import { useEffect, useState } from "react";

export default function DeployableNavBar({ yAxis }) {
  let [showNavBar, setshowNavBar] = useState(false);
  let [onClient, setOnClient] = useState(false);

  function navBarButtonClickHandler() {
    console.log("im navBarButtonClickHandler!", !showNavBar);
    setshowNavBar(!showNavBar);
  }
  function closeNavBarHandler() {
    setshowNavBar(false);
  }

  const scrollToY = (e) => {
    e.target.id === "about"
      ? window.scrollTo({ top: 655, behavior: "smooth" })
      : e.target.id === "services"
      ? window.scrollTo({ top: 1055, behavior: "smooth" })
      : e.target.id === "gallery"
      ? window.scrollTo({ top: 1495, behavior: "smooth" })
      : e.target.id === "contact"
      ? window.scrollTo({ top: 2855, behavior: "smooth" })
      : console.log("scrollToY is failing");

    setshowNavBar(false);
  };

  useEffect(() => {
    // console.log(yAxis);
    setOnClient(true);
  }, []);

  return (
    onClient && (
      <div>
        <button style={yAxis >= 302 ? { opacity: 1 } : { opacity: 0, zIndex: -1 }} className={deployableNavBarButton} onClick={navBarButtonClickHandler}>
          <div className={lines}></div>
          <div className={lines}></div>
          <div className={lines}></div>
        </button>
        {/*<section style={showNavBar ? { zIndex: 100 } : { zIndex: -1 }} className={deployableNavBarContainer}>
        <div className={emptyDeployableNavBarSpace}></div>*/}
        <div style={showNavBar ? { opacity: 1 } : { right: -400 }} className={deployableNavBar}>
          <nav id="about" className={navBarButtons} onClick={scrollToY}>
            Sobre nosotras
          </nav>
          <nav id="services" className={navBarButtons} onClick={scrollToY}>
            Servicios
          </nav>
          <nav id="gallery" className={navBarButtons} onClick={scrollToY}>
            Galería
          </nav>
          <nav id="contact" className={navBarButtons} onClick={scrollToY}>
            Contacto
          </nav>
          <button onClick={closeNavBarHandler} className={closeButton}>
            <div className={lineContainer}>
              <div className={closeButtonLineU}></div>
              <div className={closeButtonLineD}></div>
            </div>
          </button>
        </div>
        {
          //</section>
        }
      </div>
    )
  );
}
