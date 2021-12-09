import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./Contacto.css";
const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_aeud5kh";
      const templateId = "template_g7dxzdj";
      const userId = "user_MSHYhRNN8JE8Uz5WsH1Cg";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");

      alert("El mensaje fue enviado");
      window.location.href = window.location.href;
    } else {
    }
  };

  return (
    <>
      <div class="d-flex justify-content-center">
        <div className="containerPrincipal2">
          <div className="containerSecundario2">
            <h2 className="card-title text-center">Contacto</h2>
            <form className="form-group" onSubmit={submit}>
              <label>Nombre Completo: </label>
              <br />{" "}
              <input
                pattern="[a-zA-Z ]{2,254}"
                Type="text"
                maxLength="40"
                placeholder="Nombre Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                id="inputs"
              />
              <small className="caracteres">Caract. Max. 40</small>
              <br /> <label>Email:</label>
              <br />{" "}
              <input
                id="inputs"
                type="email"
                required
                placeholder="alguien@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br /> <label>Mensaje: </label>
              <br />{" "}
              <textarea
                maxLength="350"
                id="inputs"
                placeholder="Escribe tu mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mensajeContacto"
              ></textarea>
              <small className="caracteres">Caract. Max. 350</small>
              <br />{" "}
              <div className="d-flex justify-content-center">
                {" "}
                <button type="submit" id="boton_iniciarSesion2">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
