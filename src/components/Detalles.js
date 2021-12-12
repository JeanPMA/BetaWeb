import React, { Component } from "react";
import logotipo from "../imagenes/logotipoFinal.png";
class Detalles extends Component {
  render() {
    return (
      <div className="DescripcionLogo">
        <div id="DescripcionInicio">
          <div id="contenidoDescripcion">
            <h3 class="Titulo">
              ACERCA DE NOSOTROS... <pre></pre>
            </h3>
            <p>
              BETAWEB es una plataforma de cursos gratuitos, <br></br>
              dirigida al área de ciencias de la computación
            </p>
          </div>
        </div>
        <div id="logotipoInicio" class="d-flex justify-content-center">
          <img src={logotipo} width="290" height="190" alt="logotipo" />
        </div>
      </div>
    );
  }
}

export default Detalles;
