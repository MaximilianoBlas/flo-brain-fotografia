
import Navbar from "../components/navbar";
import About from "@/components/about";
import Galery from "@/components/galery";
import Carousel from "./carousel";
import Services from "./services";
import Contacto from "./contacto";
import { indexStyles } from "../styles/_index.module.scss";

export default function Home() {
  return (
    <div className={indexStyles}>
      <Navbar />
      <Carousel/>
      <About />
      <Services/>
      <Galery />
      <Contacto/>
    </div>
  );
}
