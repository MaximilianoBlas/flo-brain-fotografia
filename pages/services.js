import Image from "next/image";
import {
    mainContainer,
    cardContainer,
    arrayContainer,
    title,
    content,
    image,
    textContainer,
    imageContainer,
    imageContainerOpacity,
    imageContainerDesktop,
    titleServiceContainer, titleContainer
} from "../styles/_services.module.scss";
import React, { useState } from "react";
import { color } from "framer-motion";

export default function Services() {
    let [selectedService, setSelectedService] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
    });

    const selectedServiceOrigin = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
    };

    let windowSize = typeof window !== "undefined" && window.innerWidth;

    const changeSelectedService = (e) => {
      
        if (!selectedService[e.target.id]) {
            setSelectedService({
                selectedServiceOrigin,
                [e.target.id]: !selectedService[e.target.id],
            });
        } else   setSelectedService({
            ...selectedService,
            [e.target.id]: !selectedService[e.target.id],
        });
    };

    const serviceArray = [
        {
            navegation: "/Infantil.jpg",
            title: "Sesiones infantiles",
            content:
                "Para que quede congelado para siempre el crecimiento de tu pequeño/a , guardamos gestos, instantes para siempre.",
        },
        {
            navegation: "/Comunion.jpg",
            title: "Comuniones",
            content:
                "El resultado de las fotografías de primera comunión será irrepetible, una sesión de fotos diferente, naturales.",
        },
        {
            navegation: "/Maternidad.jpg",
            title: "Sesiones Maternidad",
            content:
                "La llegada de un nuevo miembro a la familia, la dulce espera. Retratamos la conexión de mamá con su bebé , así también con su pareja y hermanit@s si los hubiera. Es una sesión de amor.",
        },
        {
            navegation: "/15 anos.jpg",
            title: "15 Años Sesión",
            content:
                "Disfruta de este momento especial y nosotros nos encargamos de todo lo demás.La temática de tu sesión la elegís vos.",
        },
        {
            navegation: "/Fiesta.jpg",
            title: "Eventos",
            content: `
- Graduaciones 

- Bautismos

- Primer añito

-Cumpleaños

-Bodas

Cobertura de tu evento, registrando cada momento

`,
        },
    ];

    const contentArray = [
        "Sesiones infantiles Para que quede congelado para siempre el crecimiento de tu pequeño/a , guardamos gestos, instantes para siempre.",
    ];

    return (
        <div>
                <div className={titleContainer}>
                    <h2 className={title}>Servicios</h2>
                </div>
            <div className={mainContainer}>
                <div className={arrayContainer}>
                    {serviceArray.map((e, i) => {
                        return (
                            <div
                                onClick={(e) => changeSelectedService(e)}
                                className={cardContainer}
                                key={i}
                                id={i}
                            >
                                <div className={titleServiceContainer}>
                                    <h3 className={title} id={i}>
                                        {e.title}{" "}
                                    </h3>
                                </div>
                                <div
                                    className={
                                        windowSize && windowSize > 800
                                            ? imageContainerDesktop
                                            : selectedService[i]
                                            ? imageContainer
                                            : imageContainerOpacity
                                    }
                                >
                                    <Image
                                        className={image}
                                        src={e.navegation}
                                        // fill={true}
                                        width={240}
                                        height={300}
                                        alt=""
                                        id={i}
                                        priority
                                    />
                                    {/* <div className={divBlur}></div> */}
                                </div>
                                <div className={textContainer}>
                                    <p className={content}>{e.content}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
