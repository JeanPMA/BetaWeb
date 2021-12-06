import React, { Component } from "react";
import logotipo from "../imagenes/logotipoFinal.png";
class Detalles extends Component {
  render() {
    return (
      <>
      <div class="d-flex bd-highlight mb-3">
        <div id="DescripcionInicio" class="me-auto p-2 bd-highlight">
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
            <div class="p-2 bd-highlight" id="logotipoInicio">
                 <a>
            <img src={logotipo} width="290" height="190" />
               </a>
           </div>
        </div>
        
      </>
    );
  }
}

export default Detalles;
