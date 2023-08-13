import Navbar from "../components/navbar";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import Carousel from "./carousel";
import Services from "./services";
import Contacto from "./contacto";
import LoaderMap from "./loaderMap";
import Footer from "@/components/footer";
import ToTopButton from "@/components/totopbutton";
import DeployableNavBar from "@/components/deployableNavBar";
import ContactButtons from "@/components/contactButtons";

import { indexStyles, mapContactoContainer, mapContainer, contactoContainer } from "../styles/_index.module.scss";
import { useEffect, useLayoutEffect, useState } from "react";
// import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  let initialY;
  if (typeof window !== "undefined") initialY = window.scrollY;
  let [yAxis, setYAxis] = useState(initialY);

  typeof window !== "undefined" &&
    (window.onscroll = function () {
      let scrollToY = window.scrollY;
      setYAxis(scrollToY);
    });

  let windowWidth;
  typeof window !== "undefined" && (windowWidth = window.innerWidth);

  // useLayoutEffect(() => {
  //   const scroll = new LocomotiveScroll();
  // });

  // useEffect(() => {
  //   // (async () => {
  //   //   const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //   // const locomotiveScroll = new LocomotiveScroll();
  //   // })();
  // });

  // const scroll = new LocomotiveScroll();

  return (
    <div className={indexStyles} data-scroll-container>
      <Navbar
        windowWidth={windowWidth}
        // data-scroll-section
      />
      <Carousel
      // data-scroll-section
      />
      <About
      // data-scroll-section
      />
      <Services
      // data-scroll-section
      />
      <Gallery
      // data-scroll-section
      />
      <div
        className={mapContactoContainer}
        // data-scroll-section
      >
        <div
          className={mapContainer}
          // data-scroll-section
        >
          <LoaderMap
          // data-scroll-section
          />
        </div>
        <div
          className={contactoContainer}
          // data-scroll-section
        >
          <Contacto
          // data-scroll-section
          />
        </div>
      </div>
      <Footer
      // data-scroll-section
      />
      <ToTopButton
        yAxis={yAxis}
        // data-scroll-section
      />
      <ContactButtons
        yAxis={yAxis}
        // data-scroll-section
      />
      <DeployableNavBar
        yAxis={yAxis}
        // data-scroll-section
      />
    </div>
  );
}
