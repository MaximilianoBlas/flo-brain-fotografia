
import Navbar from "../components/navbar";
import About from "@/components/about";
import Galery from "@/components/galery";
import Carousel from "./carousel";
import Services from "./services";
import Contacto from "./contacto";
import Map from "./map"
import { indexStyles } from "../styles/_index.module.scss";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
        const { isLoaded } = useLoadScript({
            googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        });

        if (!isLoaded) return <div>Loading...</div>;
  return (
      <div className={indexStyles}>
          <Map/>
      </div>
  );
}
