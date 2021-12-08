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
    } else {
      alert("Rellena todos los campos");
    }
  };

  return (
    <>
      <div class="d-flex justify-content-center">
        <div className="containerPrincipal2">
          <div className="containerSecundario2">
            <h2 className="card-title text-center">Contacto</h2>
            <div className="form-group">
              <label>Nombre Completo: </label>
              <br />{" "}
              <input
                type="text"
                placeholder="Nombre Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                id="inputs"
              />
              <br /> <label>Email: </label>
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
                id="inputs"
                placeholder="Escribe tu mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mensajeContacto"
              ></textarea>
              <br />{" "}
              <div className="d-flex justify-content-center">
                {" "}
                <button id="boton_iniciarSesion2" onClick={submit}>
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
