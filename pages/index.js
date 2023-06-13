import Navbar from "../components/navbar";
import About from "@/components/about";
import Galery from "@/components/galery";
import { indexStyles } from "../styles/_index.module.scss";

export default function Home() {
  return (
    <div className={indexStyles}>
      <Navbar />
      <About />
      <Galery />
    </div>
  );
}
