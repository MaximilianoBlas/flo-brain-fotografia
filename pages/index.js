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
import { useEffect, useState } from "react";

export default function Home() {
  let initialY;
  if (typeof window !== "undefined") initialY = window.scrollY;
  let [yAxis, setYAxis] = useState(initialY);

  typeof window !== "undefined" &&
    (window.onscroll = function () {
      let scrollToY = window.scrollY;
      setYAxis(scrollToY);
    });

  return (
    <div className={indexStyles}>
      <Navbar />
      <Carousel />
      <About />
      <Services />
      <Gallery />
      <div className={mapContactoContainer}>
        <div className={mapContainer}>
          <LoaderMap />
        </div>
        <div className={contactoContainer}>
          <Contacto />
        </div>
      </div>
      <Footer />
      <ToTopButton yAxis={yAxis} />
      <ContactButtons yAxis={yAxis} />
      <DeployableNavBar yAxis={yAxis} />
    </div>
  );
}
