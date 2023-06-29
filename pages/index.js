import Navbar from "../components/navbar";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import Carousel from "./carousel";
import Services from "./services";
import Contacto from "./contacto";
import LoaderMap from "./loaderMap";
import Footer from "@/components/footer";
import { indexStyles, mapContactoContainer, mapContainer, contactoContainer } from "../styles/_index.module.scss";
import { useEffect, useState } from "react";
import ToTopButton from "@/components/totopbutton";
import DeployableNavBarButton from "@/components/deployableNavBarButton";

export default function Home() {
  let initialY;
  if (typeof window !== "undefined") initialY = window.scrollY;
  let [yAxis, setYAxis] = useState(initialY);

  typeof window !== "undefined"
    ? (window.onscroll = function () {
        let scrollToY = window.scrollY;
        setYAxis(scrollToY);
        console.log(scrollToY);
      })
    : null;

  return (
    <div className={indexStyles}>
      <Navbar />
      <Carousel />
      <About id="about" />
      <Services id="services" />
      <Gallery id="gallery" />
      <div className={mapContactoContainer}>
        <div className={mapContainer}>
          <LoaderMap />
        </div>
        <div className={contactoContainer}>
          <Contacto id="contacto" />
        </div>
      </div>
      <Footer />
      <ToTopButton props={{ yAxis }} />
      <DeployableNavBarButton props={{ yAxis }} />
    </div>
  );
}
