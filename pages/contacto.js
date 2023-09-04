import React, { useEffect, useState } from "react";
import {
  mainContainer,
  divForm,
  titleContainer,
  namesContainer,
  nameContainer,
  lastNameContainer,
  emailContainer,
  messageContainer,
  buttonContainer,
  button,
  p,
  label,
  h2,
  inputStyle,
} from "../styles/_contacto.module.scss";

export default function Contacto() {
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({});
  const [onCS, setOnCS] = useState(false);

  function inputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function validate(input) {
    // const [errors, setErrors] = React.useState ({});
    let errors = {};
    if (!input.name) errors.name = "El nombre es requerido";
    else if (/([0-9])/.test(input.name)) errors.name = "Nombre invalido, no se permiten numeros";

    if (!input.lastname) errors.lastname = "El apellido es requerido";
    else if (/([0-9])/.test(input.lastname)) errors.lastname = "Apellido invalido, no se permiten numeros";

    if (!input.email) errors.email = "El email es requerido";
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email)) errors.email = "Formato de email invalido";

    if (!input.message) errors.message = "El mensaje es requerido";
    else if (!/[\w\s]{20,}/.test(input.message)) errors.message = "El mensaje debe contener 20 caracteres como minimo";

    return errors;
  }

  useEffect(() => {
    setOnCS(true);
  });

  return (
    onCS && (
      <div className={mainContainer}>
        {/* <div> */}
        <form action="https://formsubmit.co/5b2874ac538366ee8f8a1f48f74e64a6" method="POST">
          <div className={divForm}>
            <div className={titleContainer}>
              <h2 className={h2}>Contacto</h2>
            </div>

            <div className={namesContainer}>
              <div className={nameContainer}>
                <label htmlFor="name" className={label}>
                  Nombre
                </label>
                <input
                  // value=""
                  type="text"
                  name="name"
                  placeholder="Ingrese su nombre aquí"
                  className={inputStyle}
                  onChange={(e) => inputChange(e)}
                />
                {error.name && <p className={p}>{error.name}</p>}
              </div>
              <div className={lastNameContainer}>
                <label htmlFor="lastname" className={label}>
                  Apellido
                </label>
                <input
                  // value=""
                  type="text"
                  name="lastname"
                  placeholder="Ingrese su apellido aquí"
                  className={inputStyle}
                  onChange={(e) => inputChange(e)}
                />
                {error.lastname && <p className={p}>{error.lastname}</p>}
              </div>
            </div>
            <div className={emailContainer}>
              <label htmlFor="email" className={label}>
                Email
              </label>
              <input
                // value=""
                type="text"
                name="email"
                onChange={(e) => inputChange(e)}
                className={inputStyle}
                placeholder="Ingrese su mail aquí"
              />
              {error.email && <p className={p}>{error.email}</p>}
            </div>
            <div className={messageContainer}>
              <label htmlFor="message" className={label}>
                Mensaje: ( Especificar fecha, tipo de sesión o evento) en caso de ser evento : Fecha/ cantidad de invitados / horario aproximados / cantidad de invitados.
              </label>
              <textarea
                className={inputStyle}
                // value=""
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Escribe tu mensaje"
                onChange={(e) => inputChange(e)}
              ></textarea>
              {error.message && <p className={p}>{error.message}</p>}
            </div>
            <div className={buttonContainer}>
              <input className={button} type="submit" value="Enviar" />
            </div>
            <input type="hidden" name="_next" value="http://localhost:3000/"></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_template" value="table"></input>
            {/*podemos dar respuestas automaticas al mail enviado*/}
          </div>
        </form>
        {/* </div> */}
      </div>
    )
  );
}
