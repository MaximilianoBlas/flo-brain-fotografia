import { aboutContainer, h2, h3, p, line } from "../styles/_about.module.scss";

export default function About() {
  return (
    <div className={aboutContainer}>
      <h2 className={h2}>About</h2>
      <h3 className={h3}>¡Gracias por estar acá!</h3>
      <p className={p}>
        Mi nombre es Florencia, tengo 27 años, soy <br />
        diseñadora y fotógrafa. Hace ya 10 años que trabajo <br />
        independientemente de mi pasión: <br />
        la fotografía de familia. <br />
        Hace 8 años trabajamos en equipo con mi mamá, Patricia. <br />
        Nada sería lo mismo sin ella, sabe estar en cada detalle <br />
        ¡Estoy agradecida de tenerla en mi vida <br />
        y compartir la misma pasión, es muy lindo! <br />
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
  );
}
