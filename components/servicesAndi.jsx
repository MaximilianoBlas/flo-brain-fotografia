import Image from "next/image";

import style from "@/styles/_servicesandi.module.scss";
import { useEffect, useState } from "react";

// import infantil from "@/public/Infantil.jpg"
// import comunion from "@/public/Comunion.jpg"
// import maternidad from "@/"

export default function ServicesAndi() {
  // let windowSize = typeof window !== "undefined" && window.innerWidth;

  const [onCS, setOnCS] = useState(false);

  useEffect(() => {
    setOnCS(true);
  }, []);

  const serviceArray = [
    {
      navegation: "/Infantil.jpg",
      title: "Sesiones infantiles",
      content: "Que quede retratado el crecimiento de tu pequeño/a. Guardamos gestos e instantes para siempre.",
    },
    {
      navegation: "/Comunion.jpg",
      title: "Comuniones",
      content: "El resultado de las fotografías de primera comunión será irrepetible, una sesión de fotos diferente, natural.",
    },
    {
      navegation: "/Maternidad.jpg",
      title: "Sesiones de Maternidad",
      content: "La llegada de un nuevo miembro a la familia, la dulce espera. Retratamos la conexión de mamá con su bebé y su familia. Una sesión de puro amor.",
    },
    {
      navegation: "/15 anos.jpg",
      title: "15 Años",
      content: "Disfruta de este momento especial y nosotras nos encargamos de todo lo demás. Vos elegís la temática de tu sesión.",
    },
    {
      navegation: "/Fiesta.jpg",
      title: "Eventos",
      content: `Graduaciones, bautismos, primer añito, cumpleaños, bodas. Cubrimos tu evento registrando cada momento.`,
    },
  ];

  return onCS ? (
    <section className={style.mainContainer}>
      {/* <div className={style.h2Container}> */}
      <h2 className={style.title}>Servicios</h2>
      {/* </div> */}
      <div className={style.serviceContainer}>
        {serviceArray.map((service, i) => {
          return (
            <article key={i} className={style.serviceCard}>
              <h3 className={style.serviceTitle}>{service.title}</h3>
              <p className={style.serviceContent}>{service.content}</p>
              <div className={style.serviceImageContainer}>
                <Image src={service.navegation} alt={service.title} fill={true} style={{ objectFit: "cover" }} className={style.serviceImage} />
              </div>
            </article>
          );
        })}
      </div>
      <div className={style.finalLine}></div>
    </section>
  ) : null;
}
