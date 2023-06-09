import { title, aboutContainer } from "../styles/_about.module.scss";

export default function About() {
  return (
    <div className={aboutContainer}>
      <span className={title}>About</span>
      <span>¡Gracias por estar acá!</span>
      <span>
        Mi nombre es Florencia, tengo 27 años, soy diseñadora y fotógrafa. Hace ya 10 años que trabajo independientemente de mi pasión: la fotografía de familia. Trabajamos en
        equipo con mi mamá, Patricia, hace 8 años. Nada sería lo mismo sin ella, sabe estar en cada detalle ¡Estoy agradecida de tenerla en mi vida y compartir la misma pasión! ¡Es
        muy lindo! Con el tiempo fue creciendo paso a paso el amor por congelar para siempre los momentos mas importantes de la vida. Los deditos, y los rollitos de las piernitas
        de tu bebé en su primer año. Un gran abrazo con tu abuelo/a. Una familia reunida.
      </span>
      <span>
        Amaría poder ser a quien elijas para retratar un recuerdo tan importante para vos, que puedas volver a ese momento con solo mirarla. Cada sesión y cada evento para nosotras
        es especial, adoramos lo que hacemos y estamos a la espera de tu propuesta para poder compartir un momento unico.
      </span>
    </div>
  );
}
