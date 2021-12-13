import React from "react";

import NavegacionInstructor from "../components/NavegacionInstructor";
import Lista from "./Lista";
import Contenido_misCursosDocente from "../components/Contenido_misCursosDocente";
function VistaLista() {
  return (
    <>
      <div className="navegacion-menu">
        <NavegacionInstructor />
      </div>
      <div className="">
        <div className="contenido-pagina">
          <div className="contenido">
            <Contenido_misCursosDocente />
          </div>
          <div className="lista">
            <Lista />
          </div>
        </div>
      </div>
    </>
  );
}

export default VistaLista;
