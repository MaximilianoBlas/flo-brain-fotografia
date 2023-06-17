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
    divBlur
} from "../styles/_services.module.scss";

export default function Services() {
    const serviceArray = [
        {
            navegation: "/Sesiones Infantiles.webp",
            title: "Sesiones infantiles",
            content:
                "Para que quede congelado para siempre el crecimiento de tu pequeño/a , guardamos gestos, instantes para siempre.",
        },
        {
            navegation: "/Comuniones.webp",
            title: "Comuniones",
            content:
                "El resultado de las fotografías de primera comunión será irrepetible, una sesión de fotos diferente, naturales.",
        },
        {
            navegation: "/Sesiones Maternidad.webp",
            title: "Sesiones Maternidad",
            content:
                "La llegada de un nuevo miembro a la familia, la dulce espera. Retratamos la conexión de mamá con su bebé , así también con su pareja y hermanit@s si los hubiera. Es una sesión de amor.",
        },
        {
            navegation: "/15 Años Sesion.webp",
            title: "15 Años Sesión",
            content:
                "Disfruta de este momento especial y nosotros nos encargamos de todo lo demás.La temática de tu sesión la elegís vos.",
        },
        {
            navegation: "/Eventos.webp",
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
        <div className={mainContainer}>
            <div className={arrayContainer}>
                {serviceArray.map((e, i) => {
                    return (
                        <div className={cardContainer} key={i}>
                            <div
                                className={imageContainer}
                                // style={{
                                //     backgroundImage:`url("${e.navegation}")`,
                                // }}
                            >
                                <h3 className={title}>{e.title}</h3>
                                <Image
                                    className={image}
                                    src={e.navegation}
                                    fill={true}
                                    alt=""
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
    );
}
