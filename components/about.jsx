import Image from "next/image";

import { aboutContainer, h2, h3, p, line, heartContainer } from "../styles/_about.module.scss";

import heartPng from "@/public/media/flo-heart.png";

export default function About({ windowWidth }) {
  return windowWidth && windowWidth < 850 ? (
    //Visión Mobil
    <div className={aboutContainer}>
      <h2 className={h2}>Sobre nosotras</h2>
      <h3 className={h3}>¡Gracias por estar acá!</h3>
      <p className={p}>
        Mi nombre es Florencia, tengo 27 años, soy <br />
        diseñadora y fotógrafa. Hace ya 10 años que trabajo <br />
        independientemente de mi pasión: <br />
        la fotografía de familia. <br />
        Hace 8 años trabajamos en equipo con mi mamá, Patricia. <br />
        Sabe estar en cada detalle,nada sería lo mismo sin ella. <br />
        Estoy agradecida de tenerla en mi vida <br />
        y compartir la misma pasión ¡Es muy lindo! <br />
        <br />
        Con el tiempo fue creciendo paso a paso el amor <br />
        por congelar para siempre los momentos mas importantes <br />
        de la vida. Los deditos y rollitos de las piernitas de tu <br />
        bebé en su primer año. Un gran abrazo con tu abuelo/a.
        <br />
        Una familia reunida. <br />
        <br />
        Amaría poder ser a quien elijas para retratar un recuerdo <br />
        tan importante para vos, que puedas volver a ese momento <br />
        con solo mirarla. Cada sesión y cada evento para nosotras <br />
        es especial, adoramos lo que hacemos y estamos a la <br />
        espera de tu propuesta para poder compartir <br />
        un momento unico.
      </p>
      <div className={line}></div>
    </div>
  ) : (
    //Visión Desktop
    <div className={aboutContainer}>
      <h2 className={h2}>Sobre nosotras</h2>
      <h3 className={h3}>¡Gracias por estar acá!</h3>
      <p className={p}>
        Mi nombre es Florencia, tengo 27 años, soy diseñadora y fotógrafa. <br />
        Hace ya 10 años que trabajo independientemente de mi pasión: la fotografía de familia. <br />
        Hace 8 años trabajamos en equipo con mi mamá, Patricia. Ella sabe estar en cada detalle, nada sería lo mismo sin ella. <br />
        Estoy agradecida de tenerla en mi vida y poder compartir la misma pasión, ¡Es muy lindo! <br />
        <br />
        Con el tiempo, el amor por congelar para siempre los momentos mas importantes de la vida fue creciendo. <br />
        Los deditos y la risa de tu bebé en su primer año. <br />
        Un gran abrazo con tu abuelo/a. <br />
        Una familia reunida. <br />
        <br />
        Amaría podamos ser quienes elijas para retratar un recuerdo así de importante para vos, <br />
        que puedas volver a ese momento cuando quieras. <br />
        Cada sesión y cada evento para nosotras es único y especial, <br />
        adoramos lo que hacemos y estamos a la espera de tu propuesta para poder compartir un momento unico.
      </p>
      <div className={heartContainer}>
        <Image src={heartPng} fill={true} alt="Heart icon" style={{ objectFit: "contain" }} />
      </div>
      <div className={line}></div>
    </div>
  );
}
