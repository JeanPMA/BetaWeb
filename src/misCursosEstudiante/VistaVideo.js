import React from "react";

import NavegacionInstructor from "../components/NavegacionInstructor";
import Modulo from "./MisVideo";
import Contenido_misCursosDocente from "../components/Contenido_misCursosDocente";
import MisVideo from "./MisVideo";


function VistaVideo() {
  return (
    <>
      <div className="navegacion-menu">
        <NavegacionInstructor />
      </div>
      <div className="container-instructor">
        <div className="contenido-pagina">
          <div className="contenido">
            <Contenido_misCursosDocente />
          </div>
          <div className="Modulo">
           <MisVideo/>
          </div>
        </div>
      </div>
    </>
  );
}

export default VistaVideo;