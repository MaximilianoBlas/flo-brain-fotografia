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
import DeployableDesktopNavBar from "@/components/deployableDesktopNavBar";

import {
  useEffect,
  // useLayoutEffect,
  useState,
} from "react";
import ServicesAndi from "@/components/servicesAndi";
// import LocomotiveScroll from "locomotive-scroll";

import {
  indexStyles,
  mapContactoContainer,
  //  mapContainer,
  //  contactoContainer,
} from "../styles/_index.module.scss";

export default function Home() {
  let initialY;
  if (typeof window !== "undefined") initialY = window.scrollY;
  let [yAxis, setYAxis] = useState(initialY);
  const [onCS, setOnCS] = useState(false);

  typeof window !== "undefined" &&
    (window.onscroll = function () {
      let scrollToY = window.scrollY;
      // console.log(window.scrollY);
      setYAxis(scrollToY);
    });

  let windowWidth;
  typeof window !== "undefined" && (windowWidth = window.innerWidth);

  useEffect(() => {
    setOnCS(true);
  }, []);

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
    onCS && (
      <div className={indexStyles} data-scroll-container>
        <Navbar windowWidth={windowWidth} />
        <DeployableDesktopNavBar yAxis={yAxis} windowWidth={windowWidth} />
        <Carousel />
        <About windowWidth={windowWidth} />
        {windowWidth > 850 ? <ServicesAndi /> : <Services />}
        <Gallery windowWidth={windowWidth} />
        <div className={mapContactoContainer}>
          {/* <div className={mapContainer}> */}
          <LoaderMap />
          {/* </div> */}
          {/* <div className={contactoContainer}> */}
          <Contacto />
          {/* </div> */}
        </div>
        <Footer />
        <ToTopButton yAxis={yAxis} windowWidth={windowWidth} />
        {windowWidth <= 850 && <ContactButtons yAxis={yAxis} windowWidth={windowWidth} />}
        {windowWidth <= 850 && <DeployableNavBar yAxis={yAxis} />}
      </div>
    )
  );
}
